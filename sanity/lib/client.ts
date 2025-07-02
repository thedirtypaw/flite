import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

// Read client (for fetching data)
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Keep CDN for reads
})

// Write client (for updating data like views)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Must be false for writes
  token: process.env.SANITY_API_WRITE_TOKEN, // Your new token
})
