// client.ts
import { QueryParams, createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn:false,
  token: process.env.SANITY_API_TOKEN,
})

// Adjusted fetcher function
export const fetcher = async (query: string, params?: QueryParams) => {
  return await client.fetch(query, params);
}
