import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { text } = await req.json();
    
    if (!text || text.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Texto não fornecido' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY não configurada');
    }

    console.log('Analisando sentimento do texto:', text.substring(0, 50) + '...');

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: 'Você é um especialista em análise de sentimento de textos em português. Analise o texto e identifique o sentimento geral.'
          },
          {
            role: 'user',
            content: `Analise o sentimento do seguinte texto: "${text}"`
          }
        ],
        tools: [
          {
            type: 'function',
            function: {
              name: 'analyze_sentiment',
              description: 'Retorna a análise de sentimento do texto',
              parameters: {
                type: 'object',
                properties: {
                  sentiment: {
                    type: 'string',
                    enum: ['positivo', 'negativo', 'neutro'],
                    description: 'O sentimento identificado no texto'
                  },
                  confidence: {
                    type: 'number',
                    description: 'Nível de confiança da análise (0-100)'
                  },
                  explanation: {
                    type: 'string',
                    description: 'Explicação breve sobre o sentimento identificado'
                  },
                  keywords: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'Palavras-chave que indicam o sentimento'
                  }
                },
                required: ['sentiment', 'confidence', 'explanation', 'keywords'],
                additionalProperties: false
              }
            }
          }
        ],
        tool_choice: { type: 'function', function: { name: 'analyze_sentiment' } }
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Limite de requisições excedido. Tente novamente mais tarde.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Créditos insuficientes. Adicione créditos ao workspace.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('Erro na API de IA:', response.status, errorText);
      throw new Error('Erro ao chamar API de IA');
    }

    const result = await response.json();
    console.log('Resposta da IA:', JSON.stringify(result));

    const toolCall = result.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      throw new Error('Resposta da IA não contém análise de sentimento');
    }

    const analysis = JSON.parse(toolCall.function.arguments);
    console.log('Análise extraída:', analysis);

    return new Response(
      JSON.stringify(analysis),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Erro na análise de sentimento:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Erro desconhecido' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
