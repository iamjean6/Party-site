import { useState} from 'react';
import Galleryitem from '../ui/galleryitem';
import { galleryData } from '../../constants/index.js';




const Gallery = () => {
  return (
    <div id="gallery" className='w-full m-h-screen px-8 py-16 md:py-24'>
      <div className="text-center mb-12">
        <p className="text-sm font-zentry uppercase tracking-widest text-gray-500 mb-2">
            So Far we have</p>
        <h2 className="text-5xl  md:text-8xl lg:text-5xl font-semibold tex-red-600 mb-6">
           Latest Work & Gallery Post
           </h2>
           <div className="flex items-center justify-center gap-4">
             <span className="w-14 h-px bg-blue-700"></span>
             <span className="text-blue-700 text-sm">★</span>
              <span className="w-14 h-px bg-blue-700"></span>
              </div>

      </div>

      <div className=" grid grid-cols-1 md:grid-cols-4 auto-rows-[140px]  md:auto-rows-[200px] gap-4 md:gap-6">

  {galleryData.map((item) => (
    <Galleryitem
      key={item.id}
      images={item.images}
      featured={item.featured}
      wide={item.wide}
    />
  ))}
</div>

    </div>
  );
};

export default Gallery;