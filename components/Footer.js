import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer(){
    const {ref: buttonRef, inView: buttonInView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })
    return (
        <footer className="h-[100px] bg-md-gray flex flex-col justify-center relative">
            <div className="flex flex-col justify-center py-1 items-center">
                <motion.button
                        className="border-none py-2 px-5 bg-black text-white/80 z-20"
                        ref={buttonRef}
                        initial={{
                        opacity: 0,
                        scale: 0.4,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                        }}
                        animate={{
                            opacity: buttonInView ? 1 : 0,
                            scale: buttonInView ? 1 : 0,
                        }}
                        >
                            Book Service Now
                        </motion.button>
                <h6 className="text-dark-gray">©Copyright 2021 Pk-Glopak. All Rights Reserved</h6>
            </div>
        </footer>
    )
}