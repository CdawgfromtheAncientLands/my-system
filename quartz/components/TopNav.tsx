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
    
    // Find top-level folders by looking for index files at the first level
    // e.g. "Act of Will/index" -> slug: "Act-of-Will/index"
    // We want to find unique top-level directory names that have an index file
    const topLevelFolders = allFiles
      .filter((file) => {
        const slugParts = file.slug?.split("/")
        return slugParts?.length === 2 && slugParts[1] === "index"
      })
      .map((file) => {
        const name = file.frontmatter?.title ?? file.slug?.split("/")[0] ?? ""
        return {
          name,
          slug: file.slug as FullSlug,
        }
      })
      .sort((a, b) => a.name.localeCompare(b.name))

    if (topLevelFolders.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "top-nav")}>
        {opts.title && <h3>{opts.title}</h3>}
        <nav class="nav-container">
          <ul class="nav-list">
            {topLevelFolders.map((folder) => (
              <li class="nav-item">
                <a
                  href={resolveRelative(fileData.slug!, folder.slug)}
                  class={classNames("internal", fileData.slug?.startsWith(folder.slug.split("/")[0]) ? "active" : "")}
                >
                  {folder.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }

  TopNav.css = style
  return TopNav
}) satisfies QuartzComponentConstructor
