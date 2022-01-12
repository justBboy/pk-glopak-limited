import Heading from "./Parts/Heading";
import { MdChildFriendly, MdPayment, MdBookOnline } from "react-icons/md"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

 
 export default function WhyUs(){
     const {ref: cont1Ref, inView: cont1InView} = useInView({
         threshold: 0.5,
         triggerOnce: true
     });
    const {ref: cont2Ref, inView: cont2InView} = useInView({
         threshold: 0.5,
         triggerOnce: true
     });
    const {ref: cont3Ref, inView: cont3InView} = useInView({
         threshold: 0.5,
         triggerOnce: true
     });
     return (
         <div className="min-h-[50vh] relative z-[1] bg-bg-dark pb-20 md:pb-40 py-20 overflow-x-hidden">
             <div className="container mx-auto">
                 <Heading title="Why Choose Us" className="text-center mb-5 sm:mb-28" />
                 <div className="flex flex-wrap justify-evenly">
                     <motion.div
                     ref={cont1Ref}
                     initial={{
                         opacity: 0,
                         y: -20
                     }} 
                     transition={{
                         type: "spring",
                         stiffness: 120,
                     }}
                     animate={{
                         opacity: cont1InView ? 1 : 0,
                         y: cont1InView ? 0 : -20 
                     }}
                     className="flex flex-col items-center w-[300px]">
                        <div className="rounded-[50%] w-[180px] flex items-center justify-center h-[180px] border-2 border-yellow">
                            <MdChildFriendly className="text-8xl text-yellow font-semibold" />
                        </div>
                        <h2 className="text-lg font-medium text-dark-gray" aria-label="Reliable">Reliable</h2>
                        <p className="text-sm text-text-light font-normal text-center">We are trust worthy and very transparent with our operations.</p>
                     </motion.div>
                    <motion.div 
                     ref={cont2Ref}
                     initial={{
                         opacity: 0,
                         y: -20
                     }} 
                     transition={{
                         type: "spring",
                         stiffness: 120,
                         delay: 0.1
                     }}
                     animate={{
                         opacity: cont2InView ? 1 : 0,
                         y: cont2InView ? 0 : -20 
                     }}
                    className="flex flex-col items-center w-[300px]">
                        <div className="rounded-[50%] w-[180px] flex items-center justify-center h-[180px] border-2 border-medium">
                            <MdPayment className="text-8xl text-medium font-semibold" />
                        </div>
                        <h2 className="text-lg font-medium text-dark-gray">Affordable</h2>
                        <p className="text-sm text-text-light font-normal text-center">Our charges are very affordable but most convenient</p>
                     </motion.div>
                    <motion.div 
                    ref={cont3Ref}
                     initial={{
                         opacity: 0,
                         y: -20
                     }} 
                     transition={{
                         type: "spring",
                         stiffness: 120,
                         delay: 0.2
                     }}
                     animate={{
                         opacity: cont3InView ? 1 : 0,
                         y: cont3InView ? 0 : -20 
                     }}
                    className="flex flex-col items-center w-[300px]">
                        <div className="rounded-[50%] w-[180px] flex items-center justify-center h-[180px] border-2 border-secondary">
                            <MdBookOnline className="text-8xl text-secondary font-semibold" />
                        </div>
                        <h2 className="text-lg font-medium text-dark-gray">Easy Booking</h2>
                        <p className="text-sm text-text-light font-normal text-center">Booking a service with us is made easy with less protocols</p>
                     </motion.div>
                 </div>
             </div>
         </div>
     )
 }