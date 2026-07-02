import Link from "next/link";
import { Post } from "@/lib/posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-panelLine bg-panel p-7 transition-colors hover:border-gold/50"
    >
      <span className="eyebrow w-fit rounded-full border border-bronze px-3 py-1 text-[10px] uppercase text-goldLight">
        {post.category}
      </span>
      <h3 className="mt-4 font-display text-xl leading-snug text-parchment group-hover:text-gold transition-colors">
        {post.title}
      </h3>
      <p className="mt-3 text-sm text-parchmentDim">{post.excerpt}</p>
      <div className="mt-6 flex items-center gap-3 text-xs text-parchmentDim">
        <span>{formatDate(post.date)}</span>
        <span aria-hidden="true">•</span>
        <span>{post.readTime}</span>
      </div>
    </Link>
  );
}
