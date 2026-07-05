import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import PostCard from "@/components/PostCard";
import { posts } from "@/lib/posts";
import Image from "next/image";

const services = [
  {
    title: "Relação de Consumo",
    description:
      "Orientação e defesa em conflitos com fornecedores, prestadores de serviço e comércio em geral.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="9" cy="20" r="1.3" />
        <circle cx="17" cy="20" r="1.3" />
        <path d="M2 3h2l2.6 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" />
      </svg>
    ),
  },
  {
    title: "Contratos e Serviços",
    description:
      "Revisão e contestação de cláusulas abusivas em contratos de adesão, planos e assinaturas.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
        <path d="M9 12h6M9 16h6M9 8h2" />
      </svg>
    ),
  },
  {
    title: "Produtos e Vícios",
    description:
      "Ação contra defeitos, produtos com vício oculto e descumprimento de garantia legal.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="5" y="9" width="14" height="4" rx="1" />
        <path d="M6 13v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6M12 9V6a3 3 0 1 1 3 3M12 9V6a3 3 0 1 0-3 3" />
      </svg>
    ),
  },
  {
    title: "Danos Morais e Materiais",
    description:
      "Reparação por negativação indevida, exposição vexatória e falhas graves na prestação de serviço.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="9" cy="8" r="3" />
        <path d="M2 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1" />
        <circle cx="18" cy="8" r="2.4" />
        <path d="M16.5 21v-1a4.5 4.5 0 0 0-1.2-3" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Estilos locais atualizados para a animação fluida e efeito cônico gradual */}
      <style dangerouslySetInnerHTML={{__html: `
  @keyframes drawCircle {
    from { stroke-dashoffset: 942; }
    to { stroke-dashoffset: 235; }
  }
  .animate-draw-circle {
    stroke-dasharray: 942;
    stroke-dashoffset: 942;
    animation: drawCircle 2.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  }

  /* Animação de Entrada Suave */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-up {
    animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    animation-fill-mode: backwards; /* Mantém invisível antes de começar */
  }
  .delay-100 { animation-delay: 100ms; }
  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }
  .delay-400 { animation-delay: 400ms; }
  .delay-500 { animation-delay: 500ms; }

  /* Máscara CSS para o círculo */
  .conic-taper-mask {
    mask-image: conic-gradient(from calc(-1 * var(--rotation, 106deg)) at center, rgba(0,0,0,1) 0deg, rgba(0,0,0,0.8) 90deg, rgba(0,0,0,0.4) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg);
    -webkit-mask-image: conic-gradient(from calc(-1 * var(--rotation, 106deg)) at center, rgba(0,0,0,1) 0deg, rgba(0,0,0,0.8) 90deg, rgba(0,0,0,0.4) 180deg, rgba(0,0,0,0.2) 270deg, rgba(0,0,0,1) 360deg);
  }
`}} />

      {/* Hero — mirrors the card's split composition: text on the left, scales on the right */}
      <section className="texture relative overflow-hidden border-b border-panelLine">
        
        {/* Imagem da Estátua da Justiça em Background */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.12]">
          <Image
            src="/images/estatua.png"
            alt="Estátua da Justiça de fundo"
            fill
            priority
            className="object-cover object-center mix-blend-luminosity"
          />
          {/* Degradê preto nas bordas inferiores e superiores para suavizar o corte da imagem */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
        </div>

        {/* Adicionado o z-10 para garantir que o conteúdo fique visível acima da imagem de fundo */}
<div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
  <div className="animate-fade-up"> {/* Container do texto */}
    <span className="eyebrow inline-block text-xs uppercase text-gold animate-fade-up">
      Advogado
    </span>
    <h1 className="mt-4 font-display text-5xl leading-[1.05] text-parchment md:text-6xl animate-fade-up delay-100">
      Roberto Carlos <span className="text-gold">Elias</span>
    </h1>
    <div className="mt-5 h-px w-16 bg-gold-fade animate-fade-up delay-200" />
    <p className="mt-5 font-display text-xl text-goldLight animate-fade-up delay-200">
      Direito do Consumidor
    </p>
    <p className="mt-2 text-sm uppercase tracking-widest text-parchmentDim animate-fade-up delay-300">
      Seus direitos. Nossa missão.
    </p>
    <p className="mt-6 max-w-md text-parchmentDim animate-fade-up delay-300">
      Atendimento próximo e estratégico para quem foi lesado em uma
      relação de consumo — de contratos abusivos a produtos com vício
      e cobranças indevidas.
    </p>
    <div className="mt-8 flex flex-wrap gap-4 animate-fade-up delay-400">
              <a
                href="https://wa.me/5511988649386"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-6 py-3 text-xs uppercase tracking-widest text-ink transition-colors hover:bg-goldLight"
              >
                Falar no WhatsApp
              </a>
              <Link
                href="/blog"
                className="rounded-full border border-gold px-6 py-3 text-xs uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                Ler o blog
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-86 md:w-86 animate-fade-up delay-500">
            {/* Círculo Perfeito e Contínuo com Máscara de Afinamento Gradual em CSS */}
            <svg 
              className="absolute inset-0 h-full w-full conic-taper-mask"
              style={{ transform: "rotate(106deg)" }} /* Posiciona a abertura e a parte espessa com perfeição */
              viewBox="0 0 320 320"
            >
              <defs>
                {/* Gradiente Dourado Vivo */}
                <linearGradient id="vibrantGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF2A3" />
                  <stop offset="50%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#FFA500" />
                </linearGradient>

                {/* Máscara SVG para a animação do traço surgir fluidamente */}
                <mask id="drawMask">
                  <circle
                    cx="160"
                    cy="160"
                    r="135"
                    fill="none"
                    stroke="white"
                    strokeWidth="16" /* Espessura total controlada nativamente */
                    strokeLinecap="round"
                    className="animate-draw-circle"
                    style={{
                      strokeDasharray: 942,
                      strokeDashoffset: 942,
                    }}
                  />
                </mask>
              </defs>

              {/* Linha única contínua e perfeita, sem emendas geométricas */}
              <circle
                cx="160"
                cy="160"
                r="135"
                fill="none"
                stroke="url(#vibrantGoldGradient)"
                strokeWidth="7"
                mask="url(#drawMask)"
              />
            </svg>
            
            {/* Sua logo com o tamanho ampliado e margem deslocada à esquerda */}
            <div className="relative h-48 w-48 md:h-64 md:w-64 ml-[-20px] drop-shadow-[0_0_35px_rgba(255,215,0,0.25)]">
              <Image 
                src="/images/LogoAdv.png" 
                alt="Logo Roberto Carlos Elias"
                fill 
                sizes="(max-width: 768px) 192px, 256px" 
                className="object-contain" 
                priority 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practice areas — the four icons from the back of the card */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <span className="eyebrow text-xs uppercase text-gold">Atuação</span>
          <h2 className="mt-3 font-display text-3xl text-parchment">
            Frentes de atuação
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Blog preview */}
      <section className="border-t border-panelLine bg-panel/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow text-xs uppercase text-gold">Blog</span>
              <h2 className="mt-3 font-display text-3xl text-parchment">
                Artigos recentes
              </h2>
            </div>
            <Link
              href="/blog"
              className="eyebrow text-xs uppercase text-gold hover:text-goldLight transition-colors"
            >
              Ver todos →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="font-display text-3xl text-parchment md:text-4xl">
          Defender seus direitos é a{" "}
          <span className="text-gold">nossa prioridade</span>.
        </p>
        <a
          href="https://wa.me/5511988649386"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-gold px-8 py-3 text-xs uppercase tracking-widest text-ink transition-colors hover:bg-goldLight"
        >
          Agende uma conversa
        </a>
      </section>
    </>
  );
}