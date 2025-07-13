'use client'

import React from 'react'
import classNames from 'classnames'
import DrawerModule from './DrawerModule'
import styles from './styles.module.css'

interface Job {
  name: string
  url: string
  location?: string
  department?: string
}

interface LeadershipDrawerModuleSectionProps {
  data: {
    title: string
    description: string
    job: Job[]
    bgColor: string
  }
  classes?: {
    section?: string
    italic?: string
  }
}

const LeadershipDrawerModuleSection = ({
  data,
  classes,
}: LeadershipDrawerModuleSectionProps): JSX.Element => {
  const sectionClasses = classNames(styles.section, classes?.section)

  const renderDrawerModule = (): JSX.Element => {
    if (data.job != null) {
      const jobMap = reBuildJobData()
      const jobDepartmentArray = []

      for (const key of jobMap.keys()) {
        jobDepartmentArray.push(key)
      }

      return (
        <ul className={styles['right-container']}>
          {jobDepartmentArray.map((department: string) => {
            return (
              <DrawerModule
                key={department}
                data={jobMap.get(department)}
                bgColor={data.bgColor}
              />
            )
          })}
        </ul>
      )
    }

    return <></>
  }

  const reBuildJobData = (): any => {
    const jobDataMap = new Map()

    data.job.forEach((item: Job) => {
      if (!jobDataMap.has(item.department)) {
        const jobDetailArray: Job[] = []
        jobDetailArray.push(item)
        jobDataMap.set(item.department, jobDetailArray)
      } else {
        jobDataMap.get(item.department).push(item)
      }
    })
    return jobDataMap
  }

  return (
    <>
      <div className={styles['title-container']}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.description}>{data.description}</p>
      </div>
      <section className={sectionClasses}>{renderDrawerModule()}</section>
    </>
  )
}

export default LeadershipDrawerModuleSection
