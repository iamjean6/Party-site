import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Button from "../components/button";
import { TiLocationArrow } from "react-icons/ti";

import "swiper/css";

function GalleryItem({ images, featured, wide }) {
  const swiperRef = useRef(null);

  return (
    <div
      className={`
        relative overflow-hidden rounded-lg group
        ${featured ? "row-span-2" : "row-span-1"}
        ${wide ? "col-span-2" : ""}
      `}
      onMouseEnter={() => swiperRef.current?.autoplay.start()}
      onMouseLeave={() => swiperRef.current?.autoplay.stop()}
    >
      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={false}
        

        loop={true}
        className="w-full h-full [&_.swiper-wrapper]:h-full"

      >
        {images.map((img, index) => (
          <SwiperSlide  className="w-full h-full" key={index}>
            <img
            src={img}
            alt="Gallery item"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="
  absolute inset-0 z-20
  flex items-end justify-center
  pb-6
  opacity-0
  transition-opacity duration-300
  group-hover:opacity-100
  pointer-events-none
">
  
<Button
  id="Learn More"
  title="Learn More"
  leftIcon={<TiLocationArrow />}
  containerClass="
    mt-8 
    pointer-events-auto
    inline-flex items-center justify-center 
    px-8 py-4 
    !bg-green-400 text-black 
    font-bold 
    shadow-lg 
    gap-2 
    hover:bg-green-300 
    transition
  " 
/>
</div>

    </div>
  );
}

export default GalleryItem;
