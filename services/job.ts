import { readClient } from '@/sanity/client'

export interface Job {
  name: string
  url: string
  location?: string,
  department?: string
}

export const fetchJobList = async (): Promise<Job[]> => {
  const jobs = await readClient.fetch(`
    *[_type=="job" && !(_id in path("drafts.**"))] {
      name,
      url,
      location,
      department
    }
  `, {}, { cache: 'no-store' })

  return jobs
}
