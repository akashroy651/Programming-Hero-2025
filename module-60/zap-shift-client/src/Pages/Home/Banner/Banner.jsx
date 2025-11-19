import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { GoArrowUpRight } from "react-icons/go";


const Banner = () => {
  return (
    <div>
     <Carousel 
     autoPlay 
     infiniteLoop={true}
       >
        
        {/* Slide 1 */}
        <div className="relative">
          <img src={bannerImg1} />

          {/* Button Group (responsive) */}
          <div className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3">
            
            <button className="btn bg-primary shadow-xl rounded-ee-4xl rounded-tl-4xl py-3 md:py-5 text-xs md:text-base">
              Track Your Parcel
            </button>

            <button className="bg-black text-white p-2 md:p-3 text-lg md:text-2xl rounded-full">
              <GoArrowUpRight />
            </button>

            <button className="btn badge-outline rounded-ee-4xl rounded-tl-4xl text-xs md:text-base">
              Track Your Parcel
            </button>

          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img src={bannerImg2}  />

          <div className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <button className="btn bg-primary shadow-xl rounded-ee-4xl rounded-tl-4xl py-3 md:py-5 text-xs md:text-base">
              Track Your Parcel
            </button>

            <button className="bg-black text-white p-2 md:p-3 text-lg md:text-2xl rounded-full">
              <GoArrowUpRight />
            </button>

            <button className="btn badge-outline rounded-ee-4xl rounded-tl-4xl text-xs md:text-base">
              Track Your Parcel
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img src={bannerImg3}  />

          <div className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <button className="btn bg-primary shadow-xl rounded-ee-4xl rounded-tl-4xl py-3 md:py-5 text-xs md:text-base">
              Track Your Parcel
            </button>

            <button className="bg-black text-white p-2 md:p-3 text-lg md:text-2xl rounded-full">
              <GoArrowUpRight />
            </button>

            <button className="btn badge-outline rounded-ee-4xl rounded-tl-4xl text-xs md:text-base">
              Track Your Parcel
            </button>
          </div>
        </div>

      </Carousel>
    </div>
  );
};

export default Banner;
