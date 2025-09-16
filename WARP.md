# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Essential Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install
```

### Testing
- No test suite is currently configured (`test` script exits with error)
- Consider setting up testing with Vitest for React components

## Project Architecture

This is **jonjoe.io** - a personal portfolio website built as a React/TypeScript SPA using Vite.

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom fonts (Cinzel, JetBrains Mono)
- **Routing**: React Router v6
- **Deployment**: Vercel

### Application Structure

#### Core Concept: Three Personas
The site is built around three thematic personas, each with dedicated sections:
- **Smith** (`/engineering`) - Engineering/technical work
- **Skald** (`/writing`) - Writing and blog content  
- **Warrior** (`/warrior`) - Fitness and personal development

#### Routing Strategy
```
/ → LandingPage (with overlay)
/engineering → redirects to /engineering/cv
/engineering/:tab → SmithPage (CV, projects, etc.)
/writing → redirects to /writing/shorts  
/writing/:tab → SkaldPage (blog content)
/writing/blog/:slug → PostPage (individual posts)
/warrior → WarriorPage (fitness tracking)
```

#### Key Components
- **SiteOverlay**: Large background text visible only on desktop (`/` route)
- **StickyTabs**: Tab navigation system used across persona pages
- **Modal**: Reusable modal component for project details/testimonials
- **Reveal**: Animation wrapper for progressive content disclosure

### Data Architecture

#### Content Management
- **Static JSON**: Engineering projects, work experience, fitness data stored in `/data/` and `/src/data/`
- **Blog Posts**: Markdown files with frontmatter, dynamically imported via Vite glob patterns
- **Post System**: Custom frontmatter parser supports both `slug.md` and `slug/index.md` structures

#### Key Data Files
- `data/engineering.json` - Projects, skills, testimonials, stats
- `data/work_experience.json` - Career timeline
- `src/data/warrior.json` - Fitness metrics and tracking
- `src/content/posts.ts` - Blog post loading and metadata system

### Styling System

#### Tailwind Configuration
- **Breakpoint**: Custom `md: '880px'` for mobile/desktop split
- **Fonts**: Cinzel (serif, headers) + JetBrains Mono (monospace, code)
- **Design**: Dark theme with particle effects and Norse/warrior aesthetic

#### Visual Elements
- Particle systems (`Embers`, `SectionParticles`)
- Interactive components (`BreakableCrate`)
- Custom illustrations (`Longship`)

## Development Notes

### Content Updates
- **Engineering content**: Edit `data/engineering.json` for projects, skills, testimonials
- **Career history**: Update `data/work_experience.json`
- **Blog posts**: Add markdown files to `/src/content/posts/` (supports both flat files and folder structure)
- **Fitness data**: Modify `src/data/warrior.json` for personal metrics

### Adding Blog Posts
Blog posts support two structures:
1. Flat: `/src/content/posts/my-post.md`
2. Nested: `/src/content/posts/my-post/index.md`

Frontmatter format:
```yaml
---
title: "Post Title"
date: "2024-01-01"
summary: "Brief description"
tags: ["tag1", "tag2"]
---
```

### Component Patterns
- Most components are self-contained in `/src/components/`
- Pages use composition of smaller components
- Data flows through props (no global state management)
- Heavy use of Tailwind for styling with custom utilities

### Performance Considerations
- Vite's fast HMR for development
- Posts are eagerly loaded for indexing but lazily loaded for individual views
- Images and assets should be placed in `/public/` for static serving