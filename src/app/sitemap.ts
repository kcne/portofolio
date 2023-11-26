import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portofolio-kcne.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://portofolio-kcne.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://portofolio-kcne.vercel.app/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
        url: 'https://portofolio-kcne.vercel.app/stack',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.75,
      },
      {
        url: 'https://portofolio-kcne.vercel.app/contact',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.1,
      },
  ]
}