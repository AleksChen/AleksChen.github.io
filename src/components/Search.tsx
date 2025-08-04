import * as React from "jsx-dom";

export const mount = (
  selector: string,
  placeholder = "搜索文章...",
  className = ""
) => {
  const container = document.querySelector(selector);
  if (!container) return;

  // 防抖函数
  let searchTimeout: NodeJS.Timeout;

  const handleSearch = (e: Event) => {
    const searchTerm = (e.target as HTMLInputElement).value
      .toLowerCase()
      .trim();

    // 清除之前的定时器
    clearTimeout(searchTimeout);

    // 设置新的定时器，300ms后执行搜索
    searchTimeout = setTimeout(() => {
      const allPosts = Array.from(document.querySelectorAll(".post-item"));

      allPosts.forEach((post) => {
        const title =
          post.querySelector(".page-title")?.textContent?.toLowerCase() || "";
        const intro = post.querySelector("p")?.textContent?.toLowerCase() || "";

        const isMatch =
          title.includes(searchTerm) || intro.includes(searchTerm);

        if (searchTerm === "" || isMatch) {
          (post as HTMLElement).style.display = "block";
        } else {
          (post as HTMLElement).style.display = "none";
        }
      });
    }, 300);
  };

  const handleClear = () => {
    const searchContainer = container.querySelector(
      ".search-container"
    ) as HTMLElement;
    const input = container.querySelector("input") as HTMLInputElement;
    if (input) {
      input.value = "";
      input.dispatchEvent(new Event("input", { bubbles: true }));
      searchContainer.classList.remove("expanded");
      input.blur();
    }
  };

  const handleToggleSearch = () => {
    const searchContainer = container.querySelector(
      ".search-container"
    ) as HTMLElement;
    const input = container.querySelector("input") as HTMLInputElement;

    if (searchContainer.classList.contains("expanded")) {
      // 收起搜索框
      searchContainer.classList.remove("expanded");
      input.blur();
      // 清空搜索内容
      input.value = "";
      input.dispatchEvent(new Event("input", { bubbles: true }));
    } else {
      // 展开搜索框
      searchContainer.classList.add("expanded");
      input.focus();
    }
  };

  const searchContainer = (
    <div class={`w-full max-w-500px mx-auto ${className}`}>
      <div class="search-container relative flex items-center justify-center bg-gray-50 dark:bg-gray-800 border-2 border-transparent rounded-xl transition-all duration-300 shadow-sm hover:shadow-md focus-within:(border-primary bg-white dark:bg-gray-900 shadow-lg -translate-y-0.5) w-6 h-6 cursor-pointer">
        <div
          class="flex items-center justify-center text-gray-400 transition-colors duration-200 focus-within:text-primary flex-shrink-0 absolute hover:scale-120 transition-transform"
          onClick={handleToggleSearch}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          class="flex-1 border-none outline-none bg-transparent text-sm font-medium text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 opacity-0 w-0 transition-all duration-300"
          onInput={handleSearch}
        />
        <button
          class="flex items-center justify-center bg-gray-200 dark:bg-gray-700 border-none rounded-full w-4 h-4 cursor-pointer transition-all duration-200 text-gray-500 hover:(bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 scale-110) active:scale-95 ml-2 flex-shrink-0 opacity-0 pointer-events-none"
          onClick={handleClear}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );

  // 添加展开状态的样式
  const style = document.createElement("style");
  style.textContent = `
    .search-container {
      transform-origin: center !important;
      margin: 0 auto !important;
    }
    .search-container:not(.expanded) {
      width: 24px !important;
      justify-content: center !important;
    }
    .search-container.expanded {
      width: 100% !important;
      padding-left: 4px !important;
      padding-right: 4px !important;
      justify-content: flex-start !important;
    }
    .search-container.expanded input {
      opacity: 1 !important;
      width: 100% !important;
      margin-left: 4px;
    }
    .search-container.expanded button {
      opacity: 1 !important;
      pointer-events: auto !important;
    }
    .search-container.expanded > div:first-child {
      position: static !important;
    }
  `;
  document.head.appendChild(style);

  // 优化清除按钮的显示逻辑
  const input = searchContainer.querySelector("input") as HTMLInputElement;
  const clearButton = searchContainer.querySelector(
    "button"
  ) as HTMLButtonElement;

  input.addEventListener("input", () => {
    if (input.value.length > 0) {
      clearButton.classList.remove("opacity-0", "pointer-events-none");
      clearButton.classList.add("opacity-100", "pointer-events-auto");
    } else {
      clearButton.classList.add("opacity-0", "pointer-events-none");
      clearButton.classList.remove("opacity-100", "pointer-events-auto");
    }
  });

  container.replaceChildren(searchContainer);
};
