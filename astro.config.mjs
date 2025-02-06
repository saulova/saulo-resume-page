// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";
import { mermaid } from "./src/plugins/mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://sauloalvarenga.dev.br",
  base: "",
  integrations: [
    tailwind(),
    sitemap(),
    mdx({
      syntaxHighlight: false,
      remarkPlugins: [mermaid],
      rehypePlugins: [
        /**
         * Adds ids to headings
         */
        rehypeSlug,
        [
          /**
           * Enhances code blocks with syntax highlighting, line numbers,
           * titles, and allows highlighting specific lines and words
           */
          rehypePrettyCode,
          {
            theme: "github-dark",
          },
        ],
      ],
    }),
    react(),
  ],
});
