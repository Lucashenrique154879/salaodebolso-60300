import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, SmilePlus, Frown, Meh, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface SentimentResult {
  sentiment: 'positivo' | 'negativo' | 'neutro';
  confidence: number;
  explanation: string;
  keywords: string[];
}

const SentimentAnalyzer = () => {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<SentimentResult | null>(null);
  const { toast } = useToast();

  const analyzeSentiment = async () => {
    if (!text.trim()) {
      toast({
        title: "Texto vazio",
        description: "Por favor, insira um texto para análise",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setResult(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/sentiment-analysis`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Erro ao analisar sentimento');
      }

      const data = await response.json();
      setResult(data);
      
      toast({
        title: "✅ Análise concluída",
        description: `Sentimento identificado: ${data.sentiment}`,
      });
    } catch (error) {
      console.error('Erro:', error);
      toast({
        title: "Erro na análise",
        description: error instanceof Error ? error.message : "Erro desconhecido",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positivo':
        return <SmilePlus className="w-8 h-8 text-green-500" />;
      case 'negativo':
        return <Frown className="w-8 h-8 text-red-500" />;
      case 'neutro':
        return <Meh className="w-8 h-8 text-yellow-500" />;
      default:
        return <Meh className="w-8 h-8" />;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positivo':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'negativo':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'neutro':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <CardTitle>Análise de Sentimento com IA</CardTitle>
          </div>
          <CardDescription>
            Descubra o sentimento do seu texto usando inteligência artificial avançada
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="text-input" className="text-sm font-medium">
              Digite ou cole o texto para análise
            </label>
            <Textarea
              id="text-input"
              placeholder="Ex: Estou muito feliz com os resultados do projeto!"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={6}
              className="resize-none"
            />
          </div>

          <Button 
            onClick={analyzeSentiment} 
            disabled={isAnalyzing || !text.trim()}
            className="w-full"
            size="lg"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analisando...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Analisar Sentimento
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Resultado da Análise</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              {getSentimentIcon(result.sentiment)}
              <div className="flex-1">
                <Badge 
                  variant="outline" 
                  className={`${getSentimentColor(result.sentiment)} text-lg px-4 py-2 font-semibold`}
                >
                  {result.sentiment.toUpperCase()}
                </Badge>
                <p className="text-sm text-muted-foreground mt-2">
                  Confiança: {result.confidence.toFixed(1)}%
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground">Explicação</h4>
              <p className="text-foreground">{result.explanation}</p>
            </div>

            {result.keywords.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-muted-foreground">
                  Palavras-chave identificadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {result.keywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SentimentAnalyzer;
