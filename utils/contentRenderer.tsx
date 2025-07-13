import { type JSX, type FC } from 'react'
import type { Image as SanityImage } from '@sanity/types'
import omit from 'lodash/omit'

import CopySection from '@/app/home/components/CopySection'
import OurClientsSection from '@/app/home/components/OurClients'
import ProductsSection from '@/app/home/components/ProductsSection'
import BannerModule from '@/components/products/BannerModule'
import HeroSection from '@/components/HeroSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import TransformSection from '@/components/TransformSection'
import ProductHeroSection from '@/components/products/HeroSection'
import ProductDrawer from '@/components/products/DrawerModule'
import PieChartModuleSection from '@/components/Clients/PieChartModuleSection'
import ScrollCarousel from '@/components/ScrollCarousel'
import VisualOnlyModuleSection from '@/components/VisualOnlyModuleSection'
import AdvantageVisualOnlyModuleSection from '@/components/Company/AdvantageVisualOnlyModuleSection'
import WaveModule from '@/components/products/WaveModule'
import PayerResources from '@/components/PayerResources'
import LargeDrawerModuleSection from '@/components/Clients/LargeDrawerModuleSection'
import { urlForImage } from '@/services/helper'
import CompanyLargeDrawerModuleSection from '@/components/Company/DrawerModuleSection'
import CompanyBottomContentSection from '@/components/Company/BottomContent'
import CompanyHistorySection from '@/components/Company/HistorySection'
import CompanyLeaderShipList from '@/components/Company/LeadershipDrawerModuleSection'
import { type Leadership } from '@/services/leadership'
import ArticleSection from '@/components/ArticleSection'
import AccreditedModule from '@/components/products/AccreditedModule'
import RoleDrawerModuleSection from '@/components/Company/RoleDrawerModuleSection'

export interface Widget {
  _type: string
  _key: string
  [key: string]: any
}

type CustomizeConfig = Record<string, (args: any) => any>

interface GetPropsOptions {
  widget: Widget
  customProps: Record<string, any>
}

/**
 * ============================   START  ==================================
 * The generation methods for generating properties for each type of widget
 */

/** HeroSection */
const generateHeroSectionProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  const { form, images, ...rest } = customProps
  return {
    form: {
      title: widget.form?.title,
      body: widget.form?.body,
      button: widget.form?.button,
      bgColor: widget.form?.bgColor?.hex,
      ...form,
    },
    images: {
      src: urlForImage(widget.image as SanityImage)?.url(),
      alt: widget.image?.alt,
      ...images,
    },
    bgColor: widget.bgColor?.hex,
    ...rest,
  }
}

/** CopySection */
const generateCopySectionProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    title: widget.title,
    body: widget.body,
    bgColor: widget.bgColor?.hex,
    ...customProps,
  }
}

/** OurClientsSection */
const getOurClientsSectionProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, string> => {
  return {
    data: widget.items,
    title: widget.title,
    bgColor: widget.bgColor?.hex,
    ...customProps,
  }
}

/** ProductsSection */
const getProductsSectionProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, string> => {
  return {
    product: {
      ...widget.product,
      items: widget.product.items.map((item: any) => ({
        title: item.title,
        desc: item.desc,
        href: item.href,
        image: {
          src: urlForImage(item.image as SanityImage)?.url(),
          alt: item.image?.alt,
        },
        bgColor: item.bgColor?.hex,
      })),
    },
    certification: {
      ...widget.certification,
      items: widget.certification.items.map((item: any) => ({
        title: item.title,
        image: {
          src: urlForImage(item.image as SanityImage)?.url(),
          alt: item.image?.alt,
        },
        bgColor: item.bgColor?.hex,
      })),
    },
    button: widget.button,
    ...customProps,
  }
}

/** TestimonialsCarousel */
const getTestimonialsCarouselProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    data: widget.items?.map((item: any) => {
      item.maxWidth = 1100
      return item
    }),
    bgColor: widget.bgColor?.hex,
    ...customProps,
  }
}

/** TransformSection */
const getTransformSectionProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  const { images, ...rest } = customProps
  return {
    ...customProps,
    title: widget?.title,
    body: widget?.body,
    images: {
      src: urlForImage(widget?.image as SanityImage)?.url(),
      alt: widget?.image?.alt,
      ...images,
    },
    button: widget.button,
    ...rest,
  }
}

/** PieChartModuleSection */
const getPieChartModuleSectionProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    data: {
      header: widget?.header,
      pieChartModule: {
        content: widget?.pieChartModule?.content,
        bottomContent: widget?.pieChartModule?.bottomContent,
      },
      images: {
        src: urlForImage(widget?.image as SanityImage)?.url(),
        alt: widget?.image?.alt,
      },
    },
    ...customProps,
  }
}

