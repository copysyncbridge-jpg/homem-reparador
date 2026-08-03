// Todos os dados mock do app. Nenhuma chamada de API real.

export type QuizOptionData = {
  value: string;
  label: string;
  icon: string; // emoji
};

export type QuizQuestionData = {
  id: string;
  index: number;
  type: "text" | "single" | "multi" | "biotipo";
  eyebrow: string;
  title: string;
  subtitle?: string;
  placeholder?: string;
  options?: QuizOptionData[];
};

export const QUIZ_QUESTIONS: QuizQuestionData[] = [
  {
    id: "nome",
    index: 1,
    type: "text",
    eyebrow: "Pergunta 1 de 12",
    title: "Antes de tudo, como posso te chamar?",
    subtitle: "Vamos personalizar cada detalhe do seu protocolo.",
    placeholder: "Como posso te chamar?",
  },
  {
    id: "idade",
    index: 2,
    type: "single",
    eyebrow: "Pergunta 2 de 12",
    title: "Qual é a sua faixa etária?",
    options: [
      { value: "18-29", label: "18 a 29 anos", icon: "🧑" },
      { value: "30-44", label: "30 a 44 anos", icon: "👨" },
      { value: "45-59", label: "45 a 59 anos", icon: "🧔" },
      { value: "60+", label: "60 anos ou mais", icon: "👴" },
    ],
  },
  {
    id: "biotipo",
    index: 3,
    type: "biotipo",
    eyebrow: "Pergunta 3 de 12",
    title: "Qual desses biotipos mais se parece com você hoje?",
    subtitle: "Isso ajuda a calibrar as dosagens do seu protocolo.",
    options: [
      { value: "magro", label: "Magro", icon: "🦷" },
      { value: "medio", label: "Médio", icon: "⚖️" },
      { value: "acima-peso", label: "Acima do peso", icon: "🏋️" },
    ],
  },
  {
    id: "objetivo",
    index: 4,
    type: "single",
    eyebrow: "Pergunta 4 de 12",
    title: "Qual é o seu principal objetivo agora?",
    options: [
      { value: "energia", label: "Recuperar energia e disposição", icon: "⚡" },
      { value: "confianca", label: "Aumentar autoconfiança", icon: "🦁" },
      { value: "performance", label: "Melhorar performance física", icon: "💪" },
      { value: "saude", label: "Cuidar da saúde a longo prazo", icon: "🛡️" },
    ],
  },
  {
    id: "energia",
    index: 5,
    type: "single",
    eyebrow: "Pergunta 5 de 12",
    title: "Como está seu nível de energia na maior parte dos dias?",
    options: [
      { value: "baixo", label: "Baixo, canso fácil", icon: "🔋" },
      { value: "medio", label: "Médio, oscila bastante", icon: "🔋" },
      { value: "alto", label: "Alto, mas quero mais", icon: "🔋" },
    ],
  },
  {
    id: "interesses",
    index: 6,
    type: "multi",
    eyebrow: "Pergunta 6 de 12",
    title: "Quais áreas você quer priorizar?",
    subtitle: "Selecione quantas quiser.",
    options: [
      { value: "sono", label: "Sono", icon: "🌙" },
      { value: "estresse", label: "Estresse", icon: "🧘" },
      { value: "vitalidade", label: "Vitalidade", icon: "🔥" },
      { value: "estetica", label: "Estética", icon: "✨" },
      { value: "alimentacao", label: "Alimentação", icon: "🥗" },
      { value: "foco", label: "Foco mental", icon: "🎯" },
    ],
  },
  {
    id: "exercicio",
    index: 7,
    type: "single",
    eyebrow: "Pergunta 7 de 12",
    title: "Com que frequência você se exercita?",
    options: [
      { value: "nunca", label: "Quase nunca", icon: "🛋️" },
      { value: "as-vezes", label: "1 a 2 vezes por semana", icon: "🚶" },
      { value: "regular", label: "3 a 4 vezes por semana", icon: "🏃" },
      { value: "intenso", label: "5 vezes ou mais", icon: "🏆" },
    ],
  },
  {
    id: "sono",
    index: 8,
    type: "single",
    eyebrow: "Pergunta 8 de 12",
    title: "Como você avalia a qualidade do seu sono?",
    options: [
      { value: "ruim", label: "Ruim, acordo cansado", icon: "😴" },
      { value: "regular", label: "Regular, poderia ser melhor", icon: "🌤️" },
      { value: "boa", label: "Boa, durmo bem", icon: "😊" },
    ],
  },
  {
    id: "estresse",
    index: 9,
    type: "single",
    eyebrow: "Pergunta 9 de 12",
    title: "Qual seu nível de estresse no dia a dia?",
    options: [
      { value: "alto", label: "Alto, quase todos os dias", icon: "🌪️" },
      { value: "moderado", label: "Moderado, em picos", icon: "⛅" },
      { value: "baixo", label: "Baixo, controlo bem", icon: "🍃" },
    ],
  },
  {
    id: "alimentacao",
    index: 10,
    type: "single",
    eyebrow: "Pergunta 10 de 12",
    title: "Como são seus hábitos alimentares?",
    options: [
      { value: "desregrada", label: "Bem desregrada", icon: "🍔" },
      { value: "mediana", label: "Tento equilibrar, nem sempre consigo", icon: "🍱" },
      { value: "cuidadosa", label: "Presto bastante atenção", icon: "🥑" },
    ],
  },
  {
    id: "desafio",
    index: 11,
    type: "single",
    eyebrow: "Pergunta 11 de 12",
    title: "Qual é o seu maior desafio hoje?",
    options: [
      { value: "tempo", label: "Falta de tempo", icon: "⏳" },
      { value: "disciplina", label: "Falta de disciplina", icon: "📉" },
      { value: "informacao", label: "Não sei por onde começar", icon: "❓" },
      { value: "motivacao", label: "Falta de motivação", icon: "🪫" },
    ],
  },
  {
    id: "disponibilidade",
    index: 12,
    type: "single",
    eyebrow: "Pergunta 12 de 12",
    title: "Quanto tempo por dia você pode dedicar ao protocolo?",
    subtitle: "Vamos ajustar o ritmo das aulas com base nisso.",
    options: [
      { value: "5min", label: "Até 5 minutos", icon: "⏱️" },
      { value: "15min", label: "Cerca de 15 minutos", icon: "⏱️" },
      { value: "30min", label: "30 minutos ou mais", icon: "⏱️" },
    ],
  },
];

