import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "My System",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "cdawgfromtheancientlands.github.io/my-system",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Cinzel",
        body: "EB Garamond",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#2e1a1a",         // Deep brownish-red background
          lightgray: "#4a2c2c",     // Slightly lighter for borders/dividers
          gray: "#8e6e6e",          // Graph links/heavier borders
          darkgray: "#f2e9e9",      // Body text (Off-white)
          dark: "#ffffff",          // Header text and icons (Pure white)
          secondary: "#d4af37",     // Gold/link color
          tertiary: "#cc7052",      // Terracotta hover state
          highlight: "rgba(212, 175, 55, 0.15)", // Gold highlight
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#1e1111",         // Even deeper brown-red for dark mode
          lightgray: "#3d2222",
          gray: "#7a5a5a",
          darkgray: "#e5d5d5",
          dark: "#ffffff",
          secondary: "#e0c15e",     // Brighter gold for dark mode
          tertiary: "#ff8c69",
          highlight: "rgba(224, 193, 94, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({ maxDepth: 6 }),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
