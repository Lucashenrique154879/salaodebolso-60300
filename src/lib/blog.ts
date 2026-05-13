export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  dateISO: string;
  readingTime: string;
  keywords: string[];
  content: Array<{ heading: string; paragraphs: string[] }>;
};

export const posts: BlogPost[] = [
  {
    slug: "sistema-para-salao-de-beleza-o-que-avaliar",
    title: "Sistema para salão de beleza: o que avaliar antes de escolher",
    description:
      "Checklist prático para escolher um sistema de gestão para salão: agenda online, cadastro de clientes, financeiro, relatórios e suporte.",
    dateISO: "2026-05-13",
    readingTime: "6 min",
    keywords: ["sistema para salão", "gestão de salão de beleza", "agenda online", "controle financeiro", "software para barbearia"],
    content: [
      {
        heading: "1) Agenda online e rotina do atendimento",
        paragraphs: [
          "A agenda é o centro do salão. Um bom sistema precisa facilitar remarcação, confirmação e visão rápida do dia.",
          "Procure por fluxo simples (poucos cliques) e tela legível no celular.",
        ],
      },
      {
        heading: "2) Cadastro de clientes e histórico",
        paragraphs: [
          "Recorrência acontece quando você conhece o cliente. Histórico de serviços, preferências e contatos ajudam a aumentar retorno.",
          "Quanto mais rápido for consultar e atualizar dados, mais o time usa na prática.",
        ],
      },
      {
        heading: "3) Financeiro: entradas, saídas e visão do caixa",
        paragraphs: [
          "O mínimo é registrar entradas e saídas com categorias. O ideal é ter relatórios para enxergar lucratividade e sazonalidade.",
          "Evite depender de planilhas: o custo é tempo, erro e falta de consistência.",
        ],
      },
      {
        heading: "4) Relatórios e metas",
        paragraphs: [
          "Relatórios simples (faturamento, serviços mais vendidos, horários mais disputados) já mudam decisões.",
          "Metas ajudam a alinhar equipe e manter a rotina previsível.",
        ],
      },
      {
        heading: "5) Suporte e implantação",
        paragraphs: [
          "O melhor sistema é o que entra em uso rápido. Suporte via WhatsApp e orientação inicial economizam semanas de tentativa e erro.",
        ],
      },
    ],
  },
  {
    slug: "como-reduzir-faltas-com-link-de-agendamento",
    title: "Como reduzir faltas com link de agendamento e confirmação",
    description:
      "Estratégias simples para diminuir no-show: link de agendamento 24/7, mensagens padrão, regras de confirmação e organização da agenda.",
    dateISO: "2026-05-13",
    readingTime: "5 min",
    keywords: ["link de agendamento", "agenda online", "reduzir faltas", "no-show", "gestão de salão"],
    content: [
      {
        heading: "Link de agendamento 24/7",
        paragraphs: [
          "Quando o cliente agenda sozinho, você reduz troca de mensagens e mantém o histórico organizado.",
          "Use um link único e compartilhe no Instagram, WhatsApp e Google Perfil da Empresa.",
        ],
      },
      {
        heading: "Confirmação clara e regras simples",
        paragraphs: [
          "Defina uma regra de confirmação (ex.: confirmar até X horas antes) e comunique de forma objetiva.",
          "Padronize mensagens para evitar ruído e manter consistência.",
        ],
      },
      {
        heading: "Agenda com espaços inteligentes",
        paragraphs: [
          "Evite encaixes que quebram a rotina. Uma agenda bem montada reduz atrasos e melhora a experiência do cliente.",
        ],
      },
    ],
  },
  {
    slug: "controle-financeiro-para-salao-de-beleza-sem-planilha",
    title: "Controle financeiro para salão de beleza (sem planilha)",
    description:
      "Como organizar entradas e saídas, enxergar o caixa e tomar decisões com relatórios simples usando um sistema de gestão.",
    dateISO: "2026-05-13",
    readingTime: "7 min",
    keywords: ["controle financeiro", "financeiro salão de beleza", "gestão de salão", "relatórios", "caixa"],
    content: [
      {
        heading: "O básico que resolve 80%",
        paragraphs: [
          "Registre entradas e saídas diariamente. Categorize por serviço, produto e despesas fixas.",
          "Uma rotina curta e constante vale mais que um controle perfeito e raro.",
        ],
      },
      {
        heading: "Relatórios simples para decisões rápidas",
        paragraphs: [
          "Com poucos relatórios você já identifica dias fortes, serviços mais rentáveis e custos que crescem sem você perceber.",
        ],
      },
      {
        heading: "Evite a armadilha da planilha",
        paragraphs: [
          "Planilhas funcionam no começo, mas viram gargalo quando o volume cresce. Um sistema ajuda a manter consistência e reduzir erros.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

