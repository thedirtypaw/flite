import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '5senu7u5', // ✅ use your real one
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})
