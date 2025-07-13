import React from 'react'

import * as icon from './allIcon'

interface IconProps {
  name: nameType
  className?: string
  width?: string
  height?: string
  onClick?: () => void
}

export type nameType = keyof typeof icon

const Icon = ({ name, ...props }: IconProps): JSX.Element => {
  const Icon = icon[name]

  return <Icon {...props} />
}

export default Icon