/** ScrollCarousel */
const getScrollCarouselProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  const items = (widget?.images as boolean) ? widget?.images : []
  return {
    imageItem: items.map((item: any) => {
      return {
        src: urlForImage(item.image as SanityImage)?.url(),
        alt: item.image?.alt,
      }
    }),
    bgColor: widget.bgColor?.hex,
    ...customProps,
  }
}

/** VisualOnlyModuleSection */
const getVisualOnlyModuleSectionProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  const { images, ...rest } = customProps
  return {
    data: {
      header: widget?.header,
      body: widget?.body,
      images: {
        src: urlForImage(widget.image as SanityImage)?.url(),
        alt: widget.image?.alt,
        ...images,
      },
      visualHighlights: widget.bottomComponent?.visualHighlights,
      button: widget.bottomComponent?.button,
      bgColor: widget.bgColor?.hex,
    },

    ...rest,
  }
}

/** getProductHeroSectionProps */
const getProductHeroSectionProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    imageURL: urlForImage(widget.image as SanityImage)?.url(),
    imageALT: widget.image?.alt,
    ...customProps,
    ...omit(widget, ['image']),
    bgColor: widget.bgColor.hex,
  }
}

/** getProductDrawerProps */
const getProductDrawerProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    title: widget.title,
    items: widget.items,
    ...customProps,
  }
}

/** getAdvantageVisualOnlyModuleSectionProps */
const getAdvantageVisualOnlyModuleSectionProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    data: {
      header: widget.header,
      body: widget.body,
      images: widget.images.map((image: any) => {
        return {
          src: urlForImage(image.image as SanityImage)?.url(),
          alt: image.image?.alt,
          title: image.title,
          description: image.description,
          width: 46,
          height: 46,
        }
      }),
    },
    bottomComponent: widget.bottomComponent,
    ...customProps,
  }
}

const getLargeCompanyDrawerModuleSectionProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    data: widget,
    ...customProps,
  }
}

/** BannerModule */
const getBannerModuleProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    title: widget.title,
    description: widget.description,
    bgColor: widget?.bgColor?.hex,
    button: widget.button,
    bottomButton: Boolean(widget.button?.text),
    ...customProps,
  }
}

const getCompanyBottomContentSectionProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    data: widget.content,
    bgColor: widget.bgColor?.hex,
    ...customProps,
  }
}

const getCompanyHistorySectionProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    ...widget,
    ...customProps,
  }
}

const getCompanyLeaderShipListProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  widget.leaderships.forEach((leadership: Leadership) => {
    leadership.avatarUrl = urlForImage(leadership.avatar)?.url()
  })
  return {
    data: widget.leaderships,
    title: widget.title,
    ...customProps,
  }
}

/** WaveModule */
const getWaveModuleProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    title: widget.title,
    data: widget.data.map((item: any, i: number) => {
      let width = 1
      let height = 1
      if (i === 0) {
        width = 326
        height = 196
      }
      if (i === 1) {
        width = 362
        height = 281
      }
      if (i === 2) {
        width = 362
        height = 223
      }
      if (i === 3) {
        width = 326
        height = 257
      }
      if (i === 4) {
        width = 326
        height = 376
      }

      return {
        src: urlForImage(item.image as SanityImage)?.url(),
        alt: item.image?.alt,
        width,
        height,
      }
    }),
    ...customProps,
  }
}

/** PayerResources */
const getPayerResourcesProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    data: (widget.posts as boolean) ? widget.posts : [],
    headerData: {
      header: widget.header,
      button: widget.button,
    },
    ...customProps,
  }
}

/** LargeDrawerModule */
const getLargeDrawerModuleProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    data: widget,
    isQuestionModule: widget?.collapseType === 'small',
    openSize:
      widget?.openModuleCount !== undefined
        ? widget?.openModuleCount
        : widget?.content?.length,
    ...customProps,
  }
}

/** HomePayerResources */
const getHomePayerResourcesProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    title: widget.header,
    text: widget.button?.text,
    href: widget.button?.href,
    initArticles: widget.articlePosts,
    ...customProps,
  }
}

/** AccreditedModule */
const getAccreditedModuleProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    title: widget.title,
    description: widget.description,
    image: {
      src: urlForImage(widget.image as SanityImage)?.url(),
      alt: widget.image?.alt,
    },
    bgColor: widget.bgColor?.hex,
    ...customProps,
  }
}

/** RoleDrawerModuleSection */
const getRoleDrawerModuleSectionProps = ({
  widget,
  customProps = {},
}: GetPropsOptions): Record<string, any> => {
  return {
    data: {
      title: widget.title,
      description: widget.description,
      job: widget.jobs,
      bgColor: widget.bgColor?.hex,
    },
    ...customProps,
  }
}

