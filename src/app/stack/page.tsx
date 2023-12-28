"use client";
import Navbar from "@/components/shared/navbar";
import React from "react";
import useSWR from "swr";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client, fetcher } from "../../../sanity/lib/client";
import { Technology } from "../../../sanity/lib/types/technology";
import { getAllTechnologies } from "../../../sanity/lib/queries";
import Footer from "@/components/shared/footer";

interface Props {}
const builder = imageUrlBuilder(client);

function Stack({}: Props) {
  const { data: technologies, isLoading } = useSWR<Technology[]>(
    getAllTechnologies,
    fetcher
  );
  return (
    <div className="w-full min-h-screen h-full pb-5 bg-gradient-to-r from-rose-100 to-teal-100">
      <Navbar />
      <div className="w-full h-full pt-28">
        {technologies && (
          <div className="max-w-6xl border border-zinc-200 rounded-xl m-auto backdrop-blur-md bg-white/50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-5 p-5">
            {technologies.map((t) => (
              <Card
                key={t._id}
                className=" backdrop-blur-md bg-zinc-50 h-auto md:h-[150px]"
              >
                <CardContent className="grid grid-rows-1 grid-cols-[1fr_3fr] md:grid-cols-[1fr_2fr] h-full p-5">
                  <div className="h-full w-[150px] md:w-[150px] lg:w-[100px]  basis-1/3  flex items-center justify-center border-r pr-4 border-zinc-200">
                    <Image
                      className="object-contain overflow-none max-w-[50px]"
                      src={builder
                        .image(t.image)
                        .width(150)
                        .format("png")
                        .url()}
                      alt={t?.image?.alt}
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="ml-4">
                    <CardTitle className="text-zinc-600 font-semibold">
                      {t.title}
                    </CardTitle>
                    <CardDescription className="text-zinc-500 mt-1.5 text-sm leading-tight">
                      {t.description}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Stack;
