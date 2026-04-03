import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"
import { classNames } from "../util/lang"
// @ts-ignore
import style from "./styles/topNav.scss"

interface Options {
  title?: string
}

const defaultOptions: Options = {}

export default ((userOpts?: Partial<Options>) => {
  const TopNav: QuartzComponent = ({
    allFiles,
    fileData,
    displayClass,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions, ...userOpts }
    
    // Find top-level folders by looking at the first segment of all slugs
    const folders = new Map<string, FullSlug>()
    allFiles.forEach((file) => {
      const parts = file.slug?.split("/")
      if (parts && parts.length > 1 && parts[0] !== "tags") {
        const folderSlug = parts[0]
        if (!folders.has(folderSlug)) {
          // Store the folder slug. Quartz will automatically route this to a folder page.
          folders.set(folderSlug, folderSlug as FullSlug)
        }
      }
    })

    const topLevelFolders = Array.from(folders.entries())
      .map(([slug, fullSlug]) => {
        const indexFile = allFiles.find(f => f.slug === `${slug}/index`)
        const name = indexFile?.frontmatter?.title ?? slug.replace(/-/g, " ")
        return { name, slug: fullSlug }
      })
      .sort((a, b) => a.name.localeCompare(b.name))

    // Add Home link
    const navItems = [
      { name: "Home", slug: "index" as FullSlug },
      ...topLevelFolders
    ]

    return (
      <div class={classNames(displayClass, "top-nav")}>
        <nav class="nav-container">
          <ul class="nav-list">
            {navItems.map((folder) => {
              const isActive = folder.slug === "index" 
                ? (fileData.slug === "index")
                : fileData.slug?.startsWith(folder.slug.split("/")[0])
              
              return (
                <li class="nav-item">
                  <a
                    href={resolveRelative(fileData.slug!, folder.slug)}
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

  TopNav.css = style
  return TopNav
}) satisfies QuartzComponentConstructor
