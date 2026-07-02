import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Roberto Carlos Elias — Advogado`,
    description: post.excerpt,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/blog" className="eyebrow text-xs uppercase text-gold hover:text-goldLight">
        ← Voltar ao blog
      </Link>

      <span className="eyebrow mt-6 inline-block rounded-full border border-bronze px-3 py-1 text-[10px] uppercase text-goldLight">
        {post.category}
      </span>

      <h1 className="mt-4 font-display text-4xl leading-tight text-parchment">
        {post.title}
      </h1>

      <div className="mt-4 flex items-center gap-3 text-xs text-parchmentDim">
        <span>{formatDate(post.date)}</span>
        <span aria-hidden="true">•</span>
        <span>{post.readTime}</span>
        <span aria-hidden="true">•</span>
        <span>Roberto Carlos Elias</span>
      </div>

      <div className="mt-10 h-px w-full bg-panelLine" />

      <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-parchment/90">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-gold/30 bg-panel p-8 text-center">
        <p className="font-display text-xl text-parchment">
          Está passando por uma situação parecida?
        </p>
        <p className="mt-2 text-sm text-parchmentDim">
          Fale diretamente com o advogado Roberto Carlos Elias.
        </p>
        <a
          href="https://wa.me/5511988649386"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-gold px-6 py-3 text-xs uppercase tracking-widest text-ink transition-colors hover:bg-goldLight"
        >
          Conversar no WhatsApp
        </a>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <p className="eyebrow text-xs uppercase text-gold">Leia também</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="rounded-xl border border-panelLine bg-panel p-5 text-sm text-parchment hover:border-gold/50 transition-colors"
              >
                {r.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
