import {Navigation, Pagination, Scrollbar, A11y} from "swiper";
import {useInView} from 'react-intersection-observer';
import Image from "next/image";
import {BsFillChatLeftQuoteFill} from "react-icons/bs";
import {motion} from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import TestimonialCard from "./Parts/TestimonialCard";
import testimonials from "../constants/testimonials.json"
import { useStore } from "../store/store";
import Heading from "./Parts/Heading";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { setPage } from "../store/actions";

export default function Testimonials(){
    const [_, dispatch] = useStore();
    const {ref: containerRef, inView: containerInView} = useInView({
        threshold: 0.5
    })
    const handleOnSwiper = (swiper) => {
        console.log(swiper);
    }

    const handleSlideChange = (slide) => {
        console.log(slide);
    }
    useEffect(() => {
        let mounted = true;
        if(mounted){
            if(containerInView)
                dispatch(setPage('home/testimonials'))
        }
        return () => {mounted = false}
    }, [containerInView])
    return (
        <div ref={containerRef} className="min-h-[50vh] py-20 pb-20 md:pb-40 bg-bg-dark relative z-[1]" id="testimonials">
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