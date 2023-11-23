export interface Post{
    _id:string,
    author:string | null,
    description:string | null,
    mainImage: Image,
    publishedAt: String | null,
    slug:Slug | null,
    title:string | null,
}

export interface Slug{
    _type:string,
    current:string,
}

export interface Image{
    _type: string,
    alt: string
}