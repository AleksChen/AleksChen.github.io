import React from "react";

interface Book {
  title: string;
  author?: string;
  cover?: string;
  status: "reading" | "completed" | "wishlist";
  rating?: number;
  startDate?: Date;
  finishDate?: Date;
  notes?: string;
  pages?: number;
}

interface BookCardProps {
  book: Book;
  slug: string;
}

const statusConfig = {
  reading: { label: "在读", color: "bg-blue-500" },
  completed: { label: "已读", color: "bg-green-500" },
  wishlist: { label: "想读", color: "bg-yellow-500" },
};

export const BookCard: React.FC<BookCardProps> = ({ book, slug }) => {
  const statusInfo = statusConfig[book.status];

  return (
    <a
      href={`/post/${slug}`}
      className="group card h-full flex flex-col animate-fade-in cursor-pointer hover:shadow-lg transition-all duration-300 no-underline"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg border-2 border-text mb-4 bg-gradient-to-br from-primary/5 to-transparent">
        {book.cover ? (
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="i-ri:book-line w-16 h-16 text-text-muted transition-transform duration-300 group-hover:scale-110" />
          </div>
        )}
        <div
          className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold text-white ${statusInfo.color} shadow-lg backdrop-blur-sm`}
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          {statusInfo.label}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white text-sm font-medium" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            点击查看详情
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h3
          className="text-lg font-bold text-text mb-1 line-clamp-2 group-hover:text-primary transition-colors duration-200"
          style={{ fontFamily: "'Caveat', cursive", fontSize: "1.5rem" }}
        >
          {book.title}
        </h3>
        <p className="text-sm text-text-muted mb-3" style={{ fontFamily: "'Quicksand', sans-serif" }}>
          {book.author}
        </p>

        {book.rating && (
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 transition-transform duration-200 ${
                  i < book.rating!
                    ? "i-ri:star-fill text-yellow-500 group-hover:scale-110"
                    : "i-ri:star-line text-text-muted"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
        )}

        {book.notes && (
          <p className="text-sm text-text-muted line-clamp-3 mt-auto mb-3" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            {book.notes}
          </p>
        )}

        <div className="mt-auto pt-2 border-t border-border/50 flex items-center justify-between text-xs text-text-muted" style={{ fontFamily: "'Quicksand', sans-serif" }}>
          {book.finishDate && (
            <div className="flex items-center gap-1">
              <div className="i-ri:calendar-line" />
              {new Date(book.finishDate).toLocaleDateString("zh-CN")}
            </div>
          )}
          {book.pages && (
            <div className="flex items-center gap-1">
              <div className="i-ri:file-text-line" />
              {book.pages}页
            </div>
          )}
        </div>
      </div>
    </a>
  );
};
