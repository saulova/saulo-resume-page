import "@/styles/global.css";
import type { CollectionEntry } from "astro:content";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import AllPosts from "@/components/AllPosts.astro";

type Props = {
  tags: string[];
  data: CollectionEntry<"blog">[];
  children: any;
};

export default function Blog({ data, tags, children }: Props) {
  const [filter, setFilter] = useState<Set<string>>(new Set());
  const [posts, setPosts] = useState<CollectionEntry<"blog">[]>([]);

  useEffect(() => {
    setPosts(
      data.filter((entry) =>
        Array.from(filter).every((value) =>
          entry.data.tags.some(
            (tag: string) => tag.toLowerCase() === String(value).toLowerCase()
          )
        )
      )
    );
  }, [filter, data]);

  function toggleTag(tag: string) {
    setFilter(
      (prev) =>
        new Set(
          prev.has(tag)
            ? Array.from(prev).filter((t) => t !== tag)
            : [...Array.from(prev), tag]
        )
    );
  }

  return (
    <div className="flex flex-col px-5 space-y-2">
      <div className="col-span-3 sm:col-span-1">
        <div className="sticky top-24">
          <div className="text-sm font-semibold uppercase mb-2 text-black dark:text-white">
            FILTRAR
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 sm:flex-col gap-1.5 mb-1">
            {tags.map((tag, index) => (
              <li key={tag + index}>
                <button
                  onClick={() => toggleTag(tag)}
                  className={cn(
                    "w-full px-2 py-1 rounded",
                    "whitespace-nowrap overflow-hidden overflow-ellipsis",
                    "flex gap-2 items-center",
                    "bg-black/5 dark:bg-white/10",
                    "hover:bg-black/10 hover:dark:bg-white/15",
                    "transition-colors duration-300 ease-in-out",
                    filter.has(tag) && "text-black dark:text-white"
                  )}
                >
                  <svg
                    className={cn(
                      "size-5 fill-black/50 dark:fill-white/50",
                      "transition-colors duration-300 ease-in-out",
                      filter.has(tag) && "fill-black dark:fill-white"
                    )}
                  >
                    <use
                      href={`/ui.svg#square`}
                      className={cn(!filter.has(tag) ? "block" : "hidden")}
                    />
                    <use
                      href={`/ui.svg#square-check`}
                      className={cn(filter.has(tag) ? "block" : "hidden")}
                    />
                  </svg>
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-3 sm:col-span-2">
        <div className="flex flex-col">
          <div className="text-sm uppercase mb-2">
            MOSTRANDO {posts.length} DE {data.length} POSTS
          </div>
          <ul className="flex flex-col gap-3 mb-5">{children}</ul>
        </div>
      </div>
    </div>
  );
}
