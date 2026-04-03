import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug } from "../util/path"
import { classNames } from "../util/lang"
// @ts-ignore
import style from "./styles/subNav.scss"

interface Options {
  title?: string
}

const defaultOptions: Options = {}

export default ((userOpts?: Partial<Options>) => {
  const SubNav: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }
    const basePath = cfg.baseUrl ? new URL(`https://${cfg.baseUrl}`).pathname.replace(/\/$/, "") : ""
    
    // 1. Determine current top-level folder from current page
    const currentPath = fileData.slug || ""
    const pathSegments = currentPath.split("/")
    const currentTopLevel = pathSegments[0]

    // If we are on the home page, don't show sub-nav
    if (!currentTopLevel || currentTopLevel === "index") {
      return null
    }

    // 2. Find immediate child folders of the current top-level
    // We look for files that are in currentTopLevel/* and are index files
    const subFolders = allFiles
      .filter((file) => {
        const slugParts = file.slug?.split("/")
        // Must be exactly 3 parts: [top-level, sub-folder, index]
        return slugParts?.length === 3 && slugParts[0] === currentTopLevel && slugParts[2] === "index"
      })
      .map((file) => {
        const slugParts = file.slug?.split("/")
        const name = file.frontmatter?.title ?? slugParts![1].replace(/-/g, " ")
        const folderSlug = slugParts!.slice(0, 2).join("/")
        return {
          name,
          slug: file.slug as FullSlug,
          href: `${basePath}/${folderSlug}`,
        }
      })
      .sort((a, b) => a.name.localeCompare(b.name))

    if (subFolders.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "sub-nav")}>
        <nav class="nav-container">
          <ul class="nav-list">
            {subFolders.map((folder) => {
              const isActive = fileData.slug?.startsWith(folder.slug.split("/").slice(0, 2).join("/"))
              
              return (
                <li class="nav-item">
                  <a
                    href={folder.href}
                    class={classNames("internal", isActive ? "active" : "")}
                  >
                    {folder.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    )
  }

  SubNav.css = style
  return SubNav
}) satisfies QuartzComponentConstructor