/**
 * ============================   END  ====================================
 * The generation methods for generating properties for each type of widget
 */

/**
 *
 * @param type string
 * @returns
 * Component
 * generateProps
 */
const componentFactory = (
  type: string,
): {
  Component?: FC<any>
  generateProps?: (args: GetPropsOptions) => Record<string, any>
} => {
  switch (type) {
  case 'hero':
    return { Component: HeroSection, generateProps: generateHeroSectionProps }
  case 'visual':
    return { Component: CopySection, generateProps: generateCopySectionProps }
  case 'numbers':
    return {
      Component: OurClientsSection,
      generateProps: getOurClientsSectionProps,
    }
  case 'drawer':
    return {
      Component: ProductsSection,
      generateProps: getProductsSectionProps,
    }
  case 'testimonials':
    return {
      Component: TestimonialsCarousel,
      generateProps: getTestimonialsCarouselProps,
    }
  case 'visualWithCTA':
    return {
      Component: TransformSection,
      generateProps: getTransformSectionProps,
    }
  case 'productHero':
    return {
      Component: ProductHeroSection,
      generateProps: getProductHeroSectionProps,
    }
  case 'productDrawer':
    return {
      Component: ProductDrawer,
      generateProps: getProductDrawerProps,
    }
  case 'pieChart':
    return {
      Component: PieChartModuleSection,
      generateProps: getPieChartModuleSectionProps,
    }
  case 'scrollCarousel':
    return {
      Component: ScrollCarousel,
      generateProps: getScrollCarouselProps,
    }
  case 'visualOnly':
    return {
      Component: VisualOnlyModuleSection,
      generateProps: getVisualOnlyModuleSectionProps,
    }
  case 'advantageVisualOnly':
    return {
      Component: AdvantageVisualOnlyModuleSection,
      generateProps: getAdvantageVisualOnlyModuleSectionProps,
    }
  case 'companyLargeDrawerModule':
    return {
      Component: CompanyLargeDrawerModuleSection,
      generateProps: getLargeCompanyDrawerModuleSectionProps,
    }
  case 'companyBottomContent':
    return {
      Component: CompanyBottomContentSection,
      generateProps: getCompanyBottomContentSectionProps,
    }
  case 'companyHistory':
    return {
      Component: CompanyHistorySection,
      generateProps: getCompanyHistorySectionProps,
    }
  case 'companyLeaderShipList':
    return {
      Component: CompanyLeaderShipList,
      generateProps: getCompanyLeaderShipListProps,
    }
  case 'productWave':
    return {
      Component: WaveModule,
      generateProps: getWaveModuleProps,
    }
  case 'payerResources':
    return {
      Component: PayerResources,
      generateProps: getPayerResourcesProps,
    }
  case 'productBanner':
    return {
      Component: BannerModule,
      generateProps: getBannerModuleProps,
    }
  case 'largeDrawer':
    return {
      Component: LargeDrawerModuleSection,
      generateProps: getLargeDrawerModuleProps,
    }
  case 'homePayerResources':
    return {
      Component: ArticleSection,
      generateProps: getHomePayerResourcesProps,
    }
  case 'accreditedModule':
    return {
      Component: AccreditedModule,
      generateProps: getAccreditedModuleProps,
    }
  case 'roleDrawerModule':
    return {
      Component: RoleDrawerModuleSection,
      generateProps: getRoleDrawerModuleSectionProps,
    }
  default:
    return {}
  }
}

export function contentRenderer({
  widgets,
  customizeConfig,
  options = [],
}: {
  widgets?: Widget[]
  customizeConfig: CustomizeConfig
  options?: Array<{
    index: number
    position: 'before' | 'after'
    insertedComponent: JSX.Element
  }>
}): JSX.Element[] {
  const atoms: JSX.Element[] = []

  if (widgets == null) {
    return atoms
  }

  /** Loop widgets that fetch from cms */
  for (let index = 0; index < widgets.length; index++) {
    const widget = widgets[index]
    const widgetType = widget._type
    const { Component, generateProps } = componentFactory(widgetType)

    const needInserted = options.find((item) => item.index === index)

    if (widget?.hidden === true) {
      continue
    }

    if (needInserted != null && needInserted.position === 'before') {
      atoms.push(needInserted.insertedComponent)
    }

    if (Component != null && generateProps != null) {
      const customPropsConfiguration = customizeConfig[widgetType]
      const customProps =
        customPropsConfiguration != null ? customPropsConfiguration(widget) : {}
      // console.log(widget)
      const props = generateProps({ widget, customProps })

      atoms.push(<Component key={index} {...props} />)
    }

    if (needInserted != null && needInserted.position === 'after') {
      atoms.push(needInserted.insertedComponent)
    }
  }

  return atoms
}
