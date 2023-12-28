import { MetadataRoute } from 'next'

export default function robots (): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/contact/'
    },
    sitemap: 'https://portofolio-kcne.vercel.ap/sitemap.xml'
  }
}
