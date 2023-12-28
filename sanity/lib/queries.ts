// ./nextjs-app/sanity/lib/queries.ts

import { groq } from 'next-sanity'

// Get the latest post
export const latestPostQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0]{
_id, title, slug, publishedAt,mainImage,category,body
}`

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id,
    title,
    slug,
    mainImage,
    description,
    author->{
        _id,
        name,
        "image_url": image.asset->url
    },
    publishedAt
}`

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    body,
    date, 
    author->{
        _id,
        name,
        "image_url": image.asset->url
    },
    publishedAt
}`

export const getOtherPosts = groq`*[_type == "post" && slug.current != $slug][0...3]{
    _id,
    title,
    slug,
    mainImage,
    description,
    author->{
        _id,
        name,
        "image_url": image.asset->url
    },
    publishedAt
}`

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`

export const getAllTechnologies = groq`*[_type == "technology"][]{
    _id,
    title,
    description,
    image
}`

export const getProjects = groq`*[_type == "project"] | order(order asc)[]{
    _id,
    title,
    company,
    slug,
    description,
    image,
    gif,
    publishedAt,
    url
}`

export const getOtherProjects = groq`*[_type=="project" && slug.current!=$slug] | order(order asc)[0...3]{
    _id,
    title,
    company,
    slug,
    description,
    image,
    gif,
    publishedAt,
    url
}`

export const getProject = groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    company,
    slug,
    description,
    image,
    gif,
    publishedAt,
    url,
    body,
    "stack": stack[]->{
        _id,
        title,
        description,
        image
    },
    "gallery": gallery[]{
        _key,
        asset->{
            _id,
            url
        },
        alt
    }
}`

export const getUserInfo = groq`
*[_type == 'userInfo'] [0] {
  title,
  name,
  surname,
  summary,
  cv{
    "url":asset -> url
  },
  githubUrl,
  linkedInUrl
}
`

export const getExperienceInformation = groq`
*[_type == 'experience'] {
  position,
  company,
  location,
  startDate,
  summary,
}`
