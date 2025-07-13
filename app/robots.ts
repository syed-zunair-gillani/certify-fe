import { type MetadataRoute } from 'next'

const appHost = process.env.APP_HOST
const appEnv = process.env.APP_ENV

export default function robots(): MetadataRoute.Robots {
  return (appEnv !== 'production' ? {
    rules: {
      userAgent: '*',
      disallow: '/',
    }
  } : {
    rules : {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${appHost}/sitemap.xml`
  })
}
