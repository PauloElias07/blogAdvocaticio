import type { Metadata } from "next";
import Image from "next/image";
import Scales from "@/components/Scales";

export const metadata: Metadata = {
  title: "Sobre | Roberto Carlos Elias — Advogado",
  description: "Conheça o advogado Roberto Carlos Elias e sua atuação em Direito do Consumidor.",
};

export default function SobrePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-14 md:grid-cols-2 md:items-center">
        <div>
          <span className="eyebrow text-xs uppercase text-gold">Sobre</span>
          <h1 className="mt-3 font-display text-4xl text-parchment">
            Roberto Carlos Elias
          </h1>
          <p className="mt-2 font-display text-lg text-goldLight">
            Advogado — Direito do Consumidor
          </p>
          <div className="mt-8 space-y-5 text-parchmentDim">
            <p>
              Atuação dedicada a quem foi lesado numa relação de consumo:
              contratos com cláusulas abusivas, produtos com vício,
              cobranças indevidas e situações que geram dano moral ou
              material.
            </p>
            <p>
              O escritório acompanha cada caso de perto, com linguagem
              clara e orientação prática desde o primeiro contato —
              porque entender os próprios direitos é o primeiro passo
              para defendê-los.
            </p>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <p className="font-display text-3xl text-gold">4</p>
              <p className="text-xs uppercase tracking-widest text-parchmentDim">
                Áreas de atuação
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">100%</p>
              <p className="text-xs uppercase tracking-widest text-parchmentDim">
                Foco no consumidor
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <Scales className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 text-gold/10" />
          <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-goldGlow">
            <Image
              src="/images/cartao.png"
              alt="Cartão de visita de Roberto Carlos Elias, Advogado — Direito do Consumidor"
              width={1536}
              height={1024}
              className="w-full"
              priority
            />
          </div>
          <p className="mt-3 text-center text-xs text-parchmentDim">
            Cartão de visita oficial do escritório
          </p>
        </div>
      </div>

      <div className="mt-20 rounded-2xl border border-panelLine bg-panel p-10 text-center">
        <p className="font-display text-2xl text-parchment">
          Defender seus direitos é a{" "}
          <span className="text-gold">nossa prioridade</span>.
        </p>
        <a
          href="https://wa.me/5511988649386"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-gold px-6 py-3 text-xs uppercase tracking-widest text-ink transition-colors hover:bg-goldLight"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
