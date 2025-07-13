import styles from './styles.module.css'
import { PortableText } from '@portabletext/react'

interface AccordionItem {
  heading: string
  description: any // PortableTextBlock[]
}

export default function AccordionList({ accordions }: { accordions: AccordionItem[] }) {
  if (!accordions || accordions.length === 0) {
    return <p className={styles.noResults}>No matching results found.</p>
  }

  return (
    <div className={styles.accordionList} style={{ margin: '0 auto', maxWidth: '900px' }}>
      {accordions.map((item, index) => (
        <details key={index} className={styles.accordion}>
          <summary>
            {item.heading}
            <span>
              <svg width="18px" height="18px" viewBox="0 -4.5 20 20" version="1.1">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -6684.000000)" fill="#000000">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path d="M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39" id="arrow_down-[#339]"></path>
                          </g>
                      </g>
                  </g>
              </svg>
            </span>
          </summary>
          <div className={styles.accordionContent}>
            <PortableText value={item.description} />
          </div>
        </details>
      ))}
    </div>
  )
}
