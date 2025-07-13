import { type MetadataRoute } from 'next'
import { fetchPostListForSitemap } from '@/services/post'

const appHost: string = process.env.APP_HOST ?? ''

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()

  const paths = [
    '/products/credentialing',
    '/products/licensing',
    '/products/compliance-monitoring',
    '/products/payer-enrollment',
    '/products/roster-management',
    '/clients/health-plans',
    '/clients/digital-health',
    '/clients/health-systems',
    '/company',
    '/company/news',
    '/company/careers',
    '/resources/blog',
    '/request-a-demo',
    '/privacy',
    '/terms-of-service'
  ]

  const urls = [
    {
      url: appHost,
      lastModified
    },
    ...paths.map((urlpath) => ({
      url: `${appHost}${urlpath}`,
      lastModified
    }))
  ]

  const posts = await fetchPostListForSitemap()

  posts.forEach((post) => {
    urls.push({
      url: `${appHost}/${post.postType === 'news' ? 'company' : 'resources'}/${post.postType}/${post.slug}`,
      lastModified
    })
  })

  return urls
}
