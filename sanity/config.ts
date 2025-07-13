
declare global {
  interface Window {
    ENV: {
      SANITY_STUDIO_PROJECT_ID: string
      SANITY_STUDIO_DATASET: string
      SANITY_STUDIO_URL: string
      SANITY_STUDIO_STEGA_ENABLED: string
      SANITY_STUDIO_API_TOKEN?: string
      NODE_ENV?: string
    }
  }
}

const {
  SANITY_STUDIO_PROJECT_ID,
  SANITY_STUDIO_DATASET,
  SANITY_STUDIO_URL,
  SANITY_STUDIO_STEGA_ENABLED = false,
  SANITY_STUDIO_API_TOKEN,
} = typeof document === 'undefined' ? process.env : window.ENV

export const projectId = SANITY_STUDIO_PROJECT_ID??""
export const dataset = SANITY_STUDIO_DATASET??""
export const studioUrl = SANITY_STUDIO_URL??"http://localhost:3333"
export const token = SANITY_STUDIO_API_TOKEN
export const stegaEnabled =SANITY_STUDIO_STEGA_ENABLED 

if (projectId === "") throw new Error('Missing SANITY_STUDIO_PROJECT_ID in .env')
if (dataset === "") throw new Error('Missing SANITY_STUDIO_DATASET in .env')




