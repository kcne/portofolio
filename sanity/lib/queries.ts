// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";


// Get the latest post
export const latestPostQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0]{
_id, title, slug, publishedAt,mainImage,category,body
}`;


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

