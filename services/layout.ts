import { readClient } from '@/sanity/client'
import type { Image as SanityImage } from '@sanity/types'
import { type ColorValue } from '@sanity/color-input'
import { urlForImage } from './helper'

export interface LayoutDataProps {
  header: {
    menus: sourceMenuProps[]
    logo: SanityImage
    loginIcon: {
      href: string
      icon: SanityImage
    }
    searchIcon: SanityImage
    button: {
      text: string
      href: string
      bgColor: ColorValue
    }
  }
  slug: {
    current: string
    _type: string
  }
  footer: {
    pp: subLinkProps
    bgColor: ColorValue
    logo: SanityImage
    tos: subLinkProps
    links: linkProps[]
    copyRight: string
  }
}

export interface subLinkProps {
  href: string
  text: string
}

export interface linkProps {
  title: string,
  subLinks: subLinkProps[]
}

interface sourceSubMenuProps {
  text: string
  href: string
  icon?: SanityImage
  preview?: {
    thumbnail: SanityImage
    thumbnailBgColor: ColorValue
    thumbnailUrl?: string
    thumbnailAlt?: string
    dek: string
  }
}

interface sourceMenuProps {
  title: string
  subMenus: sourceSubMenuProps[]
}

export interface subMenuProps {
  text: string
  href: string
  iconUrl?: string
  iconAlt?: string
  preview?: {
    thumbnail: SanityImage
    thumbnailBgColor: string
    thumbnailUrl: string
    thumbnailAlt?: string
    dek: string
  }
}

export interface menusProps {
  title: string
  subMenus: subMenuProps[]
}

export interface formattedLayoutDataProps {
  header: {
    logo: {
      url: string
      alt: string
    }
    loginIcon: {
      icon: {
        url: string
        alt: string
      }
      href: string
    }
    searchIcon: {
      url: string
      alt: string
    }
    button: {
      bgColor: string
      text: string
      href: string
    }
    menus: menusProps[]
  },
  footer: {
    logo: {
      url: string
      alt: string
    }
    bgColor: string
    pp: subLinkProps
    tos: subLinkProps
    links: linkProps[]
    copyRight: string
  }
}

const generateCopyRight = (copyRight: string): string => {
  const currentYear = new Date().getFullYear()

  if (copyRight == null){
    return `© Copyright ${currentYear} CertifyOS`
  }
  
  // eslint-disable-next-line no-template-curly-in-string
  return copyRight.replace('${Year}', currentYear.toString())
}

const formatLayoutData = (
  layout: LayoutDataProps,
): formattedLayoutDataProps => {
  const initialLinkValue = { href: '', text: ''}
  return {
    header: {
      logo: {
        alt: layout?.header?.logo?.alt as string,
        url: urlForImage(layout?.header?.logo)?.url(),
      },
      loginIcon: {
        icon: {
          alt: layout?.header?.loginIcon?.icon?.alt as string,
          url: urlForImage(layout?.header?.loginIcon.icon)?.url(),
        },
        href: layout?.header?.loginIcon?.href,
      },
      searchIcon: {
        alt: layout?.header?.searchIcon?.alt as string,
        url: urlForImage(layout?.header?.searchIcon)?.url(),
      },
      button: {
        bgColor: layout?.header?.button?.bgColor?.hex,
        text: layout?.header?.button?.text,
        href: layout?.header?.button?.href,
      },
      menus: (layout?.header?.menus ?? []).map((item) => {
        const newSubMenus = item.subMenus.map((menu): subMenuProps => {
          const newSubMenu: subMenuProps = {
            text: menu.text,
            href: menu.href
          }
          if (menu.icon != null) {
            newSubMenu.iconUrl = urlForImage(menu.icon)?.url()
            newSubMenu.iconAlt = menu.icon?.alt as string
          }

          if (((menu.preview?.thumbnail) != null) || ((menu.preview?.thumbnailBgColor) != null)) {
            newSubMenu.preview = {
              ...menu.preview,
              thumbnailUrl: urlForImage(
                menu.preview?.thumbnail,
              )?.url(),
              thumbnailAlt: menu.preview?.thumbnail?.alt as string,
              thumbnailBgColor:  menu.preview.thumbnailBgColor.hex
            }
          }

          return newSubMenu
        })

        return {
          ...item,
          subMenus: newSubMenus,
        }
      }),
    },
    footer: {
      logo: {
        alt: layout?.footer?.logo?.alt as string,
        url: urlForImage(layout?.footer?.logo)?.url(),
      },
      bgColor: layout?.footer?.bgColor?.hex,
      pp: layout?.footer?.pp ?? initialLinkValue,
      tos: layout?.footer?.tos ?? initialLinkValue,
      links: layout?.footer?.links ?? [],
      copyRight: generateCopyRight(layout?.footer?.copyRight)
    }
  }
}

export const fetchLayout = async (slug: string = 'layout'): Promise<formattedLayoutDataProps> => {
  const layoutInfo: LayoutDataProps = await readClient.fetch(
    `
    *[_type=="layout" && !(_id in path("drafts.**")) && slug.current=="${slug}"] {
      slug,
      header {
        ...,
        logo {
            _type,
            "asset": asset,
            "alt": asset->altText
        },
        loginIcon {
            ...,
            icon {
                _type,
                "asset": asset,
                "alt": asset->altText
            }
        },
        searchIcon {
          _type,
            "asset": asset,
            "alt": asset->altText
        },
        menus[] {
          ...,
          subMenus[] {
            ...,
            preview {
              ...,
              thumbnail {
                _type,
                "asset": asset,
                "alt": asset->altText
            }
            }
          }
        }
      },
      footer
    }[0]
  `,
    {},
    { next: { revalidate: 60, tags: ['layout'] } },
  )

  return formatLayoutData(layoutInfo)
}
