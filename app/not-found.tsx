import styles from './not-found.module.css'
import { getPageFromCache } from '@/services/page'
import { type Widget, contentRenderer } from '@/utils/contentRenderer'
import CachePurger from '@/components/CachePurger'

interface Props {
  searchParams: {
    preview?: any
  }
}

const slug = '404'

const customizePropsConfig = {
  hero: (widget: Widget) => ({
    form: {
      button: {
        text: widget?.form?.button?.text,
        href: widget?.form?.button?.href,
      },
    },
    images: {
      width: 356,
    },
    classes: {
      title: styles['hero-title'],
      'form-container': styles['hero-form-container'],
      'section-image': styles['hero-section-image'],
      'form-text': styles['form-text'],
      'btn-classes': styles['btn-classes'],
      image: styles.image,
    },
  })
}

export default async function NotFoundPage({ searchParams }: Props): Promise<JSX.Element> {
  const preview = Boolean(searchParams?.preview)
  const page = await getPageFromCache(slug, preview)

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {
          contentRenderer({
            widgets: page?.widget,
            customizeConfig: customizePropsConfig,
          })
        }
      </div>
      <CachePurger tag={`page-${slug}`} />
    </div>
  )
}
