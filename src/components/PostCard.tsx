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
      className="group relative card transition-all duration-300 hover:-translate-y-1"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <a href={`/post/${item.slug}`} className="block">
        <div className="flex flex-col md:flex-row gap-4 md:items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 text-xs text-text-muted mb-2">
              <span className="flex items-center gap-1">
                <div className="i-ri:calendar-line" />
                {formattedDate}
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-text mb-3 group-hover:underline decoration-2 underline-offset-4 transition-colors line-clamp-2 hover:text-[var(--color-primary)]">
              {item.title}
            </h2>

            <p className="text-text-muted text-sm md:text-base line-clamp-3 mb-4 leading-relaxed">
              {item.intro || "暂无简介"}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-bold border border-text text-text bg-transparent shadow-[2px_2px_0_0_var(--color-text)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {item.cover && (
            <div className="flex-shrink-0 w-full md:w-32 h-32 md:h-24 rounded-sm overflow-hidden border-2 border-text shadow-[4px_4px_0_0_var(--color-text)]">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={item.cover.src}
                alt={item.cover.alt || item.title}
                loading="lazy"
              />
            </div>
          )}
        </div>
      </a>
    </article>
  );
};