export const IA_LOADING_MESSAGES = [
  "Analisando seu perfil completo...",
  "Calculando seu índice de vitalidade...",
  "Identificando suas receitas ideais...",
  "Selecionando os truques para o seu biotipo...",
  "Preparando o passo a passo exclusivo...",
  "Ajustando as dosagens para sua faixa etária...",
  "Montando seu protocolo personalizado...",
  "Verificando compatibilidade dos ingredientes...",
  "[nome] seu protocolo está quase pronto...",
  "✓ Protocolo criado com sucesso!",
];

export type PdfData = {
  id: string;
  name: string;
};

export type LessonData = {
  id: string;
  index: number;
  title: string;
  duration: string;
  descriptionHtml: string;
  pdfs: PdfData[];
};

export type TruqueData = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  status: "available" | "locked";
  themeColor: string;
  duration: string;
  lessons: LessonData[];
};

export const TRUQUES: TruqueData[] = [
  {
    slug: "vick-vaporub",
    title: "Vick VapoRub",
    description:
      "O truque clássico reaproveitado: como usar um item comum de farmácia a seu favor na sua rotina de vitalidade.",
    icon: "💨",
    status: "available",
    themeColor: "gold",
    duration: "~15 min",
    lessons: [
      {
        id: "aula-1",
        index: 1,
        title: "Por que esse truque funciona",
        duration: "~4 min",
        descriptionHtml:
          "<p>Nesta aula você vai entender <strong>a lógica por trás</strong> desse truque tão comentado e por que ele ganhou popularidade entre homens que buscam mais disposição na rotina.</p><p>Vamos falar sobre:</p><ul><li>A origem do truque</li><li>Os princípios que o tornam interessante</li><li>O que a ciência popular diz sobre o tema</li></ul><p><em>Importante:</em> este conteúdo é educativo e não substitui orientação médica.</p>",
        pdfs: [
          { id: "pdf-1", name: "Resumo-do-truque.pdf" },
          { id: "pdf-2", name: "Checklist-de-aplicacao.pdf" },
        ],
      },
      {
        id: "aula-2",
        index: 2,
        title: "Modo de uso passo a passo",
        duration: "~5 min",
        descriptionHtml:
          "<p>Chegou a hora prática. Siga o passo a passo abaixo:</p><ol><li>Higienize bem a região antes de começar</li><li>Aplique uma quantidade pequena, sem exageros</li><li>Respeite o tempo de descanso indicado</li><li>Observe como seu corpo reage nos primeiros dias</li></ol><p>Vá com calma — <strong>consistência</strong> importa mais que intensidade.</p>",
        pdfs: [{ id: "pdf-3", name: "Guia-passo-a-passo.pdf" }],
      },
      {
        id: "aula-3",
        index: 3,
        title: "Erros comuns que atrapalham o resultado",
        duration: "~3 min",
        descriptionHtml:
          "<p>A maioria dos homens erra em pequenos detalhes. Os mais comuns são:</p><ul><li>Usar quantidade excessiva achando que 'mais é melhor'</li><li>Não manter a rotina por tempo suficiente</li><li>Ignorar os sinais do próprio corpo</li></ul><p>Evitar essas armadilhas é o que separa quem tem resultado de quem desiste cedo.</p>",
        pdfs: [],
      },
      {
        id: "aula-4",
        index: 4,
        title: "Combinando com o restante do protocolo",
        duration: "~3 min",
        descriptionHtml:
          "<p>Esse truque funciona ainda melhor quando combinado com os outros pilares do seu protocolo: sono, respiração e alimentação.</p><p>Na próxima aula do seu plano, vamos conectar esses pontos.</p>",
        pdfs: [{ id: "pdf-4", name: "Protocolo-combinado.pdf" }],
      },
    ],
  },
  {
    slug: "truque-do-gelo",
    title: "Truque do Gelo",
    description:
      "Uma técnica simples de termorregulação usada há décadas para aumentar o estado de alerta e disposição.",
    icon: "🧊",
    status: "available",
    themeColor: "purple",
    duration: "~12 min",
    lessons: [
      {
        id: "aula-1",
        index: 1,
        title: "A ciência por trás do frio",
        duration: "~4 min",
        descriptionHtml:
          "<p>O choque térmico controlado é usado há décadas por atletas e militares. Entenda o <strong>porquê</strong> antes de colocar em prática.</p>",
        pdfs: [{ id: "pdf-1", name: "Ciencia-do-frio.pdf" }],
      },
      {
        id: "aula-2",
        index: 2,
        title: "Protocolo de 3 minutos",
        duration: "~4 min",
        descriptionHtml:
          "<p>Um protocolo simples para incluir na sua rotina matinal:</p><ol><li>30 segundos de adaptação</li><li>90 segundos de exposição controlada</li><li>60 segundos de recuperação respiratória</li></ol>",
        pdfs: [{ id: "pdf-2", name: "Protocolo-3-minutos.pdf" }],
      },
      {
        id: "aula-3",
        index: 3,
        title: "Cuidados e contraindicações",
        duration: "~4 min",
        descriptionHtml:
          "<p>Nem todo mundo deve aplicar esse truque da mesma forma. Veja os <em>cuidados essenciais</em> antes de começar.</p>",
        pdfs: [],
      },
    ],
  },
  {
    slug: "respiracao-4-7-8",
    title: "Respiração 4-7-8",
    description:
      "Uma técnica de respiração guiada para reduzir estresse rapidamente e recuperar o controle em minutos.",
    icon: "🫁",
    status: "available",
    themeColor: "gold",
    duration: "~10 min",
    lessons: [
      {
        id: "aula-1",
        index: 1,
        title: "Como funciona a técnica 4-7-8",
        duration: "~3 min",
        descriptionHtml:
          "<p>Inspire por <strong>4 segundos</strong>, segure por <strong>7</strong> e expire lentamente por <strong>8</strong>. Simples assim — mas o efeito no sistema nervoso é poderoso.</p>",
        pdfs: [{ id: "pdf-1", name: "Guia-respiracao-478.pdf" }],
      },
      {
        id: "aula-2",
        index: 2,
        title: "Quando praticar durante o dia",
        duration: "~4 min",
        descriptionHtml:
          "<p>Os melhores momentos para aplicar essa técnica:</p><ul><li>Antes de dormir</li><li>Antes de reuniões importantes</li><li>Em momentos de ansiedade repentina</li></ul>",
        pdfs: [],
      },
      {
        id: "aula-3",
        index: 3,
        title: "Praticando junto comigo",
        duration: "~3 min",
        descriptionHtml:
          "<p>Vamos praticar juntos, em tempo real, um ciclo completo de 4 rodadas.</p>",
        pdfs: [{ id: "pdf-2", name: "Registro-de-pratica.pdf" }],
      },
    ],
  },
  {
    slug: "jejum-solar",
    title: "Jejum Solar Matinal",
    description:
      "Como usar a luz da manhã para regular seu relógio biológico e melhorar sua energia ao longo do dia.",
    icon: "🌅",
    status: "locked",
    themeColor: "gold",
    duration: "Em breve",
    lessons: [],
  },
  {
    slug: "power-nap",
    title: "Power Nap Estratégico",
    description:
      "A soneca de alta performance: o tempo exato para recarregar sem prejudicar seu sono da noite.",
    icon: "😴",
    status: "locked",
    themeColor: "purple",
    duration: "Em breve",
    lessons: [],
  },
];

export const DAILY_TIPS = [
  "Homens que dormem bem produzem, em média, mais testosterona ao longo da noite do que os que dormem mal.",
  "A exposição à luz solar pela manhã ajuda a regular seu relógio biológico e sua disposição no dia seguinte.",
  "Pequenos hábitos consistentes têm mais impacto na vitalidade do que grandes mudanças feitas uma única vez.",
  "O estresse crônico é um dos fatores que mais impacta negativamente a energia e o foco masculino.",
  "Respirar de forma consciente por 3 minutos pode reduzir sinais de ansiedade quase que imediatamente.",
];

export function getTodayTip(): string {
  const day = new Date().getDate();
  return DAILY_TIPS[day % DAILY_TIPS.length];
}

export const BIOTIPO_LABELS: Record<string, string> = {
  magro: "Magro",
  medio: "Médio",
  "acima-peso": "Acima do peso",
};

export const FAIXA_ETARIA_LABELS: Record<string, string> = {
  "18-29": "18 a 29 anos",
  "30-44": "30 a 44 anos",
  "45-59": "45 a 59 anos",
  "60+": "60 anos ou mais",
};
