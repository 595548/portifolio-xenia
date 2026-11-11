import React, { useState, useRef } from 'react';
import {
  BookOpen,
  Sparkles,
  Share2,
  Bot,
  Code2,
  Award,
  GraduationCap,
  MapPin,
  Heart,
  Instagram,
  Mail,
  ExternalLink,
  Check,
  Copy,
  ChevronRight,
  ChevronLeft,
  Quote,
  Library,
  Feather,
  Send,
  X,
  Maximize2,
  Music,
  Headphones,
  Youtube,
  Newspaper,
  Film,
  Clapperboard,
  Trophy,
  Calendar,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

// Real assets provided by user
const IMAGES = {
  profile: '/assets/aistudio/WhatsApp_Image_2026-09-21_at_11.12.49_dc14939a.jpeg',
  authorPhoto: '/assets/aistudio/xenia_autora_086e4e4c.jpeg',
  duasPortasCover: '/assets/aistudio/duas_portas_10f10c75.jpeg',
  duasPortasEvent: '/assets/aistudio/duas_portas1_7cc5b12d.jpeg',
  memoriasAfetivas: '/assets/aistudio/memorias_afetivas_1_dfa3ba73.jpeg',
  documentaryVideo: '/assets/aistudio/video_treco_do_filme_IBS_d38e173f.mp4',
  superheroAudio: '/musica.mp3',
};

// Fallback / standard path for minhafoto.jpg as explicitly requested
const MINHAFOTO_SRC = '/minhafoto.jpg';

interface BookItem {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  secondaryImage?: string;
  category: string;
  year?: string;
  tagline: string;
  synopsis: string;
  highlights: string[];
  quote: string;
}

const BOOKS: BookItem[] = [
  {
    id: 'duas-portas',
    title: 'Duas Portas',
    subtitle: 'Um Romance Juvenil Voltado à Educação Financeira',
    coverImage: IMAGES.duasPortasCover,
    secondaryImage: IMAGES.duasPortasEvent,
    category: 'Educação Financeira & Literatura Juvenil',
    tagline: 'Onde cada escolha abre um novo caminho para o futuro.',
    synopsis:
      'Uma narrativa cativante e humanizada que aproxima o universo das finanças pessoais do público jovem e de educadores. Mais do que números ou planilhas, a obra aborda a Educação Financeira através de dilemas cotidianos, resgates identitários, laços familiares e o poder transformador de saber planejar e realizar sonhos. Esta obra e a prática pedagógica correlata alçaram a autora ao posto de Finalista do renomado Prêmio XP de Educação Financeira.',
    highlights: [
      'Finalista do Prêmio XP de Educação Financeira',
      'Abordagem lúdica e sensível para salas de aula e leitura familiar',
      'União pioneira entre narrativa juvenil e conscientização econômica',
      'Parceria em iniciativas educacionais com o Brasil Solidário',
    ],
    quote:
      'Educação financeira na escola não é sobre cifras frias; é sobre ensinar os jovens a abrirem portas para seus próprios destinos.',
  },
  {
    id: 'memorias-afetivas',
    title: 'Memórias Afetivas em Prosa e Poesia',
    subtitle: 'Coletânea Poética e Prosa Íntima',
    coverImage: IMAGES.memoriasAfetivas,
    category: 'Poesia & Prosa Afetiva',
    tagline: 'O resgate sensível das raízes, sentimentos e memórias que nos moldam.',
    synopsis:
      'Com delicadeza e sensibilidade poética ímpar, Xenia Cardoso Moreira reúne textos em prosa e versos líricos que homenageiam o tempo, a terra, as pessoas queridas e os instantes guardados na alma. Uma obra acolhedora que convida o leitor a revisitar suas próprias lembranças mais queridas, celebrando os afetos que constroem nossa identidade.',
    highlights: [
      'Obra consagrada da literatura do Litoral Leste Cearense',
      'Versos líricos e prosas poéticas de profunda conexão emocional',
      'Resgate da identidade familiar e das paisagens da vida',
      'Exemplar fundamental da Cadeira nº 5 da ALLIULC',
    ],
    quote:
      'Escrever memórias é semear afeto no solo do tempo para que a alma nunca esqueça suas origens.',
  },
];

// ============================================================================
// ÁREA DE EXPANSÃO MODULAR: PARTICIPAÇÕES E ANTOLOGIAS LITERÁRIAS
// ============================================================================
// Para adicionar um novo livro ou antologia no futuro, basta copiar um dos blocos
// abaixo e preencher com os novos dados:
// {
//   id: 'meu-novo-livro',
//   title: 'Título do Livro',
//   coverImage: 'nome_do_arquivo.jpeg', // Coloque o arquivo de imagem na pasta /public
//   category: 'Antologia Poética / Coletânea de Contos',
//   publisher: 'Nome da Editora',
//   role: 'Poetisa Convidada / Coautora',
//   description: 'Breve descrição sobre os poemas ou contos publicados.',
//   year: '2026',
//   accentGradient: 'from-violet-600 to-indigo-800'
// }
// ============================================================================

export interface LiteraryParticipation {
  id: string;
  title: string;
  coverImage: string;
  category: string;
  publisher: string;
  role: string;
  description: string;
  year?: string;
  accentGradient: string;
  badgeText?: string;
}

export const LITERARY_PARTICIPATIONS: LiteraryParticipation[] = [
  {
    id: 'elas-brilham-v',
    title: 'Antologia Elas Brilham - Vol. V',
    coverImage: '/assets/aistudio/livro_elas_brilham_396565b7.jpeg',
    category: 'Antologia Feminina',
    publisher: 'Paschoal Editora',
    role: 'Coautora & Poetisa (@xenia_cardoso)',
    description: 'Volume de poesias celebrando a força, sensibilidade e a escrita protagonista de autoras brasileiras.',
    year: 'Volume V',
    accentGradient: 'from-pink-600 to-rose-900',
    badgeText: 'Autora Confirmada',
  },
  {
    id: 'vozes-do-leste',
    title: 'Vozes do Leste (ALLIULC)',
    coverImage: '/assets/aistudio/livros_vozes_do_leste_90cfce79.jpeg',
    category: 'Academia de Letras',
    publisher: 'ALLIULC / Paschoal Editora',
    role: 'Autora Participante · Cadeira nº 5',
    description: 'Registro literário histórico dos membros imortais da Academia de Letras do Litoral Leste Cearense, exaltando a cultura regional.',
    year: 'ALLIULC',
    accentGradient: 'from-cyan-600 to-blue-900',
    badgeText: 'Imortal Cadeira 5',
  },
  {
    id: 'mae-missao-divina',
    title: 'Mãe, Uma Missão Divina',
    coverImage: '/assets/aistudio/livro_m_e__31af1e3e.jpeg',
    category: 'Paschoal Editora',
    publisher: 'Paschoal Editora (Escritores Independentes)',
    role: 'Autora Aprovada',
    description: 'Textos e versos dedicados ao afeto incondicional de mãe, memória afetiva e aos laços sagrados que sustentam as famílias.',
    year: 'Coletânea Afetiva',
    accentGradient: 'from-amber-600 to-orange-900',
    badgeText: 'Autora Aprovada',
  },
  {
    id: 'loucuras-poeticas',
    title: 'Loucuras Poéticas',
    coverImage: '/assets/aistudio/livro_loucuras_po_ticas_0096e6f5.jpeg',
    category: 'Editora La Vita',
    publisher: 'Editora La Vita (Org. Regina Zimmermann & Cláudio Ehlers)',
    role: 'Poemas Aprovados com Excelência',
    description: 'Poemas selecionados com destaque de crítica e excelência literária, explorando as nuances da alma e das emoções humanas.',
    year: 'Destaque de Crítica',
    accentGradient: 'from-purple-600 to-violet-950',
    badgeText: 'Aprovada com Excelência',
  },
  {
    id: 'mulheres-em-poesia-v3',
    title: 'Mulheres em Poesia - Vol. 3',
    coverImage: '/assets/aistudio/livro_mulheres_em_poesia_v3_1292e13f.jpeg',
    category: 'Antologia Feminina',
    publisher: 'Paschoal Editora',
    role: 'Autora Participante ("Ela acreditava que podia, então ela fez")',
    description: 'Homenagem poética ao empoderamento e à voz feminina, reunindo escritoras de destaque em versos inspiradores e transformadores.',
    year: 'Volume 3',
    accentGradient: 'from-fuchsia-600 to-purple-900',
    badgeText: 'Autora Participante',
  },
  {
    id: 'a-poesia-pode-ser-livre',
    title: 'A Poesia Pode Ser Livre',
    coverImage: '/assets/aistudio/livro_a_poesia_pode_ser_livre_83aba716.jpeg',
    category: 'Editora Contos Livres',
    publisher: 'Editora Contos Livres (Org. Bruno Twain)',
    role: 'Autora Selecionada',
    description: 'Celebração da liberdade de expressão e da sensibilidade versada, quebrando amarras conceituais através da arte poética contemporânea.',
    year: 'Antologia Poética',
    accentGradient: 'from-emerald-600 to-teal-950',
    badgeText: 'Autores Selecionados',
  },
  {
    id: 'magia-de-natal-v3',
    title: 'Magia de Natal - Volume 3',
    coverImage: '/assets/aistudio/livro_a_magia_do_natal_v3_51a2101c.jpeg',
    category: 'Antologia Temática',
    publisher: 'Paschoal Editora',
    role: 'Autora Selecionada',
    description: 'Contos e memórias que celebram o espírito natalino, a solidariedade, a união familiar e a esperança de dias melhores.',
    year: 'Volume 3',
    accentGradient: 'from-red-600 to-rose-950',
    badgeText: 'Autora Selecionada',
  },
  {
    id: 'estilo-e-poesia-v6',
    title: 'Coletânea Estilo & Poesia - Sexta Edição',
    coverImage: '/assets/aistudio/livro_estilo_e_poesia_v6_f8e6c194.jpeg',
    category: 'Coletânea Literária',
    publisher: 'Estilo & Poesia (@estilopoesia)',
    role: 'Autor Selecionado',
    description: 'Seleção criteriosa de poetas contemporâneos expressando lirismo, estética apurada e sensibilidade poética.',
    year: '6ª Edição',
    accentGradient: 'from-sky-600 to-blue-950',
    badgeText: 'Autor Selecionado',
  },
  {
    id: 'estilo-e-poesia-v7',
    title: 'Coletânea Estilo & Poesia - Volume 7',
    coverImage: '/assets/aistudio/livro_estilo_e_poesia_1_9c0339f9.jpeg',
    category: 'Coletânea Literária',
    publisher: 'Paschoal Editora / Estilo & Poesia',
    role: 'Autor Confirmado',
    description: 'Continuidade da prestigiada coletânea com novos versos autorais e presença confirmada de Xenia Cardoso no cenário lírico.',
    year: 'Volume 7',
    accentGradient: 'from-amber-600 to-rose-950',
    badgeText: 'Autor Confirmado',
  },
  {
    id: 'antologia-recomeco',
    title: 'Antologia Recomeço',
    coverImage: '/assets/aistudio/livro_recome_o_d656b87e.jpeg',
    category: 'Antologia Poética',
    publisher: 'Paschoal Editora (Escritores Independentes)',
    role: 'Autora Selecionada (Org. Célia Paschoal & Nonato Costa)',
    description: 'Volume poético dedicado à resiliência humana, superação de desafios e à renovação dos caminhos através do poder das palavras.',
    year: 'Coletânea Afetiva',
    accentGradient: 'from-amber-500 to-rose-900',
    badgeText: 'Autora Selecionada',
  },
  {
    id: 'lirios-brancos-paz',
    title: 'I Concurso Literário Lírios Brancos nos Falam de Paz',
    coverImage: '/assets/aistudio/livro_antologia_lirios_brancos_5ecef0b4.jpeg',
    category: 'Concurso Literário',
    publisher: 'Paschoal Editora',
    role: 'Autora Participante · Inscrição Efetivada com Sucesso',
    description: 'Participação oficial com poemas de exaltação à cultura de paz, respeito fraterno e serenidade lírica.',
    year: 'I Concurso Literário',
    accentGradient: 'from-emerald-500 to-teal-900',
    badgeText: 'Inscrição Efetivada',
  },
  {
    id: 'estilo-e-poesia-v9',
    title: 'Coletânea Estilo & Poesia - Volume 9',
    coverImage: '/assets/aistudio/livro_estilo_e_poesia_9_2180277c.jpeg',
    category: 'Coletânea Lírica',
    publisher: 'Editora Brunmarck / Estilo & Poesia',
    role: 'Autor Selecionado (@xenia_cardoso)',
    description: 'Produção lírica selecionada para compor o nono volume da coletânea com estética primorosa e versos sensíveis.',
    year: 'Volume 9',
    accentGradient: 'from-amber-400 to-yellow-800',
    badgeText: 'Autor Selecionado',
  },
  {
    id: 'estilo-e-poesia-v10',
    title: 'Coletânea Estilo & Poesia - Volume 10',
    coverImage: '/assets/aistudio/livro_coletania_estilo_e_poesia_bedaaaa7.jpeg',
    category: 'Coletânea Lírica',
    publisher: 'Editora Brunmarck / Estilo & Poesia',
    role: 'Autor Selecionado (@textos_e_poemas)',
    description: 'Edição comemorativa de décimo volume com destaque autoral para a poesia inspiradora de Xenia Cardoso.',
    year: 'Volume 10',
    accentGradient: 'from-purple-500 to-pink-900',
    badgeText: 'Edição Marco Vol. 10',
  },
  {
    id: 'litegrafo-paginas-da-vida',
    title: 'Litegrafo: Páginas da Vida',
    coverImage: '/assets/aistudio/litegrafo_pagians_da_vida_442221c1.jpeg',
    category: 'Almanaque Literário',
    publisher: 'Paschoal Editora (Almanaque da Lit. Brasileira Contemporânea)',
    role: 'Autora Selecionada',
    description: 'Registro expressivo no Almanaque da Literatura Brasileira Contemporânea, eternizando memórias, reflexões e vivências.',
    year: 'Almanaque Contemporâneo',
    accentGradient: 'from-yellow-500 to-red-900',
    badgeText: 'Autora Selecionada',
  },
  {
    id: 'litegrafo-mulheres-v3',
    title: 'Litegrafo Vol. 3: Mulheres',
    coverImage: '/assets/aistudio/litegrafo_mulheres_796a5e11.jpeg',
    category: 'Antologia Temática',
    publisher: 'Paschoal Editora (Org. Célia Paschoal & Nonato Costa)',
    role: 'Autora Selecionada',
    description: 'Coletânea em homenagem às vozes femininas que encantam, ensinam e ressignificam o cotidiano através da literatura.',
    year: 'Volume 3',
    accentGradient: 'from-pink-500 to-violet-900',
    badgeText: 'Autora Selecionada',
  },
  {
    id: 'antologia-magia-natal-v5',
    title: 'Antologia Magia de Natal - Volume V',
    coverImage: '/assets/aistudio/livro_antologia_do_natal_cf641a74.jpeg',
    category: 'Antologia Festiva & Poética',
    publisher: 'Editora Brunmarck',
    role: 'Autora Participante (@xenia_cardoso)',
    description: 'Textos poéticos natalinos que celebram a partilha, o afeto no lar e as memórias da época mais iluminada do ano.',
    year: 'Volume V',
    accentGradient: 'from-red-600 to-rose-950',
    badgeText: 'Participando Vol. V',
  },
  {
    id: 'litegrafo-encontros-v4',
    title: 'Litegrafo Encontros - Vol. 4',
    coverImage: '/assets/aistudio/litegrafo_encontros_763bcf36.jpeg',
    category: 'Coletânea Literária',
    publisher: 'Paschoal Editora (Org. Célia Paschoal & Nonato Costa)',
    role: 'Autora Selecionada ("Alguns encontros acontecem. Outros nos acontecem.")',
    description: 'Reflexões poéticas e narrativas marcantes sobre reencontros, a passagem do tempo e os laços que transformam destinos.',
    year: 'Volume 4',
    accentGradient: 'from-blue-600 to-indigo-950',
    badgeText: 'Autora Selecionada',
  },
];

// ============================================================================
// DADOS DAS REPORTAGENS & APARIÇÕES NA MÍDIA
// ============================================================================
export interface PressReport {
  id: string;
  title: string;
  media: string;
  date: string;
  image: string;
  category: string;
  summary: string;
  quote?: string;
  badge: string;
}

export const PRESS_REPORTS: PressReport[] = [
  {
    id: 'instituto-xp-mulheres',
    title: 'Autonomia Financeira das Mulheres: Ideias e Iniciativas',
    media: 'Instituto XP (iXP)',
    date: 'Reconhecimento Nacional',
    image: '/assets/aistudio/reportagem_XP_1368f12f.jpeg',
    category: 'Instituto XP',
    badge: 'Nacional',
    summary: 'A educadora Xenia Cardoso em destaque na campanha do Instituto XP que homenageou mulheres líderes que transformam realidades por meio da educação e autonomia financeira.',
    quote: 'Compartilhe suas ideias e iniciativas para um futuro com equidade e emancipação financeira.',
  },
  {
    id: 'premio-xp-professora-xenia',
    title: 'Professora Xenia: Ação "30 Minutos com Matemática" e Economia Doméstica',
    media: 'Prêmio XP de Educação Financeira',
    date: 'Rede Municipal de Beberibe',
    image: '/assets/aistudio/reportgem_xp2_edeb9cbb.jpeg',
    category: 'Prêmio XP',
    badge: 'Finalista',
    summary: 'Professora na rede municipal desde 1997, Xenia criou a ação inovadora que leva conhecimentos práticos para crianças e famílias, impactando positivamente barracas de pesca e o artesanato local.',
    quote: 'Ao incentivar estudantes a aplicarem conhecimentos em casa, o projeto ajudou famílias a organizarem suas contas e preparou uma nova geração.',
  },
  {
    id: 'ibs-noticias-entusiasta',
    title: 'Xenia Cardoso: Entusiasta e Multiplicadora das Ações do IBS',
    media: 'IBS Notícias · Edição Oficial',
    date: 'Julho de 2022',
    image: '/assets/aistudio/reportagem_IBS_b8d1d9ac.jpeg',
    category: 'Instituto Brasil Solidário',
    badge: 'Destaque Docente',
    summary: 'Reportagem detalhada destacando a dedicação de mais de duas décadas de docência e sua atuação transformadora na Escola Desembargador Pedro de Queiroz com oficinas literárias e jogos de finanças.',
    quote: 'O IBS oferece suporte vitalício e rico em conhecimento. Nada mudou tanto a história de vida dos meus alunos quanto os jogos de educação financeira.',
  },
  {
    id: 'ibs-noticias-duas-portas',
    title: 'Mediação com o Livro "Duas Portas" da Educadora Xênia Cardoso',
    media: 'IBS Notícias · 30 Minutos Pela Leitura',
    date: 'Outubro de 2023',
    image: '/assets/aistudio/reportagem_IBS_3_2977e86b.jpeg',
    category: 'Educação & Literatura',
    badge: 'Anjo da Leitura',
    summary: 'Alunos do 6º ano vivenciaram a leitura e debateram escolhas econômicas dos personagens do romance "Duas Portas", com desfechos criados pelos próprios estudantes em sala de aula.',
    quote: 'Um lindo trabalho de multiplicação de práticas literárias e conscientização comunitária.',
  },
  {
    id: 'ibs-concurso-fotografia',
    title: '1º Lugar no Concurso Nacional de Fotografia de Educação Financeira',
    media: 'Instituto Brasil Solidário · Vamos Jogar e Aprender',
    date: 'Edição 2022 · 143 Pontos',
    image: '/assets/aistudio/vencedor_do_concurso_de_fotografia_IBS_80fd6fda.jpeg',
    category: 'Premiação Nacional',
    badge: '1º Lugar',
    summary: 'Xenia Cardoso e seus estudantes em Beberibe (CE) foram os grandes vencedores da Categoria D (Alunos e Professores na Escola), celebrando a ludicidade e a alegria do aprendizado com 143 pontos.',
    quote: 'Vencedores da Categoria D: o aprendizado financeiro traduzido em união e sorrisos.',
  },
  {
    id: 'ibs-foco-geracao',
    title: 'Educação Financeira em Foco: Jovens e Escolas Avançando',
    media: 'Educação Financeira em Foco',
    date: 'Fevereiro de 2023',
    image: '/assets/aistudio/reportagem_ibs2_9c645c1d.jpeg',
    category: 'Comunidade & Futuro',
    badge: 'Jovens Lideranças',
    summary: 'Menção honrosa e reconhecimento a alunos formados por Xenia que desenvolveram projetos de empreendedorismo sustentável e impacto comunitário a partir das salas de aula públicas.',
    quote: 'Alunos e professores avançando juntos simbolizam um marco na educação pública do Ceará.',
  },
];

const INTERESTS = [
  {
    icon: BookOpen,
    emoji: '📖',
    title: 'Leitura & Literatura',
    subtitle: 'O prazer constante pela palavra escrita',
    description:
      'Paixão diária pelos clássicos e pela literatura contemporânea. A leitura é a fonte contínua de reflexão pedagógica e inspiração poética.',
    color: 'from-amber-500/20 to-orange-500/10',
    borderColor: 'group-hover:border-amber-400/50',
    iconColor: 'text-amber-400',
  },
  {
    icon: Feather,
    emoji: '✍️',
    title: 'Escrita Criativa',
    subtitle: 'Transformando memórias e pedagogia em prosa e poesia',
    description:
      'Entre romances juvenis, poesias íntimas e artigos pedagógicos, a escrita é a ponte entre a sensibilidade humana e o conhecimento transformador.',
    color: 'from-violet-500/20 to-purple-500/10',
    borderColor: 'group-hover:border-violet-400/50',
    iconColor: 'text-violet-400',
  },
  {
    icon: Share2,
    emoji: '📱',
    title: 'Redes Sociais',
    subtitle: 'Conectando ideias e pessoas',
    description:
      'Uso consciente dos canais digitais para divulgar literatura, debater educação de qualidade e construir laços com leitores e comunidade.',
    color: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'group-hover:border-cyan-400/50',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Bot,
    emoji: '🤖',
    title: 'Exploração de IA Generativa',
    subtitle: 'Desvendando novas ferramentas de inteligência artificial',
    description:
      'Curiosidade aguçada sobre como os grandes modelos de linguagem e ferramentas de IA podem potencializar o ensino, a criatividade e a gestão escolar.',
    color: 'from-fuchsia-500/20 to-pink-500/10',
    borderColor: 'group-hover:border-fuchsia-400/50',
    iconColor: 'text-fuchsia-400',
  },
  {
    icon: Code2,
    emoji: '💻',
    title: 'Aprendizado Contínuo',
    subtitle: 'Atualmente me dedicando ao estudo de Programação e Tecnologias de IA',
    description:
      'Espírito inquieto e mente aberta: aprendendo lógica computacional, desenvolvimento web e ferramentas tecnológicas para inovar continuamente.',
    color: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'group-hover:border-emerald-400/50',
    iconColor: 'text-emerald-400',
  },
];

const REFLECTIONS = [
  {
    quote:
      'Encontrei na literatura uma forma lúdica e sensível de abordar a Educação Financeira, unindo-a a resgates identitários e familiares.',
    context: 'Sobre a proposta de Duas Portas',
  },
  {
    quote:
      'A palavra escrita tem o dom de imortalizar o que o tempo tenta silenciar: o amor, a memória e o aprendizado.',
    context: 'Discurso de Posse na ALLIULC',
  },
  {
    quote:
      'Educar é despertar no outro a coragem de sonhar com disciplina e a sabedoria de valorizar cada conquista.',
    context: 'Prática Pedagógica & Gestão Escolar',
  },
  {
    quote:
      'O aprendizado não termina quando nos formamos; ele se renova a cada página lida, a cada linha de código e a cada nova tecnologia descoberta.',
    context: 'Visão de Futuro & Aprendizado Contínuo',
  },
];

// Fallback Book Cover Renderer
function LiteraryBookCover({
  src,
  alt,
  title,
  category,
  publisher,
  gradient,
  onClick
}: {
  src: string;
  alt: string;
  title: string;
  category: string;
  publisher: string;
  gradient: string;
  onClick?: () => void;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      onClick={onClick}
      className="relative w-full aspect-[3/4] max-h-[300px] rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/20 group/cover bg-slate-950 flex items-center justify-center transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/20"
    >
      {!hasError ? (
        <div className="w-full h-full p-2 flex items-center justify-center bg-gradient-to-b from-slate-900/90 via-slate-950 to-black/90">
          <img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover/cover:scale-105 drop-shadow-xl"
          />
        </div>
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${gradient} p-5 flex flex-col justify-between text-white relative select-none`}>
          {/* Subtle leather book spine & foil lines */}
          <div className="absolute top-0 bottom-0 left-0 w-3.5 bg-black/30 border-r border-white/10" />
          <div className="absolute top-3 bottom-3 left-4 right-3 border border-amber-300/30 rounded-lg pointer-events-none" />

          <div className="pl-3 relative z-10 space-y-1.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-300 bg-black/40 px-2.5 py-0.5 rounded-full inline-block backdrop-blur-md border border-cyan-400/30">
              {category}
            </span>
            <p className="text-[11px] text-white/80 font-medium">{publisher}</p>
          </div>

          <div className="pl-3 relative z-10 space-y-2 py-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-200" />
            <h4 className="font-serif-display text-lg sm:text-xl font-bold leading-tight text-white drop-shadow-md">
              {title}
            </h4>
            <p className="text-xs text-amber-200/90 font-serif-display italic">
              Coautora: Xenia Cardoso
            </p>
          </div>

          <div className="pl-3 relative z-10 pt-2 border-t border-white/15 flex items-center justify-between text-[10px] text-white/70">
            <span>Antologia Poética</span>
            <BookOpen className="w-4 h-4 text-cyan-300" />
          </div>
        </div>
      )}

      {/* Hover action overlay */}
      <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/cover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 shadow-lg">
          <Maximize2 className="w-3.5 h-3.5" /> Ampliar Detalhes
        </span>
      </div>
    </div>
  );
}

export default function App() {
  // Reading Progress Bar Hook
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [readingPercent, setReadingPercent] = useState(0);

  React.useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setReadingPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);
  const [isMusicExpanded, setIsMusicExpanded] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [contactSubject, setContactSubject] = useState('Palestra / Evento Literário');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  // Active Hero photo: defaults to 'author' (xenia_autora_086e4e4c.jpeg)
  const [activeHeroPhoto, setActiveHeroPhoto] = useState<'author' | 'portrait'>('author');

  // Carousel State for Literary Participations
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedParticipation, setSelectedParticipation] = useState<LiteraryParticipation | null>(null);
  const [selectedReport, setSelectedReport] = useState<PressReport | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('todas');

  // Video documentary state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % LITERARY_PARTICIPATIONS.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) =>
      prev === 0 ? LITERARY_PARTICIPATIONS.length - 1 : prev - 1
    );
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('xcmylucas@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendContact = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:xcmylucas@gmail.com?subject=${encodeURIComponent(
      contactSubject
    )}&body=${encodeURIComponent(contactMessage || 'Olá, Xenia! Gostaria de falar sobre...')}`;
    window.location.href = mailto;
    setContactSent(true);
    setTimeout(() => setContactSent(false), 4000);
  };

  const instagramUrl =
    'https://www.instagram.com/xenia_cardoso?exln=MW53bDBldGcyYzR1dQ%3D%3D&utm_source=qr';

  const currentParticipation = LITERARY_PARTICIPATIONS[carouselIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e2f] via-[#0f172a] to-[#0a0f1d] text-[#e2e8f0] relative overflow-x-hidden">
      {/* SMOOTH ANIMATED READING PROGRESS BAR AT TOP OF VIEWPORT */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-400 to-amber-400 z-50 origin-left shadow-[0_0_12px_rgba(6,182,212,0.85)] pointer-events-none"
      />

      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute top-2/3 -left-40 w-[28rem] h-[28rem] bg-rose-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 w-[36rem] h-[36rem] bg-indigo-600/15 rounded-full blur-3xl" />
      </div>

      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
            <span>Xenia Cardoso Moreira</span>
          </a>

          {/* Zone 2: Navigation links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#sobre" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Sobre Mim
            </a>
            <a href="#obras" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Obras
            </a>
            <a
              href="#projeto-biblioteca"
              className="hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 text-cyan-400 font-medium"
              title="Ver Divulgação do Projeto de Cadastro da Biblioteca"
            >
              <Library className="w-3.5 h-3.5 text-cyan-400" />
              <span>Projeto Biblioteca</span>
            </a>
            <a href="#antologias" className="hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1">
              <span>Antologias</span>
            </a>
            <a href="#documentario" className="hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 text-amber-300">
              <span>Documentário</span>
            </a>
            <a href="#reportagens" className="hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1">
              <span>Na Mídia</span>
            </a>
            <a href="#interesses" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Interesses
            </a>
            <a href="#trilha-sonora" className="hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 text-cyan-300">
              <Headphones className="w-3.5 h-3.5" />
              <span>Trilha</span>
            </a>
            <a href="#contato" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Contato
            </a>
          </nav>

          {/* Zone 3: Quick CTA actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick jump to Trilha Sonora oficial */}
            <a
              href="#trilha-sonora"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-cyan-300 hover:text-white hover:border-cyan-400/50 transition-all"
              title="Ir para a Trilha Sonora Oficial (YouTube)"
            >
              <Headphones className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline font-mono text-[11px]">Trilha Sonora</span>
            </a>

            {/* Reading progress indicator pill */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{readingPercent}% lido</span>
            </div>

            <a
              href="#documentario"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium glass-card border border-amber-500/30 text-amber-300 hover:text-white transition-all whitespace-nowrap"
            >
              <Film className="w-3.5 h-3.5 text-amber-400" />
              <span>Ver Filme IBS</span>
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-lg shadow-violet-500/25 transition-all overflow-hidden group whitespace-nowrap shrink-0"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-in-out" />
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
              <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 space-y-20">
        {/* HERO SECTION */}
        <section className="pt-2 lg:pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-cyan-400 tracking-wide">
                <span>Academia de Letras do Litoral Leste Cearense</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Cadeira nº 5</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Finalista Prêmio XP</span>
              </div>

              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-[1.12]">
                Xenia Cardoso Moreira
              </h1>

              <p className="text-xl sm:text-2xl font-serif-display italic text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-indigo-200 to-cyan-300">
                Educadora, Escritora &amp; Imortal da ALLIULC
              </p>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl text-balance">
                Conectando a sensibilidade literária à transformação social através da{' '}
                <strong className="text-white font-medium">Educação Financeira</strong>, da poesia afetiva, da inovação pedagógica e da formação humana nas escolas e comunidades do Ceará.
              </p>

              {/* Botões de Ação Principais do Hero */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#obras"
                  className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explorar Obras</span>
                </a>

                <a
                  href="#documentario"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-medium text-sm transition-all shadow-lg shadow-amber-600/30 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Film className="w-4 h-4" />
                  <span>Documentário</span>
                </a>

                <a
                  href="#projeto-biblioteca"
                  className="px-5 py-3 rounded-xl glass-card border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white font-medium text-sm transition-all hover:-translate-y-0.5 flex items-center gap-2"
                  title="Conhecer o Projeto Biblioteca"
                >
                  <Library className="w-4 h-4 text-cyan-400" />
                  <span>Projeto Biblioteca</span>
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-5 py-3 rounded-xl glass-card border border-white/15 hover:border-cyan-400/50 text-white font-medium text-sm transition-all hover:-translate-y-0.5 flex items-center gap-2 overflow-hidden group shadow-md"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-700 ease-out" />
                  <Instagram className="w-4 h-4 text-cyan-400" />
                  <span>Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
                </a>
              </div>

              {/* VITRINE DE APRESENTAÇÃO & DIVULGAÇÃO: SISTEMA DE CADASTRO DA BIBLIOTECA (SEM FUNCIONALIDADE, APENAS APRESENTAÇÃO) */}
              <div
                id="projeto-biblioteca"
                className="scroll-mt-28 p-5 sm:p-6 rounded-2xl glass-panel border border-cyan-500/25 bg-gradient-to-br from-cyan-950/30 via-slate-900/80 to-violet-950/30 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/25 shrink-0">
                      <Library className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-400/30">
                          Divulgação de Projeto
                        </span>
                        <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-300 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                          Apenas Apresentação
                        </span>
                      </div>
                      <h3 className="font-serif-display text-base sm:text-lg font-bold text-white mt-1">
                        Sistema de Cadastro da Biblioteca
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs text-cyan-300/80 bg-cyan-950/50 border border-cyan-500/20 px-3 py-1 rounded-full font-mono text-[11px] self-start sm:self-auto">
                    Projeto Autoral · Divulgação
                  </span>
                </div>

                {/* Texto descritivo da iniciativa - exclusivamente para divulgação do trabalho */}
                <div className="mt-3.5 space-y-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  <p>
                    Apresentação do trabalho idealizado por <strong className="text-white font-medium">Xenia Cardoso Moreira</strong> como projeto de apoio à gestão escolar, focado na catalogação de acervos, organização de livros e estímulo aos hábitos de leitura na comunidade educacional.
                  </p>
                  <p className="text-slate-400 text-xs">
                    Espaço dedicado à divulgação pedagógica da iniciativa, demonstrando como a literatura, a educação e a organização bibliotecária se unem em prol da escola pública.
                  </p>
                </div>

                {/* Pilares conceituais do projeto */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-950/50 border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                    <p className="text-[11px] font-semibold text-cyan-300">Catalogação</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Organização de Acervo</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                    <p className="text-[11px] font-semibold text-violet-300">Controle Escolar</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Registro de Leitores</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                    <p className="text-[11px] font-semibold text-amber-300">Incentivo</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Acesso à Leitura</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                    <p className="text-[11px] font-semibold text-emerald-300">Inovação</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Tecnologia Pedagógica</p>
                  </div>
                </div>

                {/* Rodapé informativo de divulgação */}
                <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Iniciativa educacional apresentada para fins de divulgação</span>
                  </div>
                  <a
                    href="https://cadastro-biblioteca.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1 self-end sm:self-auto"
                    title="Acessar página de divulgação do projeto"
                  >
                    <span>cadastro-biblioteca.netlify.app</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Profile Picture with Glow Effect - Featuring Xenia Autora */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-[280px] sm:max-w-[320px]">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700" />

                <div className="relative glass-panel rounded-3xl p-3 border border-white/20 shadow-2xl backdrop-blur-xl overflow-hidden">
                  <div className="relative aspect-[4/5] max-h-[380px] w-full rounded-2xl overflow-hidden bg-slate-900">
                    <img
                      src={activeHeroPhoto === 'author' ? IMAGES.authorPhoto : IMAGES.profile}
                      alt="Foto de Xenia Cardoso - Autora"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-400/30">
                            {activeHeroPhoto === 'author' ? 'Xenia Autora' : 'Retrato Oficial'}
                          </span>
                        </div>
                        <p className="font-serif-display text-white font-semibold text-base sm:text-lg drop-shadow">
                          Xenia Cardoso Moreira
                        </p>
                        <p className="text-xs text-slate-300 drop-shadow">
                          ALLIULC · Cadeira nº 5
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          setLightboxImage({
                            src: activeHeroPhoto === 'author' ? IMAGES.authorPhoto : IMAGES.profile,
                            caption:
                              activeHeroPhoto === 'author'
                                ? 'Xenia Cardoso Moreira — Foto Autora & Educadora'
                                : 'Retrato Oficial de Xenia Cardoso Moreira — ALLIULC Cadeira nº 5',
                          })
                        }
                        className="p-2 rounded-lg bg-black/60 hover:bg-black text-white/90 hover:text-white backdrop-blur-sm transition-colors shrink-0"
                        title="Ver foto ampliada"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Photo Switcher: Foto Autora & Retrato Oficial */}
                  <div className="mt-2.5 grid grid-cols-2 gap-1.5 text-xs">
                    <button
                      onClick={() => setActiveHeroPhoto('author')}
                      className={`py-1.5 px-2 rounded-xl text-center font-medium transition-all ${
                        activeHeroPhoto === 'author'
                          ? 'bg-violet-600 text-white shadow-md'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      Foto Autora ✨
                    </button>
                    <button
                      onClick={() => setActiveHeroPhoto('portrait')}
                      className={`py-1.5 px-2 rounded-xl text-center font-medium transition-all ${
                        activeHeroPhoto === 'portrait'
                          ? 'bg-violet-600 text-white shadow-md'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      Retrato Oficial
                    </button>
                  </div>

                  <div className="mt-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                      <span>ALLIULC · Cadeira 5</span>
                    </div>
                    <span className="text-cyan-400 font-medium text-[11px]">Prêmio XP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TRILHA SONORA OFICIAL (YouTube Embed: Unknown Brain - Superhero feat. Chris Linton) */}
          <div id="trilha-sonora" className="mt-12 scroll-mt-24 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 via-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-violet-600/25 shrink-0">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                      Trilha Sonora do Portfólio
                    </span>
                    <span className="text-xs text-slate-400">· NCS Copyright Free</span>
                  </div>
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-white">
                    Unknown Brain - Superhero (feat. Chris Linton)
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMusicExpanded(!isMusicExpanded)}
                  className="px-3.5 py-1.5 rounded-xl glass-card border border-white/10 hover:border-cyan-400/50 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {isMusicExpanded ? 'Recolher Vídeo' : 'Expandir Vídeo'}
                </button>
                <a
                  href="https://www.youtube.com/watch?v=LHvYrn3FAgI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/30 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-400" />
                  <span>Assistir no YouTube</span>
                </a>
              </div>
            </div>

            {isMusicExpanded && (
              <div className="mt-6 space-y-3">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-950">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/LHvYrn3FAgI"
                    title="Unknown Brain - Superhero (feat. Chris Linton) | Trap | NCS - Copyright Free Music"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 gap-2 px-1">
                  <p>
                    Energia contagiante que acompanha a dedicação de Xenia à educação, à escrita e à transformação de vidas.
                  </p>
                  <span className="text-violet-400 font-medium whitespace-nowrap">
                    NCS · Unknown Brain &amp; Chris Linton
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECTION: SOBRE MIM (Texto Integral e Revisado do Usuário) */}
        <section id="sobre" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                Biografia &amp; Trajetória
              </p>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white mt-1">
                Sobre Mim
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-violet-400" />
              <span>De São Paulo ao Ceará · Beberibe (CE)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Main Biographic Text Card */}
            <div className="lg:col-span-8 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                <p>
                  Sou <strong className="text-white font-semibold">Xenia Cardoso Moreira</strong>, natural de São Paulo (SP) e resido no estado do Ceará desde 1995. Sou graduada em Pedagogia, especialista em Língua Portuguesa e Língua Inglesa pela Universidade Estadual Vale do Acaraú (UVA) e pós-graduada em Gestão Escolar pela Universidade Federal do Ceará (UFC).
                </p>
                <p>
                  Filha de <span className="text-slate-100 font-medium">José Xavier Moreira</span> e <span className="text-slate-100 font-medium">Hilda Cardoso</span> e mãe da <span className="text-slate-100 font-medium">Yana</span> e do <span className="text-slate-100 font-medium">Lucas</span>, resido atualmente em Beberibe. Sou defensora do ensino da Educação Financeira nas escolas e encontrei na literatura uma forma lúdica e sensível de abordar o tema, unindo-o a resgates identitários e familiares.
                </p>
                <p>
                  No cenário literário, sou autora do romance juvenil <em className="text-cyan-300 font-serif-display font-medium">Duas Portas</em> — uma obra voltada à Educação Financeira — e do livro <em className="text-violet-300 font-serif-display font-medium">Memórias Afetivas em Prosa e Poesia</em>, além de marcar presença em diversas antologias de poesias e contos. Meu trabalho de destaque na área literária e pedagógica me rendeu a condição de <strong className="text-white font-semibold underline decoration-violet-500/50 underline-offset-4">finalista do Prêmio XP de Educação Financeira</strong>. Atualmente, ocupo a cadeira nº 5 da <strong className="text-white font-semibold">Academia de Letras do Litoral Leste Cearense (ALLIULC)</strong>.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-violet-400/50">
                    <img
                      src={IMAGES.profile}
                      alt="Xenia Cardoso"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif-display text-sm font-semibold text-white">
                      Xenia Cardoso Moreira
                    </p>
                    <p className="text-xs text-slate-400">Educadora &amp; Escritora</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-cyan-300 font-medium bg-cyan-950/40 border border-cyan-800/40 px-3 py-1.5 rounded-full">
                  <Heart className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Amor à Educação &amp; às Letras</span>
                </div>
              </div>
            </div>

            {/* Quick credentials & pillars */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="glass-card rounded-2xl p-5 border border-white/10 flex-1 flex flex-col justify-between">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Formação Acadêmica</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Pedagogia · Especialista em Língua Portuguesa e Inglesa (UVA) · Pós-graduada em Gestão Escolar (UFC).
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400">
                  UVA &amp; UFC · Excelência educacional
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-white/10 flex-1 flex flex-col justify-between">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Prêmio XP de Educação Financeira</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Reconhecimento nacional como finalista pelo trabalho inovador articulando literatura e finanças nas escolas.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400">
                  Destaque nacional em pedagogia financeira
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-white/10 flex-1 flex flex-col justify-between">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                    <Library className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Cadeira nº 5 — ALLIULC</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Membro imortal da Academia de Letras do Litoral Leste Cearense, atuando pela valorização literária regional.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400">
                  Imortalidade literária e resgate cultural
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: OBRAS LITERÁRIAS EM DESTAQUE */}
        <section id="obras" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold">
                Produção Literária Autoral
              </p>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white mt-1">
                Obras em Destaque
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Livros autorais que unem educação financeira sensível, resgate de memórias familiares e lirismo poético.
            </p>
          </div>

          {/* Book Cards Grid with Framer Motion Fade-in and Slide-up */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {BOOKS.map((book, idx) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.65, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-violet-500/40 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-cyan-400 tracking-wide uppercase">
                      {book.category}
                    </span>
                    <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white group-hover:text-violet-200 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-slate-300 italic">{book.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div
                      onClick={() =>
                        setLightboxImage({
                          src: book.coverImage,
                          caption: `${book.title} — Capa Oficial por Xenia Cardoso`,
                        })
                      }
                      className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group/img shadow-xl border border-white/15 bg-slate-950"
                    >
                      <img
                        src={book.coverImage}
                        alt={`Capa do livro ${book.title}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5" /> Ampliar
                        </span>
                      </div>
                    </div>

                    {book.secondaryImage ? (
                      <div
                        onClick={() =>
                          setLightboxImage({
                            src: book.secondaryImage!,
                            caption: `${book.title} — Mostra pedagógica com Brasil Solidário e Encontro de Educação Financeira`,
                          })
                        }
                        className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group/img shadow-xl border border-white/15 bg-slate-950"
                      >
                        <img
                          src={book.secondaryImage}
                          alt={`Foto do evento de ${book.title}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5" /> Ampliar
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="glass-card rounded-2xl p-5 flex flex-col justify-center h-full border border-white/10 space-y-3">
                        <Quote className="w-8 h-8 text-violet-400/40" />
                        <p className="font-serif-display italic text-sm text-slate-300 leading-relaxed">
                          "{book.quote}"
                        </p>
                        <span className="text-xs text-slate-400 font-medium">
                          — Xenia Cardoso Moreira
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {book.synopsis}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
                    {book.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedBook(book)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Ver Detalhes &amp; Trechos</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#contato"
                    onClick={() => {
                      setContactSubject(`Interesse na Obra: ${book.title}`);
                      setContactMessage(`Olá, Xenia! Gostaria de saber mais sobre a obra "${book.title}" e como adquiri-la ou realizar uma palestra.`);
                    }}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                  >
                    Solicitar Exemplar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* TABELA RESPONSIVA DE DESTAQUES PROFISSIONAIS */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-display text-xl font-bold text-white flex items-center gap-2">
                  <span>🏆</span> Obras &amp; Destaques Profissionais
                </h3>
                <p className="text-xs text-slate-400">Marcos institucionais e literários consolidados</p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-violet-950/40 text-cyan-400 uppercase text-xs tracking-wider border-b border-white/10">
                  <tr>
                    <th className="py-3.5 px-4 font-semibold">Título / Reconhecimento</th>
                    <th className="py-3.5 px-4 font-semibold">Categoria</th>
                    <th className="py-3.5 px-4 font-semibold">Foco / Tema Principal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium text-white">Duas Portas</td>
                    <td className="py-3.5 px-4 text-violet-300">Romance Juvenil</td>
                    <td className="py-3.5 px-4">Educação Financeira &amp; Literatura Lúdica</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium text-white">Memórias Afetivas em Prosa e Poesia</td>
                    <td className="py-3.5 px-4 text-violet-300">Livro Solo</td>
                    <td className="py-3.5 px-4">Resgate Identitário e Afeto Familiar</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium text-white">Prêmio XP de Educação Financeira</td>
                    <td className="py-3.5 px-4 text-amber-300">Premiação Nacional</td>
                    <td className="py-3.5 px-4">Finalista com Metodologia Pedagógica em Beberibe</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-medium text-white">Cadeira nº 5 (ALLIULC)</td>
                    <td className="py-3.5 px-4 text-cyan-300">Academia de Letras</td>
                    <td className="py-3.5 px-4">Literatura do Litoral Leste Cearense</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        {/* 1. SEÇÃO DE PARTICIPAÇÕES LITERÁRIAS (CARROSSEL / SLIDES INTERATIVO) */}
        <section id="antologias" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5">
                <span>📚</span> Coletâneas &amp; Publicações Compartilhadas
              </p>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white mt-1 flex items-center gap-2">
                <span>📚</span> Participações e Antologias Literárias
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">
                Slide {carouselIndex + 1} de {LITERARY_PARTICIPATIONS.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-xl glass-card border border-white/15 hover:border-cyan-400/50 text-white transition-all hover:scale-105"
                  title="Slide Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-xl glass-card border border-white/15 hover:border-cyan-400/50 text-white transition-all hover:scale-105"
                  title="Próximo Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Interactive Container */}
          <div className="relative glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Slide Cover Display - Compact & Well Structured */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-[200px] sm:max-w-[230px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentParticipation.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                    >
                      <LiteraryBookCover
                        src={currentParticipation.coverImage}
                        alt={currentParticipation.title}
                        title={currentParticipation.title}
                        category={currentParticipation.category}
                        publisher={currentParticipation.publisher}
                        gradient={currentParticipation.accentGradient}
                        onClick={() => setSelectedParticipation(currentParticipation)}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Slide Details */}
              <div className="lg:col-span-8 space-y-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentParticipation.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
                        {currentParticipation.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        {currentParticipation.publisher}
                      </span>
                      {currentParticipation.year && (
                        <>
                          <span aria-hidden="true" className="text-slate-600">·</span>
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-violet-400" />
                            {currentParticipation.year}
                          </span>
                        </>
                      )}
                      {currentParticipation.badgeText && (
                        <span className="text-[11px] font-medium text-amber-300 bg-amber-950/40 border border-amber-800/40 px-2.5 py-0.5 rounded-full ml-auto">
                          {currentParticipation.badgeText}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                      {currentParticipation.title}
                    </h3>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-violet-300 font-medium flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
                      <span>Papel Literário: {currentParticipation.role}</span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                      {currentParticipation.description}
                    </p>

                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedParticipation(currentParticipation)}
                        className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium transition-all shadow-md flex items-center gap-2"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Ver Ficha da Antologia</span>
                      </button>

                      <button
                        onClick={() =>
                          setLightboxImage({
                            src: currentParticipation.coverImage,
                            caption: `${currentParticipation.title} — ${currentParticipation.publisher} (${currentParticipation.role})`,
                          })
                        }
                        className="px-4 py-2.5 rounded-xl glass-card border border-white/15 hover:border-cyan-400/50 text-slate-200 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Ampliar Imagem</span>
                      </button>

                      <a
                        href="#contato"
                        onClick={() => {
                          setContactSubject(`Consulta sobre Antologia: ${currentParticipation.title}`);
                          setContactMessage(`Olá Xenia, gostaria de saber mais sobre sua participação na obra "${currentParticipation.title}".`);
                        }}
                        className="px-4 py-2.5 rounded-xl glass-card border border-white/10 hover:border-white/30 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                      >
                        Falar com a autora
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slides bullet indicators */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {LITERARY_PARTICIPATIONS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        className={`h-2 rounded-full transition-all ${
                          carouselIndex === idx
                            ? 'w-7 bg-cyan-400'
                            : 'w-2 bg-slate-600 hover:bg-slate-400'
                        }`}
                        title={`Ir para a obra ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <span className="text-xs text-slate-400">
                    Obra {carouselIndex + 1} de {LITERARY_PARTICIPATIONS.length} · Navegue ou clique nas miniaturas abaixo
                  </span>
                </div>
              </div>
            </div>

            {/* Quick gallery thumbnails with Category Filter */}
            <div className="mt-10 pt-6 border-t border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Library className="w-4 h-4 text-cyan-400" />
                    <span>Catálogo de Coletâneas &amp; Antologias ({LITERARY_PARTICIPATIONS.length} obras)</span>
                  </h4>
                  <p className="text-xs text-slate-400">Selecione uma miniatura para carregá-la no carrossel</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <button
                    onClick={() => setActiveCategory('todas')}
                    className={`px-3 py-1 rounded-lg font-medium transition-all ${
                      activeCategory === 'todas'
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Todas ({LITERARY_PARTICIPATIONS.length})
                  </button>
                  <button
                    onClick={() => setActiveCategory('paschoal')}
                    className={`px-3 py-1 rounded-lg font-medium transition-all ${
                      activeCategory === 'paschoal'
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Paschoal Editora
                  </button>
                  <button
                    onClick={() => setActiveCategory('estilo')}
                    className={`px-3 py-1 rounded-lg font-medium transition-all ${
                      activeCategory === 'estilo'
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Estilo &amp; Poesia
                  </button>
                  <button
                    onClick={() => setActiveCategory('outros')}
                    className={`px-3 py-1 rounded-lg font-medium transition-all ${
                      activeCategory === 'outros'
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Outras Antologias
                  </button>
                </div>
              </div>

              {/* Grid of Structured Compact Cards with Mini Covers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-h-[420px] overflow-y-auto pr-1">
                {LITERARY_PARTICIPATIONS.filter((item) => {
                  if (activeCategory === 'paschoal') return item.publisher.toLowerCase().includes('paschoal');
                  if (activeCategory === 'estilo') return item.title.toLowerCase().includes('estilo') || item.publisher.toLowerCase().includes('estilo');
                  if (activeCategory === 'outros') return !item.publisher.toLowerCase().includes('paschoal') && !item.title.toLowerCase().includes('estilo');
                  return true;
                }).map((book) => {
                  const originalIndex = LITERARY_PARTICIPATIONS.findIndex((b) => b.id === book.id);
                  const isCurrent = carouselIndex === originalIndex;

                  return (
                    <button
                      key={book.id}
                      onClick={() => {
                        if (originalIndex !== -1) setCarouselIndex(originalIndex);
                      }}
                      className={`p-2.5 rounded-xl text-left transition-all border flex items-center gap-3 group relative overflow-hidden ${
                        isCurrent
                          ? 'bg-violet-600/25 border-violet-400 text-white shadow-lg ring-1 ring-violet-400/40'
                          : 'bg-white/[0.03] border-white/5 text-slate-300 hover:text-white hover:bg-white/[0.07] hover:border-white/20'
                      }`}
                    >
                      <div className="w-10 h-13 rounded-lg overflow-hidden bg-slate-950 border border-white/10 shrink-0 flex items-center justify-center p-0.5 shadow-sm">
                        <img
                          src={book.coverImage}
                          alt={book.title}
                          className="w-full h-full object-contain rounded transition-transform group-hover:scale-105"
                        />
                      </div>

                      <div className="min-w-0 flex-1 space-y-0.5">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[9px] uppercase tracking-wider text-cyan-400 font-semibold truncate">
                            {book.category}
                          </span>
                          {isCurrent && (
                            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 animate-pulse" />
                          )}
                        </div>
                        <p className="text-xs font-semibold truncate group-hover:text-cyan-300 transition-colors">
                          {book.title}
                        </p>
                        <p className="text-[10px] text-slate-400 truncate">{book.publisher}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 2. SEÇÃO ESPECIAL: PARTICIPAÇÃO NO DOCUMENTÁRIO ("Virando o jogo do IBS") */}
        <section id="documentario" className="scroll-mt-24 space-y-8">
          {/* Card em destaque com borda luminosa e gradiente especial */}
          <div className="relative glass-panel rounded-3xl p-6 sm:p-10 border-2 border-transparent bg-gradient-to-r from-amber-500/20 via-violet-600/20 to-cyan-500/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/15 via-purple-600/15 to-cyan-500/15 opacity-30 rounded-3xl pointer-events-none" />
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              {/* Header com título de impacto verbatim */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/15">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
                    <Clapperboard className="w-4 h-4 text-amber-400" />
                    <span>Registro Cinematográfico &amp; Voz Inspiradora</span>
                  </div>
                  <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white flex items-center gap-2">
                    <span>🎬</span> Destaque Especial: Documentário "Virando o jogo do IBS"
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-semibold whitespace-nowrap">
                    Documentário Oficial
                  </span>
                </div>
              </div>

              {/* Grid: Vídeo Player à esquerda / História e relato à direita */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Player de Vídeo Responsivo */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-sm relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/30 bg-slate-950 group/vid">
                    <video
                      ref={videoRef}
                      controls
                      playsInline
                      preload="metadata"
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                      className="w-full aspect-[9/16] object-cover bg-black"
                      src={IMAGES.documentaryVideo}
                    >
                      Seu navegador não suporta reprodução de vídeos em HTML5.
                    </video>

                    {/* Quick play overlay when paused */}
                    {!isVideoPlaying && (
                      <div
                        onClick={toggleVideo}
                        className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer transition-opacity group-hover/vid:bg-black/20"
                      >
                        <div className="w-16 h-16 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-xl transform transition-transform group-hover/vid:scale-110">
                          <Play className="w-8 h-8 ml-1" />
                        </div>
                        <p className="mt-3 text-xs text-white font-semibold drop-shadow">
                          Clique para assistir ao trecho
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Relato Emocional e Importância na Trajetória */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Citação direta do documentário */}
                  <div className="glass-card rounded-2xl p-5 sm:p-6 border border-amber-400/30 bg-black/30 space-y-3">
                    <Quote className="w-8 h-8 text-amber-400/60" />
                    <p className="font-serif-display text-lg sm:text-xl text-white italic leading-relaxed">
                      "Enquanto as pessoas não entenderem que mudar comportamento vai melhorar as gerações futuras, a coisa não vai acontecer. Um dia um aluno de oitavo ano chegou e me disse: <span className="text-amber-300 font-semibold">'Professora, eu consegui tirar o meu pai do fiado!'</span>"
                    </p>
                    <p className="text-xs text-amber-200/80 font-medium">
                      — Xenia Cardoso Moreira, depoimento para o documentário do IBS
                    </p>
                  </div>

                  {/* Parágrafo descritivo */}
                  <p className="text-base text-slate-200 font-light leading-relaxed">
                    A participação no documentário <strong className="text-white font-medium">"Virando o jogo do IBS"</strong> simboliza um dos momentos mais emocionantes e marcantes da trajetória de Xenia Cardoso. Reconhecida como uma das vozes mais inspiradoras do projeto pedagógico pelo Instituto Brasil Solidário, ela demonstrou na prática como uma única aula semanal de Educação Financeira pode quebrar ciclos históricos de endividamento e transformar o destino de famílias inteiras na comunidade de Beberibe.
                  </p>

                  {/* Credenciais do Documentário */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                      <span className="text-cyan-400 font-semibold">Transformação Comunitária</span>
                      <p>Do mercantil à mesa familiar: autonomia e cidadania desde o ensino fundamental.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                      <span className="text-violet-400 font-semibold">Reconhecimento Nacional</span>
                      <p>Finalista Prêmio XP (IXP 2021) e menção honrosa no Desafio Mooney 2023.</p>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-2 shadow-lg"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Ver Mais Vídeos no Instagram</span>
                    </a>
                    <button
                      onClick={toggleVideo}
                      className="px-4 py-2.5 rounded-xl glass-card border border-white/20 text-white text-xs font-medium hover:border-amber-400 transition-colors"
                    >
                      {isVideoPlaying ? 'Pausar Vídeo' : 'Assistir Novamente'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SEÇÃO DE REPORTAGENS (NA MÍDIA & REPORTAGENS) */}
        <section id="reportagens" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5">
                <span>📰</span> Imprensa &amp; Reconhecimento Público
              </p>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white mt-1 flex items-center gap-2">
                <span>📰</span> Na Mídia &amp; Reportagens
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Matérias, registros jornalísticos e entrevistas que documentam o impacto pedagógico e literário de Xenia Cardoso.
            </p>
          </div>

          {/* Grid de Cartões de Reportagens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRESS_REPORTS.map((report, idx) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: (idx % 3) * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-panel rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between hover:border-cyan-400/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Thumbnail / Foto da Matéria */}
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: report.image,
                        caption: `${report.title} — ${report.media} (${report.date})`,
                      })
                    }
                    className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer group/thumb"
                  >
                    <img
                      src={report.image}
                      alt={report.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-400/30 text-[11px] font-semibold">
                        {report.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 right-3">
                      <span className="p-1.5 rounded-lg bg-black/50 text-white/90 hover:text-white backdrop-blur-sm text-xs flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo do Cartão */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Newspaper className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                      <span className="font-medium text-slate-300">{report.media}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>{report.date}</span>
                    </div>

                    <h3 className="font-serif-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {report.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-light line-clamp-3">
                      {report.summary}
                    </p>

                    {report.quote && (
                      <p className="text-[11px] text-slate-400 italic border-l-2 border-violet-500/50 pl-2.5 mt-2">
                        "{report.quote}"
                      </p>
                    )}
                  </div>
                </div>

                {/* Botão de Ação Suave */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedReport(report)}
                    className="w-full py-2.5 px-4 rounded-xl glass-card border border-white/10 hover:border-cyan-400/50 text-cyan-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all group-hover:bg-cyan-500/10"
                  >
                    <span>Ler Matéria / Ver Detalhes</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION: INTERESSES E PAIXÕES */}
        <section id="interesses" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                Áreas de Atuação &amp; Curiosidade
              </p>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white mt-1">
                Interesses e Paixões
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              A união harmônica entre a tradição literária, a dedicação pedagógica e as tecnologias do amanhã.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERESTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 ${item.borderColor} transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{item.emoji}</span>
                        <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${item.iconColor}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <span className="text-xs font-serif-display italic text-slate-400">
                        Pilar {idx + 1}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-serif-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-300 italic">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>Dedicação contínua</span>
                    <span className="text-violet-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Saiba mais &rarr;
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Special Highlight Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 bg-gradient-to-br from-violet-900/30 via-indigo-900/20 to-cyan-900/20 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Sinergia Educacional</span>
                </div>
                <h3 className="font-serif-display text-xl font-bold text-white">
                  O Encontro da Letra com o Código
                </h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  "A literatura ensina a sentir; a educação financeira ensina a planejar; e a tecnologia dá asas para concretizar. Meu propósito é articular essas três forças na formação de cidadãos conscientes e preparados para o mundo."
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
                <span>Xenia Cardoso Moreira</span>
                <span className="text-cyan-400 font-medium">Beberibe, Ceará</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: PENSAMENTOS & CITAÇÕES AUTORAIS */}
        <section id="trajetoria" className="scroll-mt-24">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 bg-gradient-to-br from-white/[0.04] to-white/[0.01] relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex p-3 rounded-2xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <Quote className="w-6 h-6" />
              </div>

              <blockquote className="font-serif-display text-xl sm:text-2xl lg:text-3xl font-medium text-white italic leading-relaxed text-balance">
                "{REFLECTIONS[currentQuoteIndex].quote}"
              </blockquote>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-cyan-300">
                  Xenia Cardoso Moreira
                </p>
                <p className="text-xs text-slate-400">
                  {REFLECTIONS[currentQuoteIndex].context}
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 pt-4">
                {REFLECTIONS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentQuoteIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      currentQuoteIndex === i
                        ? 'w-8 bg-cyan-400'
                        : 'w-2 bg-slate-600 hover:bg-slate-400'
                    }`}
                    title={`Ver reflexão ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: REDES SOCIAIS & CONTATO */}
        <section id="contato" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold">
                Canais Oficiais &amp; Conexão
              </p>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white mt-1">
                Redes Sociais &amp; Contato
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Aberto para palestras, encontros pedagógicos, projetos de Educação Financeira, oficinas literárias e aquisição de obras.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Box: Instagram CTA & Direct Email Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Grand Instagram Card */}
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-rose-500/30">
                    <Instagram className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-xl font-bold text-white">
                      Instagram Oficial
                    </h3>
                    <p className="text-xs text-slate-400">@xenia_cardoso</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  Acompanhe bastidores da escrita, novidades sobre lançamentos, registros da Academia de Letras (ALLIULC) e reflexões diárias sobre educação e literatura.
                </p>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-violet-600/30 transition-all duration-300 hover:shadow-cyan-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 overflow-hidden group/btn"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out" />
                  <Instagram className="w-4 h-4" />
                  <span>Seguir no Instagram (@xenia_cardoso)</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
                </a>
              </div>

              {/* Direct Email Card - EXPLICIT EMAIL REQUISITE */}
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">E-mail Direto de Contato</h4>
                      <p className="text-xs text-slate-400">Disponível para convites e diálogos</p>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card border border-white/10 hover:border-cyan-400 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-cyan-500/30 text-sm font-mono text-cyan-300 break-all select-all flex items-center justify-between">
                  <span>xcmylucas@gmail.com</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans">Oficial</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Sinta-se à vontade para enviar mensagens diretamente para <strong className="text-white font-medium">xcmylucas@gmail.com</strong> para parcerias escolares, convites de antologias ou aquisição autografada de obras.
                </p>
              </div>
            </div>

            {/* Right Box: Interactive Message Form com Agradecimento Final */}
            <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div>
                <h3 className="font-serif-display text-2xl font-bold text-white mb-2">
                  Preparar E-mail para Xenia Cardoso
                </h3>
                <p className="text-sm text-slate-300 font-light">
                  Preencha o assunto e sua proposta abaixo para abrir seu aplicativo de e-mail endereçado diretamente para <span className="text-cyan-300 font-mono">xcmylucas@gmail.com</span>.
                </p>
              </div>

              <form onSubmit={handleSendContact} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Assunto do Contato
                  </label>
                  <select
                    value={contactSubject}
                    onChange={(e) => setContactSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                  >
                    <option value="Palestra / Evento Literário" className="bg-[#0f172a] text-white">
                      Palestra ou Evento Literário
                    </option>
                    <option value="Projeto de Educação Financeira Escolar" className="bg-[#0f172a] text-white">
                      Projeto de Educação Financeira em Escola
                    </option>
                    <option value="Aquisição de Exemplares de Livros" className="bg-[#0f172a] text-white">
                      Aquisição de Exemplares (Duas Portas / Memórias Afetivas)
                    </option>
                    <option value="Convite para Antologia / Revista Literária" className="bg-[#0f172a] text-white">
                      Convite para Nova Antologia ou Revista Literária
                    </option>
                    <option value="Documentário / Entrevista / Reportagem" className="bg-[#0f172a] text-white">
                      Documentário, Entrevista ou Reportagem
                    </option>
                    <option value="Outro Assunto" className="bg-[#0f172a] text-white">
                      Outro Assunto
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
                    Sua Mensagem ou Proposta
                  </label>
                  <textarea
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Olá, Xenia! Gostaria de conversar sobre uma apresentação para nossos alunos..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors placeholder:text-slate-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    Destinatário: <span className="text-cyan-300 font-mono font-medium">xcmylucas@gmail.com</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-medium text-sm transition-all shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Preparar E-mail</span>
                  </button>
                </div>

                {contactSent && (
                  <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Seu cliente de e-mail foi aberto com as informações prontas para envio!</span>
                  </div>
                )}
              </form>

              {/* Mensagem Final de Agradecimento da Autora */}
              <div className="pt-6 border-t border-white/10 p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-violet-400 text-xs font-semibold uppercase tracking-wider">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                  <span>Agradecimento &amp; Boas-Vindas</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-serif-display italic leading-relaxed">
                  "Agradeço imensamente pelo seu carinho, sua visita e pelo interesse em meu trabalho literário e educacional. Que possamos continuar abrindo portas para a sensibilidade, o conhecimento e o afeto. Muito obrigada!"
                </p>
                <p className="text-[11px] text-cyan-300 font-medium text-right">
                  — Com gratidão, Xenia Cardoso Moreira
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 glass-panel bg-[#0a0f1d]/90 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-serif-display text-sm font-bold text-white">
              Xenia Cardoso Moreira
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Cadeira nº 5 — Academia de Letras do Litoral Leste Cearense</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>Beberibe — Ceará</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a
              href="mailto:xcmylucas@gmail.com"
              className="hover:text-violet-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>xcmylucas@gmail.com</span>
            </a>
            <a href="#documentario" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5" />
              <span>Documentário</span>
            </a>
            <a href="#trilha-sonora" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5" />
              <span>Trilha Sonora</span>
            </a>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX MODAL FOR IMAGES */}
      <AnimatePresence>
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] glass-panel rounded-3xl p-3 sm:p-4 border border-white/20 shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-hidden rounded-2xl flex-1 flex items-center justify-center bg-slate-950">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.caption}
                  className="max-h-[75vh] w-auto object-contain rounded-xl"
                />
              </div>

              <div className="mt-3 px-3 py-2 text-center text-xs sm:text-sm text-slate-300">
                {lightboxImage.caption}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* BOOK DETAILS MODAL */}
      <AnimatePresence>
        {selectedBook && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedBook(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-medium">
                  {selectedBook.category}
                </span>
                <span className="text-xs text-slate-400">Autoria: Xenia Cardoso Moreira</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif-display text-3xl font-bold text-white">
                  {selectedBook.title}
                </h3>
                <p className="text-sm text-cyan-300 font-serif-display italic">
                  {selectedBook.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  src={selectedBook.coverImage}
                  alt={selectedBook.title}
                  className="w-full aspect-[3/4] object-cover rounded-2xl border border-white/15"
                />
                {selectedBook.secondaryImage ? (
                  <img
                    src={selectedBook.secondaryImage}
                    alt={`${selectedBook.title} evento`}
                    className="w-full aspect-[3/4] object-cover rounded-2xl border border-white/15"
                  />
                ) : (
                  <div className="glass-card rounded-2xl p-5 flex flex-col justify-center border border-white/10 space-y-3">
                    <Quote className="w-6 h-6 text-violet-400" />
                    <p className="font-serif-display text-sm italic text-slate-200">
                      "{selectedBook.quote}"
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Sinopse Detalhada
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {selectedBook.synopsis}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Relevância &amp; Impacto
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedBook.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedBook(null)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                >
                  Fechar
                </button>

                <a
                  href="#contato"
                  onClick={() => {
                    setSelectedBook(null);
                    setContactSubject(`Interesse em Exemplar: ${selectedBook.title}`);
                    setContactMessage(`Olá Xenia, gostaria de saber como adquirir exemplares do livro "${selectedBook.title}".`);
                  }}
                  className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium transition-colors"
                >
                  Falar sobre esta Obra
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LITERARY PARTICIPATION MODAL */}
      <AnimatePresence>
        {selectedParticipation && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedParticipation(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedParticipation(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
                  {selectedParticipation.category}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedParticipation.publisher}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
                  {selectedParticipation.title}
                </h3>
                <p className="text-xs text-violet-300 font-medium">
                  Papel Literário: {selectedParticipation.role}
                </p>
              </div>

              <div className="max-w-xs mx-auto">
                <LiteraryBookCover
                  src={selectedParticipation.coverImage}
                  alt={selectedParticipation.title}
                  title={selectedParticipation.title}
                  category={selectedParticipation.category}
                  publisher={selectedParticipation.publisher}
                  gradient={selectedParticipation.accentGradient}
                />
              </div>

              <div className="space-y-2 text-sm text-slate-300 leading-relaxed font-light">
                <p>{selectedParticipation.description}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedParticipation(null)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                >
                  Fechar
                </button>
                <a
                  href="#contato"
                  onClick={() => {
                    setSelectedParticipation(null);
                    setContactSubject(`Consulta sobre Antologia: ${selectedParticipation.title}`);
                    setContactMessage(`Olá Xenia, gostaria de saber mais sobre sua participação na antologia "${selectedParticipation.title}".`);
                  }}
                  className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition-colors"
                >
                  Enviar Mensagem sobre este Livro
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* REPORTAGE DETAILS MODAL */}
      <AnimatePresence>
        {selectedReport && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedReport(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedReport(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-semibold">
                  {selectedReport.category}
                </span>
                <span className="text-slate-400">· {selectedReport.media}</span>
                <span className="text-slate-500">· {selectedReport.date}</span>
              </div>

              <h3 className="font-serif-display text-2xl font-bold text-white">
                {selectedReport.title}
              </h3>

              <div
                onClick={() =>
                  setLightboxImage({
                    src: selectedReport.image,
                    caption: `${selectedReport.title} — ${selectedReport.media}`,
                  })
                }
                className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-white/15 bg-slate-950 group/rep"
              >
                <img
                  src={selectedReport.image}
                  alt={selectedReport.title}
                  className="w-full max-h-[50vh] object-contain mx-auto"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/rep:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" /> Clique para Tela Cheia
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300 leading-relaxed font-light">
                <p>{selectedReport.summary}</p>
                {selectedReport.quote && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 italic text-cyan-200 text-xs">
                    "{selectedReport.quote}"
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedReport(null)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                >
                  Fechar
                </button>
                <button
                  onClick={() =>
                    setLightboxImage({
                      src: selectedReport.image,
                      caption: `${selectedReport.title} — ${selectedReport.media}`,
                    })
                  }
                  className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ver Recorte Completo em Alta Definição</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
