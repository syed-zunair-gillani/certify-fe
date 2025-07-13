import { fetchJobList, type Job } from '../job'
import { readClient } from '@/sanity/client'

jest.mock('@/sanity/client', () => ({
  readClient: {
    fetch: jest.fn(),
  },
}))

describe('fetchJobList', () => {
  xit('should fetch job list correctly', async () => {
    const mockJobs: Job[] = [
      {
        name: 'Job 1',
        url: 'https://example.com/job/1',
        location: 'Location 1',
        department: 'Department 1',
      },
      {
        name: 'Job 2',
        url: 'https://example.com/job/2',
        location: 'Location 2',
        department: 'Department 2',
      },
    ]

    // Mocking the response from the readClient.fetch function
    ;(readClient.fetch as jest.Mock).mockResolvedValue(mockJobs)

    const result = await fetchJobList()

    expect(result).toEqual(mockJobs)
    expect(readClient.fetch).toHaveBeenCalledWith(`
      *[_type=="job"] {
        name,
        url,
        location,
        department
      }
    `)
  })
})
