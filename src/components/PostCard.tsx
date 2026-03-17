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
      className="home-post-card group relative overflow-hidden rounded-xl border-2 border-text bg-card shadow-[4px_4px_0_0_var(--color-text)] transition-shadow duration-300 hover:shadow-[6px_6px_0_0_var(--color-shadow)]"
      style={{
        transitionDelay: `${Math.min(index, 8) * 70}ms`,
      }}
    >
      <a href={`/post/${item.slug}`} className="block">
        <div className="relative w-full overflow-hidden border-b-2 border-text bg-bg-secondary aspect-[16/8.2]">
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
        </div>

        <div className="flex flex-col gap-3 p-5 md:p-6">
          <div className="flex items-center gap-3 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-secondary px-2.5 py-1">
              <div className="i-ri:calendar-line" />
              {formattedDate}
            </span>
          </div>

          <h2 className="line-clamp-2 text-xl font-bold text-text decoration-2 underline-offset-4 transition-all group-hover:underline md:text-2xl">
            {item.title}
          </h2>

          <p className="line-clamp-3 text-sm leading-relaxed text-text-muted md:text-base">
            {item.intro || "暂无简介"}
          </p>

          <div className="mt-1 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-text/40 bg-transparent px-2.5 py-1 text-xs font-medium text-text"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
};
