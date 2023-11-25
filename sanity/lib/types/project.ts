import { PortableTextBlock, Slug } from "sanity";
import { Image } from "./post";
import { Technology } from "./technology";

export interface Project{
    _id:string,
    title:string,
    company:string,
    slug:Slug,
    description:string,
    image:Image,
    gif:Image,
    publishedAt:string,
    body: PortableTextBlock,
    url:string,
    stack?:Technology[],
    gallery:Image[]
}