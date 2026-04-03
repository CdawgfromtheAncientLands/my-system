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
      folderDefaultState: "collapsed",
      filterFn: (node) => {
        // Dynamic Filter: Only show files that are inside the current top-level folder
        const currentPath = window.location.pathname
        // Remove trailing slash if it exists
        const cleanPath = currentPath.replace(/\/$/, "")
        const pathSegments = cleanPath.split("/").filter(s => s.length > 0)
        
        // Handle GitHub Pages base path: /my-system/Act-of-Will/...
        // pathSegments[0] might be "my-system"
        let currentTopLevel = ""
        if (pathSegments.length > 0) {
          if (pathSegments[0] === "my-system") {
            currentTopLevel = pathSegments[1] || ""
          } else {
            currentTopLevel = pathSegments[0] || ""
          }
        }

        // Hide the top-level folders themselves from the tree
        if (node.isFolder && node.depth === 1) return false
        
        // If we are on the home page or an unknown page, show everything except tags
        if (!currentTopLevel || currentTopLevel === "index") {
           return node.slugSegment !== "tags"
        }

        // Filter: node must start with the same top-level slug segment
        // node.slug is a FullSlug (string)
        return node.slug.startsWith(currentTopLevel)
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
      folderDefaultState: "collapsed",
      filterFn: (node) => {
        const currentPath = window.location.pathname
        const cleanPath = currentPath.replace(/\/$/, "")
        const pathSegments = cleanPath.split("/").filter(s => s.length > 0)
        let currentTopLevel = ""
        if (pathSegments.length > 0) {
          if (pathSegments[0] === "my-system") {
            currentTopLevel = pathSegments[1] || ""
          } else {
            currentTopLevel = pathSegments[0] || ""
          }
        }
        if (node.isFolder && node.depth === 1) return false
        if (!currentTopLevel || currentTopLevel === "index") return node.slugSegment !== "tags"
        return node.slug.startsWith(currentTopLevel)
      },
    }),
  ],
  right: [],
}
