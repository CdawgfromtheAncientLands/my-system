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
      { name: "Home", slug: "index" as FullSlug, icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
      ...topLevelFolders.map(f => ({
        ...f,
        icon: f.name.toLowerCase().includes("will")
          ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sword"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/></svg>
          : f.name.toLowerCase().includes("archive")
          ? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-library"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>
          : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mountain-path"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/><path d="M12 11c-0.5 2-2 4-1 6s-2 4-1 7" opacity="0.8" stroke-dasharray="2 1"/></svg>
      }))
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
                    <span class="nav-icon">{folder.icon}</span>
                    <span class="nav-text">{folder.name}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div class="curlicue-divider">
          <svg viewBox="0 0 100 20" preserveAspectRatio="none">
             <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.5"/>
             <path d="M0,12 Q25,2 50,12 T100,12" fill="none" stroke="currentColor" stroke-width="0.2" opacity="0.3"/>
          </svg>
        </div>
      </div>
    )
  }

  TopNav.css = style
  return TopNav
}) satisfies QuartzComponentConstructor
