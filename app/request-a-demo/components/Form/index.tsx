'use client'
import React, { useEffect } from 'react'

import styles from './styles.module.css'
import './request-demo-form.css'

declare global {
  interface Window {
    hbspt: HbsptObject | undefined
  }
}

interface HbsptObject {
  forms: {
    create: (options: any) => void
  }
}

const Form = (): JSX.Element => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      if (window.hbspt != null) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '40166028',
          formId: 'ba82885b-7877-47b6-b433-d131709ff3bd',
          target: '#hub-spot-form',
          css: '',
          formData: {
            cssClass: 'request-demo-form',
          },
        })
      }
    })
  }, [])

  return <div id="hub-spot-form" className={styles.form} />
}

export default Form
