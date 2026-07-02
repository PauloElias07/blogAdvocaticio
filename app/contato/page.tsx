import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Roberto Carlos Elias — Advogado",
  description: "Fale com o advogado Roberto Carlos Elias pelo WhatsApp ou Instagram.",
};

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <span className="eyebrow text-xs uppercase text-gold">Contato</span>
      <h1 className="mt-3 font-display text-4xl text-parchment">
        Vamos conversar sobre o seu caso
      </h1>
      <p className="mt-4 text-parchmentDim">
        Escolha o canal mais confortável para você. A resposta costuma ser
        rápida.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <a
          href="https://wa.me/5511988649386"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-panelLine bg-panel p-8 transition-colors hover:border-gold/50"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
            </svg>
          </div>
          <p className="mt-4 font-display text-lg text-parchment">WhatsApp</p>
          <p className="mt-1 text-sm text-parchmentDim">11 98864-9386</p>
        </a>

        <a
          href="https://instagram.com/robertocarlos.elias.adv"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-panelLine bg-panel p-8 transition-colors hover:border-gold/50"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <p className="mt-4 font-display text-lg text-parchment">Instagram</p>
          <p className="mt-1 text-sm text-parchmentDim">@robertocarlos.elias.adv</p>
        </a>
      </div>
    </section>
  );
}
