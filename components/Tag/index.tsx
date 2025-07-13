import Link from 'next/link'
import styles from './styles.module.css'
import classNames from 'classnames'

export const tagColorMapping = ['orange' , 'yellow' , 'yellow-t' , 'purple-t-01' , 'purple-t-02' , 'purple' , 'default']

export interface TagColors {
  color?: 'orange' | 'yellow' | 'yellow-t' | 'purple-t-01' | 'purple-t-02' | 'purple' | 'default' | string;
}

export interface TagProps extends TagColors {
  text?: string;
}

const Tag: React.FC<TagProps &
{
  onClick?: () => void,
  classes?: string,
  href?: string
}> = ({
  color = 'default',
  text = 'Press',
  onClick,
  classes,
  href,
}) => {
  const className = classNames('sans-body-small', styles.tag, styles[color], classes)
  const style = {
    backgroundColor: tagColorMapping.includes(color) ? undefined : color
  }
  return href === undefined ? (
    <label className={className} style={style} onClick={onClick} >
      {text}
    </label>
  ) : (
    <Link className={className} style={style} onClick={onClick} href={href}>
      {text}
    </Link>
  )
}

export default Tag