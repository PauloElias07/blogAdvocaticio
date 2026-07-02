import type { ReactNode } from "react";

export default function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-panelLine bg-panel p-6 transition-colors hover:border-gold/50">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
        {icon}
      </div>
      <h3 className="font-display text-lg text-parchment">{title}</h3>
      <p className="mt-2 text-sm text-parchmentDim">{description}</p>
    </div>
  );
}
