import {Navigation, Pagination, Scrollbar, A11y} from "swiper";
import {useInView} from 'react-intersection-observer';
import Image from "next/image";
import {BsFillChatLeftQuoteFill} from "react-icons/bs";
import {motion} from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import TestimonialCard from "./Parts/TestimonialCard";
import testimonials from "../constants/testimonials.json"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Heading from "./Parts/Heading";

export default function Testimonials(){
    const {ref: headingRef, inView: headingInView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    const handleOnSwiper = (swiper) => {
        console.log(swiper);
    }

    const handleSlideChange = (slide) => {
        console.log(slide);
    }
    return (
        <div className="min-h-[50vh] py-20 pb-20 md:pb-40 bg-bg-dark relative z-[1]">
                <div className="container mx-auto">
                    <Heading title="What Clients Say" className="text-center mb-5 sm:mb-28" />
                    <Swiper
                    modules={[Pagination]}
                    draggable
                    loop
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    pagination
                    onSwiper={handleOnSwiper}
                    onSlideChange={handleSlideChange}
                    >
                        {
                           testimonials.map(({name, body, img}, indx) => {
                               return (
                                   <SwiperSlide key={indx} >
                                    <TestimonialCard name={name} body={body} img={img}  />
                                   </SwiperSlide>
                               )
                           }) 
                        }
                    </Swiper>
                </div>
        </div>
        
    )
}