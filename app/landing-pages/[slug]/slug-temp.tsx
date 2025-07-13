'use client'

import AccordionList from '@/components/landing/AccordionList'
import AlphabetFilter from '@/components/landing/AlphabetFilter'
import Banner from '@/components/landing/BannerText'
import Footer from '@/components/landing/Footer'
import LogoSection from '@/components/landing/LogoSection'
import { SearchBar } from '@/components/landing/SearchBar'
import React, { FC, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

const SlugTemp: FC<any> = ({ styles, page }) => {
  const searchParams:any = useSearchParams()
  const router = useRouter()

  const [searchText, setSearchText] = useState(searchParams.get('search') || '')
  const selectedLetter = searchParams.get('letter') || ''
  const basePath = `/landing-pages/${page.slug}`

  const handleSearchChange = (val: string) => {
    setSearchText(val)

    const params = new URLSearchParams(searchParams.toString())
    if (val) {
      params.set('search', val)
    } else {
      params.delete('search')
    }
    router.push(`${basePath}?${params.toString()}`)
  }

  const filteredAccordions = page.accordions.filter((i: any) => {
    const heading = i.heading.toLowerCase()
    const matchesLetter = selectedLetter ? heading.startsWith(selectedLetter.toLowerCase()) : true
    const matchesSearch = searchText ? heading.includes(searchText.toLowerCase()) : true
    return matchesLetter && matchesSearch
  })

  return (
    <>
      <div className={`banner_wrapper`}>
        <section>
          <LogoSection logo1={page.logo1} logo2={page.logo2} />
          <h1 className="">{`Welcome to the Centene Health Plan & Network participation page.`}</h1>
          <p className="">{`Please select your state(s) to view the participating Health Plans and Networks below.`}</p>
          <SearchBar value={searchText} onChange={handleSearchChange} />
          <AlphabetFilter selectedLetter={selectedLetter} search={searchText} basePath={basePath} />
        </section>
      </div>
      <div className={styles.wrapper} style={{paddingTop: '80px', backgroundColor: "#fff !important"}}>
        <Banner content={page.bannerText} />
        <div className={styles.content}>
          <AccordionList accordions={filteredAccordions} />
          <Footer
            text={page.footerSimpleText || ''}
            richText={page.footerRichText || []}
          />
        </div>
      </div>
    </>
  )
}

export default SlugTemp
