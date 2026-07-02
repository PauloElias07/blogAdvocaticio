import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Roberto Carlos Elias — Advogado",
  description:
    "Artigos sobre Direito do Consumidor: relação de consumo, contratos, produtos com vício e danos morais.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <span className="eyebrow text-xs uppercase text-gold">Blog</span>
      <h1 className="mt-3 font-display text-4xl text-parchment">
        Direito do Consumidor, explicado com clareza
      </h1>
      <p className="mt-4 max-w-xl text-parchmentDim">
        Artigos objetivos sobre prazos, direitos e caminhos práticos para
        quem foi lesado numa relação de consumo.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
