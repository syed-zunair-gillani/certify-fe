import { type FC } from 'react'
import HeroSection from '@/components/HeroSection'
import TestimonialsSection from '@/components/TestimonialsCarousel'
import TransformSection from '@/components/TransformSection'
import CopySection from '../app/home/components/CopySection'
import ProductsSection from '../app/home/components/ProductsSection'
import OurClientsSection from '../app/home/components/OurClients'

export interface Widget {
  _type: string
  _key: string
  [key: string]: any
}

export type generator = (widget: Widget, Component: FC<any>) => JSX.Element

const WIDGET_COMPONENT_MAPPING = {
  hero: HeroSection,
  visual: CopySection,
  numbers: OurClientsSection,
  drawer: ProductsSection,
  testimonials: TestimonialsSection,
  visualWithCTA: TransformSection
}

const renderComponentFromWidget = (generateConfig: Record<string, generator>, widgets: Widget[] | undefined): JSX.Element => {
  if (widgets != null) {
    return <>
      {
        widgets.map((widget: Widget): JSX.Element | any => {
          const UsedComponent: FC<any> = WIDGET_COMPONENT_MAPPING[widget._type as keyof typeof WIDGET_COMPONENT_MAPPING]
          const usedGenerateConfig = generateConfig[widget._type]
          return usedGenerateConfig(widget, UsedComponent)
        })
      }
    </>   
  }

  return <></>
}

export default renderComponentFromWidget