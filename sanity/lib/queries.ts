// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

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
}`;

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
}`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;


export const getAllJobPosts = groq`*[_type == "jobPost" && defined(slug.current)]{
    _id,
    title,
    slug,
    location,
    publishedAt
}`;

export const getJobPostBySlug = groq`*[_type == "jobPost" && slug.current == $slug][0]{
    title,
    location,
    salary,
    slug,
    category->{
      _id,
      title,
    },
    body,
    author->{
        _id,
        name,
        "image_url": image.asset->url
    },
    publishedAt
}`;