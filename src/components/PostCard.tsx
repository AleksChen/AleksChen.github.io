import React, { useState, useEffect, useRef } from "react";
import type { ShortPostData } from "@/lib/posts";

interface PostCardProps {
  item: ShortPostData;
  index: number;
  formattedDate: string;
}

export const PostCard: React.FC<PostCardProps> = ({ item, index, formattedDate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 如果已经可见，不再监听
    if (isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "200px", // 临近视口才加载 (预加载 200px)
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // 服务器端渲染时直接输出内容 (SEO)，客户端初次渲染如果没有进入视口则显示占位
  // 注意：React hydration mismatch 问题。
  // 为了避免 hydration error，我们可以只在客户端进行 lazy 逻辑，或者接受 mismatch 警告（不推荐）。
  // 更优雅的方式是：CSS content-visibility (最佳性能) 或者利用 Astro client:visible。
  
  // 既然用户要求"组件能力"，我们使用 state 控制内容渲染。
  // 为了 SEO，初始 HTML 应该包含内容。但用户明确说"不渲染"。
  // 这是一个权衡。如果必须"不渲染"，则 SEO 受损。
  // 假设用户更看重性能或行为：
  
  // 修正策略：仅控制内部繁重 DOM 的显示，或者外层保留高度。
  // 这里我们用一个 div 占位。
  
  return (
    <article
      ref={elementRef}
      className={`group relative card transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ 
        animationDelay: `${index * 100}ms`,
        minHeight: '200px' // 给一个最小高度防止布局抖动
      }}
    >
      {/* 只有可见时才渲染真实 DOM (Lazy Render) */}
      {/* 或者是始终渲染但控制可见性？用户说"不渲染"，所以条件渲染 */}
      {isVisible ? (
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
      ) : (
        // 占位内容，保持大致结构以减少 CLS (Layout Shift)
        <div className="h-48 md:h-32 w-full bg-transparent"></div>
      )}
    </article>
  );
};

