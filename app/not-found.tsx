import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <span className="eyebrow text-xs uppercase text-gold">404</span>
      <h1 className="mt-3 font-display text-3xl text-parchment">
        Esta página não foi encontrada
      </h1>
      <p className="mt-3 text-parchmentDim">
        O conteúdo que você procura pode ter mudado de endereço.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-gold px-6 py-3 text-xs uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-ink"
      >
        Voltar ao início
      </Link>
    </section>
  );
}
