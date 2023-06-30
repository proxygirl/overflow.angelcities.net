import { defineConfig } from "tinacms";

// Import schemas from separate files
import { post } from "./schema/post";
import { stack } from "./schema/stack";
import { about } from "./schema/about";
import { site } from "./schema/site";
import { theme } from "./schema/theme";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [post, stack, about, site, theme],
  },
});
