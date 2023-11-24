import { PortableTextBlock } from "sanity"

export interface Post{
    _id:string,
    author:string | null,
    description:string | null,
    mainImage: Image,
    publishedAt: string,
    slug:Slug,
    title:string | null,
    body: PortableTextBlock | null
}

export interface Slug{
    _type:string,
    current:string,
}

export interface Image{
    _type: string,
    alt: string
}