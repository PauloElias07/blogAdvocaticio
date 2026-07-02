import Link from "next/link";

const nav = [
  { href: "/", label: "Início" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-panelLine bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold text-gold font-display text-sm tracking-wide">
            RCE
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base tracking-wide text-parchment group-hover:text-gold transition-colors">
              Roberto Carlos Elias
            </span>
            <span className="eyebrow text-[10px] uppercase text-gold">Advogado</span>
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="eyebrow text-xs uppercase text-parchmentDim transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/5511988649386"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-gold px-4 py-2 text-xs uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-ink md:inline-block"
        >
          Fale agora
        </a>
      </div>
    </header>
  );
}
