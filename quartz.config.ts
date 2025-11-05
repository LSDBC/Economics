import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { ProofEnvironment } from "./quartz/plugins/transformers/ProofEnvironment.js"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Economics Notebook",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: { provider: 'google', tagId: 'G-26XTKW2T2L' },
    locale: "en-US",
    baseUrl: "https://notebook.bianchichignoli.it",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Ubuntu", // "Schibsted Grotesk",
        body: "Public Sans", // "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#242424",
          dark: "#000000",
          secondary: "#377a66",     // Your chosen red
          tertiary: "#5ea682",      // A deep yellow for hover/visited
          highlight: "rgba(140, 222, 181, 0.15)", // A faint red highlight
          textHighlight: "#fff3a388",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#222222",
          gray: "#4e4e4e",
          darkgray: "#e0e0e0",
          dark: "#ffffff",
          secondary: "#BB86FC",     // A bright, standard purple
          tertiary: "#D7B3FF",      // A lighter purple for hover/visited
          highlight: "rgba(187, 134, 252, 0.15)", // A faint purple highlight
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      ProofEnvironment(),
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
      Plugin.TableOfContents(),
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
