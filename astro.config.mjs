import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "JobDescriptions.fyi",
      social: {
        github: "https://github.com/eajr/jobdescriptions-fyi",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Tech",
          autogenerate: { directory: "tech" },
        },
      ],
    }),
  ],
});