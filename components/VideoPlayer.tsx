"use client";

import { useState } from "react";
import type { VideoSuggestion } from "@/lib/posts";

export default function VideoPlayer({ video }: { video: VideoSuggestion }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-gold/30 bg-panel">
      <div className="flex items-center gap-2 border-b border-panelLine px-4 py-3">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
          <path d="M8 5v14l11-7z" />
        </svg>
        <span className="eyebrow text-[10px] uppercase text-gold">
          Vídeo sobre este assunto
        </span>
      </div>

      {!failed ? (
        <video
          className="aspect-video w-full bg-black"
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
          controlsList="nodownload"
          onError={() => setFailed(true)}
        >
          <source src={video.src} type="video/mp4" />
          Seu navegador não suporta reprodução de vídeo nativa.
        </video>
      ) : (
        <div
          className="flex aspect-video w-full flex-col items-center justify-center gap-2 bg-black/60 px-6 text-center"
          style={video.poster ? { backgroundImage: `url(${video.poster})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="max-w-[220px] text-xs text-parchmentDim">
            Vídeo em breve. Adicione o arquivo em{" "}
            <code className="text-goldLight">{video.src}</code>
          </p>
        </div>
      )}

      <div className="px-5 py-4">
        <p className="font-display text-base text-parchment">{video.title}</p>
        {video.caption && (
          <p className="mt-1 text-sm text-parchmentDim">{video.caption}</p>
        )}
      </div>
    </div>
  );
}