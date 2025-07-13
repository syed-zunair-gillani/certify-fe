import { createClient } from 'next-sanity';
import { projectId, dataset, token } from './config'

export const writeClient = createClient({
  dataset,
  projectId,
  token,
  useCdn:false,
  apiVersion: '2023-08-01',
  perspective: 'published',
})

export const readClient = createClient({
  dataset,
  projectId,
  token,
  apiVersion: '2023-08-01',
  useCdn: false
})
