export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "produto-com-defeito-o-que-fazer",
    title: "Comprou um produto com defeito? Saiba quais são os seus prazos",
    excerpt:
      "O Código de Defesa do Consumidor garante prazos específicos para reclamar de vícios em produtos e serviços. Entenda os prazos de 30 e 90 dias e como não perder o seu direito.",
    category: "Produtos e Vícios",
    date: "2026-06-18",
    readTime: "5 min de leitura",
    content: [
      "Todo produto ou serviço comprado no Brasil está protegido por prazos legais de garantia, independentemente de o fornecedor oferecer ou não uma garantia contratual adicional. Esses prazos existem para que o consumidor tenha tempo de perceber e reclamar de um defeito.",
      "Para produtos e serviços não duráveis, como alimentos ou serviços de manutenção simples, o prazo para reclamar é de 30 dias corridos a partir da entrega ou da constatação do problema. Já para produtos duráveis, como eletrodomésticos, móveis e veículos, o prazo sobe para 90 dias.",
      "É importante lembrar que esse prazo pode ser suspenso a partir do momento em que o consumidor formaliza a reclamação junto ao fornecedor, seja por escrito, e-mail ou registro em uma central de atendimento. Guardar comprovantes dessa comunicação é essencial para garantir seus direitos mais adiante.",
      "Se o problema não for resolvido em até 30 dias após a reclamação formal, o consumidor pode escolher entre três alternativas: a substituição do produto, a devolução do valor pago devidamente corrigido, ou o abatimento proporcional do preço.",
      "Cada caso tem particularidades que podem alterar prazos e estratégias, então contar com orientação jurídica logo no início evita que o consumidor perca o prazo por desconhecimento da lei.",
    ],
  },
  {
    slug: "cobranca-indevida-como-reagir",
    title: "Cobrança indevida no cartão ou boleto: como reagir corretamente",
    excerpt:
      "Cobranças duplicadas, valores não reconhecidos e taxas escondidas são mais comuns do que parecem. Veja o passo a passo para contestar e, quando cabível, pedir devolução em dobro.",
    category: "Relação de Consumo",
    date: "2026-05-30",
    readTime: "4 min de leitura",
    content: [
      "É frequente encontrar cobranças que o consumidor não reconhece, seja em faturas de cartão de crédito, boletos de assinaturas ou contas de serviços. A primeira medida é sempre reunir a documentação: faturas, comprovantes de pagamento e prints de comunicações com a empresa.",
      "O Código de Defesa do Consumidor prevê que, quando uma cobrança indevida é paga pelo consumidor, ele tem direito à devolução em dobro do valor pago, corrigido monetariamente, salvo hipótese de engano justificável por parte do fornecedor.",
      "Antes de qualquer ação judicial, vale tentar a solução administrativa diretamente com a empresa ou por meio de plataformas como o consumidor.gov.br, que costuma acelerar respostas por parte de fornecedores cadastrados.",
      "Quando a tentativa administrativa não resolve, ou quando o valor e a reincidência justificam, uma notificação extrajudicial redigida por um advogado costuma ser o próximo passo eficaz antes de uma ação judicial.",
    ],
  },
  {
    slug: "danos-morais-relacao-de-consumo",
    title: "Quando cabe indenização por danos morais em relações de consumo",
    excerpt:
      "Nem todo aborrecimento gera direito à indenização, mas situações de exposição, constrangimento ou negligência grave por parte do fornecedor podem, sim, configurar dano moral.",
    category: "Danos Morais e Materiais",
    date: "2026-05-10",
    readTime: "6 min de leitura",
    content: [
      "A jurisprudência brasileira distingue com cuidado o simples aborrecimento do dano moral efetivo. Um atraso pontual em uma entrega, por exemplo, normalmente não gera indenização. Já situações como negativação indevida do nome, exposição vexatória em loja ou descumprimento reiterado de uma obrigação essencial costumam ser reconhecidas pelos tribunais.",
      "Entre os casos mais comuns estão a inclusão indevida em cadastros de inadimplentes, o cancelamento unilateral de serviços essenciais sem aviso prévio, e falhas graves em procedimentos de saúde suplementar, como negativas indevidas de cobertura.",
      "Para configurar o dano moral, geralmente é necessário demonstrar a falha do fornecedor, o abalo sofrido pelo consumidor e o nexo entre os dois. Provas como prints, protocolos de atendimento, boletins de ocorrência e testemunhas ajudam a construir esse conjunto probatório.",
      "O valor da indenização varia conforme a gravidade do caso, a capacidade econômica das partes e precedentes de tribunais semelhantes, cabendo ao advogado orientar sobre uma estimativa realista antes do ajuizamento da ação.",
    ],
  },
  {
    slug: "clausulas-abusivas-em-contratos",
    title: "5 sinais de cláusulas abusivas em contratos de adesão",
    excerpt:
      "Planos de saúde, financiamentos e assinaturas costumam trazer cláusulas que colocam o consumidor em desvantagem exagerada. Aprenda a identificar os sinais mais comuns antes de assinar.",
    category: "Contratos e Serviços",
    date: "2026-04-22",
    readTime: "5 min de leitura",
    content: [
      "Contratos de adesão — aqueles em que o consumidor não participa da negociação dos termos — são especialmente vigiados pelo Código de Defesa do Consumidor, justamente porque a parte mais fraca da relação normalmente não tem poder de barganha sobre as cláusulas.",
      "O primeiro sinal de alerta é a transferência de responsabilidades que deveriam ser do fornecedor para o consumidor, como cláusulas que isentam a empresa de qualquer responsabilidade por vícios do produto ou serviço.",
      "Outro ponto comum são multas ou penalidades desproporcionais em caso de desistência do consumidor, muito superiores ao prejuízo real causado ao fornecedor.",
      "Cláusulas que dificultam o exercício de direitos básicos, como o cancelamento de um serviço ou o acesso a informações sobre o contrato, também costumam ser consideradas abusivas e, portanto, nulas de pleno direito.",
      "Por fim, vale desconfiar de textos redondamente genéricos e de letras miúdas que tentam esconder condições desfavoráveis. Diante de dúvida, revisar o contrato com um advogado antes de assinar é sempre o caminho mais seguro.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
