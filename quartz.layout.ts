import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.MobileOnly(Component.Spacer()),
    Component.TopNav({ title: "Quick Nav" }),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      filterFn: (node) => {
        // Dynamic Filter: Only show files that are inside the current top-level folder
        // We get the current top-level folder from the URL
        const currentPath = window.location.pathname
        const pathSegments = currentPath.split("/").filter(s => s.length > 0)
        
        // If we are on a top-level folder page or deeper (e.g., /Act-of-Will/...)
        // pathSegments[0] will be something like "Act-of-Will"
        const currentTopLevel = pathSegments[0] === "my-system" ? pathSegments[1] : pathSegments[0]

        // Hide the top-level folders themselves from the tree
        if (node.isFolder && node.depth === 1) return false
        
        // If we are on the home page (no top level), show everything? 
        // Or show nothing in explorer? Let's show everything except top-level folders.
        if (!currentTopLevel || currentTopLevel === "index") {
           return node.slugSegment !== "tags"
        }

        // Filter: node must start with the same top-level slug
        return node.fullSlug.startsWith(currentTopLevel)
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      filterFn: (node) => {
        const currentPath = window.location.pathname
        const pathSegments = currentPath.split("/").filter(s => s.length > 0)
        const currentTopLevel = pathSegments[0] === "my-system" ? pathSegments[1] : pathSegments[0]
        if (node.isFolder && node.depth === 1) return false
        if (!currentTopLevel || currentTopLevel === "index") return node.slugSegment !== "tags"
        return node.fullSlug.startsWith(currentTopLevel)
      },
    }),
  ],
  right: [],
}
