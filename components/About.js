import { useInView } from "react-intersection-observer"
import {motion} from "framer-motion";
import Heading from "./Parts/Heading";
export default function About(){
    const {ref: para1Ref, inView: para1InView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })
    const {ref: para2Ref, inView: para2InView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })
    const {ref: para3Ref, inView: para3InView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return(
        <div className="px-2 py-10 sm:p-10 relative overflow-hidden">
            <div className="container mx-auto text-center">
                <Heading title="About Us" /> 
                <div className="flex flex-col md:flex-row items-center justify-between py-2 sm:px-10 w-full h-auto">
                    <div className="w-full md:w-[70%] md:mx-auto text-center">
                        <motion.p 
                         ref={para1Ref}
                        initial={{
                            opacity: 0,
                            y: 50
                        }} 
                        transition={{
                            type: "spring",
                            stiffness: 300,
                        }}
                        animate={{
                            opacity: para1InView ? 1 : 0,
                            y: para1InView ? 0 : 50
                        }}
                        className="p-3 text-text-light font-normal">
                            PK GLOPAK LIMITED COMPANY is a prominent and outstanding company that’s reliable and trusted brand in Ghana for their services.  The Company provides Travel and tour services, Education Consultancy, General merchant and Import and Export of general goods.
                        </motion.p>
                        <motion.p 
                        ref={para2Ref}
                        initial={{
                            opacity: 0,
                            y: 50
                        }} 
                        transition={{
                            type: "spring",
                            stiffness: 300,
                        }}
                        animate={{
                            opacity: para2InView ? 1 : 0,
                            y: para2InView ? 0 : 50
                        }}
                        className="p-3 text-text-light font-normal">
                            We provide tourist and working permit visas, Hotel and Flight reservations, passport and birth certificate acquisition and study abroad with a guaranteed scholarship opportunity.
                        </motion.p>
                        <motion.p 
                        ref={para3Ref}
                        initial={{
                            opacity: 0,
                            y: 50
                        }} 
                        transition={{
                            type: "spring",
                            stiffness: 300,
                        }}
                        animate={{
                            opacity: para3InView ? 1 : 0,
                            y: para3InView ? 0 : 50
                        }}
                        className="p-3 text-text-light font-normal">
                            Since its inception in 2019, the company has grown sustainably and we can boost of our partnership with over 250 Chinese universities to secure admission and scholarship for students across the globe and provides visa services to over 20 countries.
                        </motion.p>
                    </div>
                    {/* <div className="w-full md:w-1/2 hidden md:block z-[-4] md:relative">
                        <div className="relative w-full h-[300px]">
                            <Image src="/flight.png" layout="fill" />
                        </div>
                    </div>
                    */}
                </div>
            </div>
        </div>
    )
}