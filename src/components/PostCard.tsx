import React from "react";
import type { ShortPostData } from "@/lib/posts";

interface PostCardProps {
  item: ShortPostData;
  index: number;
  formattedDate: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  item,
  index,
  formattedDate,
}: PostCardProps) => {
  return (
    <article
      className="home-post-card group relative overflow-hidden rounded-lg border border-border bg-card shadow-[0_8px_24px_rgba(24,24,27,0.08)] transition-all duration-300 hover:shadow-[0_12px_26px_rgba(24,24,27,0.12)]"
      style={{
        transitionDelay: `${Math.min(index, 8) * 70}ms`,
      }}
    >
      <a href={`/post/${item.slug}`} className="block">
        <div className="relative w-full overflow-hidden border-b border-border bg-bg-secondary aspect-[16/7.8]">
          {item.cover ? (
            <img
              className="h-full w-full object-fill transition-transform duration-700 group-hover:scale-105"
              src={item.cover.src}
              alt={item.cover.alt || item.title}
              width={800}
              height={420}
              loading={index <= 1 ? "eager" : "lazy"}
              fetchPriority={index <= 1 ? "high" : "auto"}
              decoding="async"
            />
          ) : (
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-primary-light) 100%)",
              }}
            />
          )}

          <div className="pointer-events-none absolute left-2 top-2 z-10 inline-flex items-center gap-1 rounded-full border border-white/35 bg-black/45 px-2 py-0.5 text-[11px] text-white backdrop-blur-[1px]">
            <div className="i-ri:calendar-line" />
            {formattedDate}
          </div>

          {/* <div className="pointer-events-none absolute bottom-2 right-2 z-10 flex max-w-[85%] flex-wrap justify-end gap-1">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-white/35 bg-black/45 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-[1px]"
              >
                #{tag}
              </span>
            ))}
            {item.tags.length > 3 && (
              <span className="inline-flex items-center rounded-full border border-white/35 bg-black/45 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-[1px]">
                +{item.tags.length - 3}
              </span>
            )}
          </div> */}
        </div>

        <div className="flex flex-col gap-2.5 p-4 md:p-5">
          <h2 className="line-clamp-2 text-lg font-bold text-text decoration-2 underline-offset-3 transition-all group-hover:underline md:text-xl">
            {item.title}
          </h2>

          <p className="line-clamp-2 text-[13px] leading-relaxed text-text-muted md:text-sm">
            {item.intro || "暂无简介"}
          </p>
        </div>
      </a>
    </article>
  );
};
