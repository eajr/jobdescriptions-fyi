import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://jobdescriptions.fyi",
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
            { label: "Starter Guide", link: "/guides/starter/" },
          ],
        },
        {
          label: "Engineering",
          items: [
            {
              label: "Software Engineers",
              collapsed: true,
              autogenerate: { directory: "eng-software-engineers" },
            },
            {
              label: "Management",
              collapsed: true,
              autogenerate: { directory: "eng-management" },
            },
            {
              label: "Other",
              collapsed: true,
              autogenerate: { directory: "eng-other" },
            },
          ],
        },
        {
          label: "Product",
          collapsed: true,
          autogenerate: { directory: "product" },
        },
      ],
    }),
  ],
});
