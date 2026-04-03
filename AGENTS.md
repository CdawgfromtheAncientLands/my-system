# Agent Documentation Map & Tips for Quartz

This document provides a guide for AI agents (like Gemini) to understand the Quartz codebase and its documentation.

## Project Overview

Quartz is a fast, battery-included static site generator for digital gardens, built with TypeScript. It transforms Markdown content into a structured website using a pipeline of plugins.

## Key Configuration Files

- **`quartz.config.ts`**: The central configuration file.
    - `configuration`: General settings (site title, base URL, theme/colors).
    - `plugins`: Defines the transformation pipeline (Transformers, Filters, Emitters).
- **`quartz.layout.ts`**: Defines the visual layout of the site.
    - `sharedPageComponents`: Components common to all pages (head, footer).
    - `defaultContentPageLayout`: Layout for individual notes.
    - `defaultListPageLayout`: Layout for list pages (e.g., tag pages, folder pages).

## Documentation Map (`quartz/docs/`)

### Core Concepts
- `index.md`: Getting started guide.
- `configuration.md`: Detailed guide for `quartz.config.ts`.
- `layout.md`: Overview of the layout system.
- `layout-components.md`: Documentation for available UI components (Explorer, Backlinks, etc.).
- `authoring content.md`: Markdown syntax and Quartz-specific features (wikilinks, callouts).

### Features (`quartz/docs/features/`)
- `backlinks.md`: Automatic backlink generation.
- `explorer.md`: The file explorer/navigation component.
- `graph view.md`: Interactive knowledge graph.
- `full-text search.md`: Client-side search implementation.
- `popover previews.md`: Hover previews for links.
- `darkmode.md`: Dark mode toggle and configuration.

### Plugins (`quartz/docs/plugins/`)
Detailed documentation for individual plugins used in `transformers`, `filters`, and `emitters`.
- `ObsidianFlavoredMarkdown.md`: Handling wikilinks and Obsidian-style syntax.
- `SyntaxHighlighting.md`: Code block highlighting.
- `TableOfContents.md`: TOC generation.

## Tips for Agents

1. **Surgical Configuration Updates**:
   - When modifying `quartz.config.ts`, always refer to `docs/configuration.md` to ensure correct property names and types.
   - Use `grep_search` to find where specific plugins or components are currently defined before making changes.

2. **UI Modifications**:
   - Layout changes in `quartz.layout.ts` involve reordering or adding components to the `left`, `right`, or `beforeBody`/`afterBody` arrays.
   - Refer to `docs/layout-components.md` for the list of built-in components.

3. **Content Management**:
   - Markdown files live in `content/`.
   - Quartz supports `[[wikilinks]]` and standard Markdown `[links](url)`.
   - Frontmatter is important for metadata like titles, tags, and dates.

4. **Verification**:
   - Run `npx quartz build` to verify the build process.
   - Check `package.json` for project-specific scripts like `npm run check` (type checking and linting).

5. **Troubleshooting**:
   - If a build fails after a configuration change, check the terminal output for TypeScript errors, as `quartz.config.ts` is type-checked.
   - Consult `docs/plugins/` if a specific Markdown feature isn't rendering as expected; it might require a specific transformer.
