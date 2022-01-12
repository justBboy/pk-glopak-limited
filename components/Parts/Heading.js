import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

export default function Heading({title, className}){
    const {ref: headingRef, inView: headingInView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    return (
        <motion.h1 
                ref={headingRef}
                initial={{
                    opacity: 0,
                    scale: 0.3
                }} 
                transition={{
                    type: "spring",
                    stiffness: 300,
                }}
                animate={{
                    opacity: headingInView ? 1 : 0,
                    scale: headingInView ? 1 : 0
                }}
                className={`capitalize font-black text-black/50 md:text-md sm:text-4xl ${className}`}>{title}</motion.h1>
    )
}