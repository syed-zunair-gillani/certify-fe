export interface MenuTypeProps {
  title: string
  subTitle: subTypeTitleProps[]
}

export interface subTypeTitleProps {
  title?: string
  href?: string
  icon?: string | any
  backgroundColor?: string
  width?: string
  height?: string
  content?: { text?: string; icon?: string; top?: string }
}
