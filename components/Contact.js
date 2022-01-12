import { useState } from "react";
import Heading from "./Parts/Heading";
import {MdSend, MdOutlinePhone, MdLocationCity} from "react-icons/md";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

export default function Contact(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");

    const {ref: input1Ref, inView: input1InView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    const {ref: input2Ref, inView: input2InView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    const {ref: input3Ref, inView: input3InView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    const {ref: input4Ref, inView: input4InView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    const {ref: buttonRef, inView: buttonInView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    const handleSubmit = () => {
        console.log(submit)
    }
    return (
        <div className="bg-bg-dark min-h-[60vh] w-full overflow-x-hidden py-10">
            <Heading title="Contact Us" className="text-center mb-5 sm:mb-28" />
            <div className="flex flex-col justify-center items-center lg:flex-row container mx-auto">
                <div className="flex flex-col items-center lg:w-1/2 w-full">
                    <motion.div 
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
                        opacity: input1InView ? 1 : 0,
                        y: input1InView ? 0 : -20
                    }}
                    ref={input1Ref} className="mb-2">
                        <label className="block text-text-light font-normal text-sm" htmlFor="username">Username: </label>
                        <input placeholder="e.g Ansu Kwasi" className="outline-none border border-text-light w-[310px] sm-[420px] sm:w-[420px] h-[40px] p-5 text-dark-gray bg-light-gray rounded-md" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                    </motion.div>
                    <motion.div 
                    ref={input2Ref}
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
                            opacity: input2InView ? 1 : 0,
                            y: input2InView ? 0 : -20
                        }}
                    className="mb-2">
                        <label className="block text-text-light font-normal text-sm" htmlFor="email">Email: </label>
                        <input placeholder="e.g ansukwasi99@gmail.com" className="outline-none border border-text-light w-[310px] sm:w-[420px] h-[40px] p-5 text-dark-gray bg-light-gray rounded-md" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    </motion.div>
                    <motion.div 
                    ref={input3Ref}
                    initial={{
                        opacity: 0,
                        y: -20
                        }} 
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            delay: 0.3
                        }}
                        animate={{
                            opacity: input3InView ? 1 : 0,
                            y: input3InView ? 0 : -20
                        }}
                    className="mb-2">
                        <label className="block text-text-light font-normal text-sm" htmlFor="phone">Phone: </label>
                        <input placeholder="e.g ansukwasi99@gmail.com" className="outline-none border border-text-light w-[310px] sm:w-[420px] h-[40px] p-5 text-dark-gray bg-light-gray rounded-md" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
                    </motion.div>
                    <motion.div
                    ref={input4Ref}
                    initial={{
                        opacity: 0,
                        y: -20
                        }} 
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            delay: 0.4
                        }}
                        animate={{
                            opacity: input4InView ? 1 : 0,
                            y: input4InView ? 0 : -20
                        }}
                    >
                        <label className="block text-text-light font-normal text-sm" htmlFor="email">Message: </label>
                        <textarea value={message} contentEditable={false} onChange={(e) => {setMessage(e.target.value)}} className="w-[310px] sm:w-[420px] h-[220px] outline-none border text-dark-gray border-text-light p-5 bg-light-gray rounded-md"></textarea>
                    </motion.div>
                    <motion.div 
                        ref={buttonRef}
                        initial={{
                            opacity: 0,
                            y: -20
                        }} 
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            delay: 0.5
                        }}
                        animate={{
                            opacity: buttonInView ? 1 : 0,
                            y: buttonInView ? 0 : -20
                        }}
                    >
                        <button 
                        
                        onClick={handleSubmit} className="mb-2 mt-4 sm:w-[420px] w-[310px] h-[35px] flex justify-center items-center text-white/80 rounded-md bg-lighter">
                            <span>Send</span>
                            <MdSend className="ml-2" />
                        </button>
                    </motion.div>
                </div>
                <div className="lg:w-1/2 w-full flex lg:flex-col flex-col-reverse">
                    <div className="flex justify-evenly">
                        <div className="flex flex-col items-center py-3">
                            <div className="rounded-[50%] w-[80px] flex justify-center items-center h-[80px] border border-text-light">
                                <MdOutlinePhone className="text-5xl font-bold text-text-light" />
                            </div>
                            <div>
                                <h5 className="text-2xl font-semibold text-light-gray">024-94-25-811</h5>
                                <h5 className="text-2xl font-semibold text-light-gray">055-41-93-495</h5>
                                <h5 className="text-2xl font-semibold text-light-gray">020-72-42-084</h5>
                            </div>
                        </div> 
                        <div className="flex flex-col items-center py-3">
                            <div className="rounded-[50%] w-[80px] flex justify-center items-center h-[80px] border border-text-light">
                                <MdLocationCity className="text-5xl font-bold text-text-light" />
                            </div>
                            <div>
                                <h5 className="text-2xl font-semibold text-light-gray">Accra, Ghana</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-[310px] sm:w-full sm:h-[330px] h-[220px] relative shadow-md rounded-md overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63314.25954818463!2d-2.348714573192079!3d7.3380331737286975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdacf2948671391%3A0xb6cac72b91017af!2sSunyani!5e0!3m2!1sen!2sgh!4v1641950976466!5m2!1sen!2sgh" width="100%" height="100%" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )    
}