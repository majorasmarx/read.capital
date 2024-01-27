import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://read.capital",
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: ["remark-math", "remark-toc"],
    rehypePlugins: ["rehype-katex"],
  },
});
