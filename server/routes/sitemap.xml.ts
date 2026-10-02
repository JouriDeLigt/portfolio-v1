import { featuredProjects } from '#shared/data/projects'

const BASE_URL = 'https://jourideligt.dev'

export default defineEventHandler((event) => {
  const paths = ['/', ...featuredProjects.map(project => `/project/${project.slug}`)]

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(path => `  <url><loc>${BASE_URL}${path}</loc></url>`).join('\n')}
</urlset>
`
})
