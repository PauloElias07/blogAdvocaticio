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
      {/* Hero — mirrors the card's split composition: text on the left, scales on the right */}
      <section className="texture relative overflow-hidden border-b border-panelLine">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <span className="eyebrow inline-block text-xs uppercase text-gold">
              Advogado
            </span>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-parchment md:text-6xl">
              Roberto Carlos <span className="text-gold">Elias</span>
            </h1>
            <div className="mt-5 h-px w-16 bg-gold-fade" />
            <p className="mt-5 font-display text-xl text-goldLight">
              Direito do Consumidor
            </p>
            <p className="mt-2 text-sm uppercase tracking-widest text-parchmentDim">
              Seus direitos. Nossa missão.
            </p>
            <p className="mt-6 max-w-md text-parchmentDim">
              Atendimento próximo e estratégico para quem foi lesado em uma
              relação de consumo — de contratos abusivos a produtos com vício
              e cobranças indevidas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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

          <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-96 md:w-96">
            {/* Círculos decorativos de fundo mantidos */}
            <div className="absolute inset-0 rounded-full border border-gold/30" />
            <div className="absolute inset-8 rounded-full border border-gold/15" />
            
            {/* Sua logo substituindo o ícone Scales */}
           <div className="relative h-48 w-48 md:h-64 md:w-64 ml-[-20px] drop-shadow-[0_0_30px_rgba(201,162,75,0.35)]">
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