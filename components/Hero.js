import Image from "next/image";
import {FaSun} from "react-icons/fa";
import {motion} from "framer-motion";

export default function Hero(){
    return (
        <div className="container md:pl-20 md:pr-20 mx-auto rounded-md from-light/95 to-secondary/50 bg-gradient-to-t shadow-dark-gray">
            <div className="relative min-h-[60vh] md:min-h-[80vh]">
                <motion.div 
                initial={{
                    rotate: 700,
                }} 
                transition={{
                    type: "spring",
                    stiffness: 700,
                }}
                animate={{
                    rotate: 0
                }}
                className="absolute top-3">
                    <FaSun className="text-9xl text-secondary" />
                </motion.div>
                <motion.div 
                initial={{
                    rotate: 360,
                }} 
                transition={{
                    type: "spring",
                    stiffness: 300
                }}
                animate={{
                    rotate: 0
                }}
                className="absolute top-3 right-3">
                    <FaSun className="text-9xl text-secondary" />
                </motion.div>
                <div className="absolute flex flex-col items-center z-10 top-0 left-0 w-full h-full hero-text ">
                    <div className="mt-12 flex flex-col bg items-center">
                        <motion.h3 
                        initial={{
                            y: -30
                        }} 
                        transition={{
                            type: "spring",
                            stiffness: 110,
                        }}
                        animate={{
                           y: 0 
                        }} 
                        className="text-lg text-black/80 font-medium mb-1">Discover The World</motion.h3>
                        <motion.h1 
                        initial={{
                            opacity: 0,
                            scale: 0.5
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 180,
                            delay: 1
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        className="text-3xl md:text-5xl text-black/80 font-extrabold">Travel With Us</motion.h1>
                        <motion.p 
                        initial={{
                            y: 30
                        }} 
                        transition={{
                            type: "spring",
                            stiffness: 110,
                        }}
                        animate={{
                           y: 0 
                        }}
                        className="text-md text-black/80 mt-5">Have An Amazing Experience</motion.p>
                        <motion.button
                        className="border-none p-2 sm:p-5 bg-black text-white/80 z-20"
                        initial={{
                        opacity: 0,
                        scale: 0.4,
                        y: 0
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            delay:3
                        }}
                        animate={{
                            opacity:1,
                            scale: 1,
                            y: 30
                        }}
                        >
                            Book Service
                        </motion.button>
                    </div>
                    <div className="hero-img flex justify-between overflow-visible mx-auto w-full h-full z-5">
                        <motion.div 
                        initial={{
                            opacity: 0,
                            y: -20
                        }} 
                        transition={{
                            type: "spring",
                            stiffness: 80
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        className="relative w-full">
                            <Image src="/urban.svg" layout="fill" />
                        </motion.div>
                        <motion.div 
                        initial={{
                            opacity: 0,
                            y: -20
                        }} 
                        transition={{
                            type: "spring",
                            stiffness: 80
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        className="relative w-full">
                            <Image src="/travelers-svg.svg" layout="fill" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}