import React from 'react'

import classNames from 'classnames'

interface TitleProps {
  data: string | Array<string | { type?: string; text?: string }>
  classes?: { title?: string; italic?: string }
}

const Title = ({ data, classes }: TitleProps): JSX.Element => {
  return (
    <div className={classNames(classes?.title)}>
      {Array.isArray(data) ? (
        <>
          {data.map((item) => {
            if (typeof item === 'string') {
              return <span key={item}>{item}</span>
            } else if (item?.type === 'italic') {
              return (
                <span
                  className={classNames('italic', classes?.italic)}
                  key={item?.text}
                >
                  {item.text}
                </span>
              )
            } else {
              return null
            }
          })}
        </>
      ) : (
        <>{data}</>
      )}
    </div>
  )
}

export default Title
