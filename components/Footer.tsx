import Link from "next/link";
import Scales from "./Scales";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-panelLine bg-panel">
      <Scales className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-gold/5" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg text-parchment">Roberto Carlos Elias</p>
          <p className="eyebrow text-[10px] uppercase text-gold">Advogado — Direito do Consumidor</p>
          <p className="mt-4 max-w-xs text-sm text-parchmentDim">
            Defender seus direitos é a nossa prioridade. Atendimento dedicado
            para relações de consumo, contratos, produtos com vício e danos
            morais e materiais.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4 text-[10px] uppercase text-gold">Contato</p>
          <ul className="space-y-2 text-sm text-parchmentDim">
            <li>
              <a
                href="https://wa.me/5511988649386"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                WhatsApp — 11 98864-9386
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/robertoelias.adv"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                @robertoelias.adv
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4 text-[10px] uppercase text-gold">Navegação</p>
          <ul className="space-y-2 text-sm text-parchmentDim">
            <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            <li><Link href="/sobre" className="hover:text-gold transition-colors">Sobre o escritório</Link></li>
            <li><Link href="/contato" className="hover:text-gold transition-colors">Contato</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-panelLine px-6 py-5 text-center text-xs text-parchmentDim">
        © {new Date().getFullYear()} Roberto Carlos Elias — Advogado. Todos os direitos reservados.
      </div>
    </footer>
  );
}
