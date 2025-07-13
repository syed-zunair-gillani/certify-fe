'use client'
import React, { useEffect } from 'react'

import styles from './styles.module.css'
import './download-our-ebook-form.css'

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
    script.src = 'https://js.hsforms.net/forms/embed/v2.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      if (window.hbspt != null) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '40166028',
          formId: '94519724-cbdd-4af4-855d-c25c2a916cfa',
          target: '#hub-spot-form',
          css: '',
          formData: {
            cssClass: 'download-our-ebook-form',
          },
        })
      }
    })
  }, [])

  return <div className={styles.container}><div id="hub-spot-form" className={styles.form} /></div>
}

export default Form
