"use client";
import { Image as ImageType } from "../../../../sanity/lib/types/post";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";

interface Props {
  images: ImageType[];
}

const builder = imageUrlBuilder(client);

function ImageSwiper({ images }: Props) {
  return (
    <Swiper navigation={true} modules={[Navigation]}>
      {images.map((image, idx) => (
        <SwiperSlide key={idx}>
          <Image
            className="object-center object-contain mt-5 rounded-xl"
            src={builder.image(image).width(1366).height(768).url()}
            alt={image?.alt}
            width={1366}
            height={768}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSwiper;
