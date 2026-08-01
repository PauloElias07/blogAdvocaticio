import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/", label: "Início" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
   <header className="sticky top-0 z-50 border-b border-panelLine bg-ink/90 backdrop-blur">
  {/* Reduzido de py-4 para py-2 para deixar o header bem mais fino */}
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
    <Link href="/" className="group flex items-center gap-3">
      {/* Container com o mesmo design de círculo animado do Hero */}
      <span className="relative flex h-14 w-14 items-center justify-center">
        {/* Círculo SVG idêntico em menor escala */}
        <svg 
          className="absolute inset-0 h-full w-full conic-taper-mask"
          style={{ transform: "rotate(80deg)" }} 
          viewBox="0 0 320 320"
        >
          <defs>
            <linearGradient id="headerGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2A3" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FFA500" />
            </linearGradient>

            <mask id="headerDrawMask">
              <circle
                cx="160"
                cy="160"
                r="135"
                fill="none"
                stroke="white"
                strokeWidth="16"
                strokeLinecap="round"
                className="animate-draw-circle"
                style={{
                  strokeDasharray: 942,
                  strokeDashoffset: 942,
                }}
              />
            </mask>
          </defs>

          <circle
            cx="160"
            cy="160"
            r="135"
            fill="none"
            stroke="url(#headerGoldGradient)"
            strokeWidth="10"
            mask="url(#headerDrawMask)"
          />
        </svg>

        {/* Imagem da Logo no centro do círculo */}
        <Image 
          src="/images/logoAdv.png" 
          alt="Logo RCE" 
          width={112} 
          height={112}
          className="relative z-10 h-full w-full object-contain p-2" 
        />
      </span>
      
      <span className="flex flex-col leading-tight">
        <span className="font-display text-base tracking-wide text-parchment group-hover:text-gold transition-colors">
          Roberto Carlos Elias
        </span>
        <span className="eyebrow text-[10px] uppercase tracking-widest text-gold mt-0.5">
          Advogado
        </span>
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