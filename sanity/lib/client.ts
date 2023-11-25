// client.ts
import { QueryParams, createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.SANITY_API_TOKEN,
})

// Assuming your fetcher is already set up like this
export const fetcher = async (query: string, params?: QueryParams) => {
  return await client.fetch(query, params);
}

// client.ts
export const customFetcher = async ([query, params]: [string, QueryParams?]) => {
  return await client.fetch(query, params);
}
