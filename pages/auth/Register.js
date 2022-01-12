import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Navbar } from "../../components";
import { setPage } from "../../store/actions";
import { useStore } from "../../store/store";

export default function Register(){
    const [_, dispatch] = useStore();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        dispatch(setPage('auth/register')) 
    }, [])

    const handleSubmit = () => {
        console.log("submit")
    }
    return (
        <motion.div
        className="overflow-x-hidden bg-bg-dark min-h-screen relative"
        initial={{
            opacity: 0.4,
            }}
            transition={{
            type: "spring",
            stiffness: 80
            }}
            animate={{
            opacity: 1,
            }}
            exit={{
            opacity: 0.4
            }}
        >
            <Head>
                <title>Pk Glopak - Register</title>
                <meta name="description" content="Pk Glopak limited website registration page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                <div className="container mx-auto py-[100px] flex flex-col relative z-1 items-center w-full">
                    <h3 className="text-md font-extrabold capitalize text-dark-gray">Create An Account</h3>
                    <div className="mt-6 mb-5 flex flex-col items-center sm:items-start">
                        <div className="flex items-center flex-col sm:flex-row">
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
                            opacity: 1, 
                            y: 0
                        }}
                     className="mb-2">
                        <label className="block text-text-light font-normal text-sm" htmlFor="username">Username: </label>
                        <input placeholder="e.g AnsuKwasi" className="outline-none border border-text-light w-[310px] sm-[420px] sm:w-[340px] h-[40px] p-5 text-dark-gray bg-light-gray rounded-md focus:border-2 transition-all" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                    </motion.div>
                        <motion.div 
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
                            opacity: 1, 
                            y: 0
                        }}
                     className="mb-2 sm:ml-3">
                         <div className="flex justify-between">
                            <label className="block text-text-light font-normal text-sm" htmlFor="Phone">Phone: </label>
                         </div>
                        <input placeholder="e.g 024**********" className="outline-none border border-text-light w-[310px] sm:w-[340px] h-[40px] p-5 text-dark-gray bg-light-gray rounded-md focus:border-2 transition-all" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
                    </motion.div>
                        </div>
                        
                    <motion.div 
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
                            opacity: 1, 
                            y: 0
                        }}
                     className="mb-2 mt-5">
                         <div className="flex justify-between">
                            <label className="block text-text-light font-normal text-sm" htmlFor="email">Email: </label>
                         </div>
                        <input placeholder="e.g ansukwasi99@gmail.com" className="outline-none border border-text-light w-[310px] sm:w-[340px] h-[40px] p-5 text-dark-gray bg-light-gray rounded-md focus:border-2 transition-all" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    </motion.div>
                    
                    <motion.div 
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
                            opacity: 1, 
                            y: 0
                        }}
                     className="mb-2 mt-5">
                         <div className="flex justify-between">
                            <label className="block text-text-light font-normal text-sm" htmlFor="password">Password: </label>
                         </div>
                        <input placeholder="e.g **********" className="outline-none border border-text-light w-[310px] sm:w-[340px] h-[40px] p-5 text-dark-gray bg-light-gray rounded-md focus:border-2 transition-all" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                    </motion.div>
                    <motion.div 
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
                            opacity: 1, 
                            y: 0
                        }}
                     className="mb-2 mt-5">
                         <div className="flex justify-between">
                            <label className="block text-text-light font-normal text-sm" htmlFor="confirmPassword">Confirm Password: </label>
                         </div>
                        <input placeholder="e.g **********" className="outline-none border border-text-light w-[310px] sm:w-[340px] h-[40px] p-5 text-dark-gray bg-light-gray rounded-md focus:border-2 transition-all" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
                    </motion.div>

                   <motion.div 
                   className="mt-3"
                        initial={{
                            opacity: 0,
                            y: -20
                        }} 
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            delay: 0.6
                        }}
                        animate={{
                            opacity: 1,
                            y: 0 
                        }}
                    >
                        <button 
                        
                        onClick={handleSubmit} className="mb-2 mt-4 sm:w-[340px] w-[310px] h-[40px] flex justify-center items-center text-white/80 rounded-md bg-lighter">
                            <span>Register</span>
                        </button>
                    </motion.div>
                    </div>
                </div>

                <footer className="border-t border-text-light w-full h-[70px] bg-bg-dark fixed bottom-0 px-5 z-40 flex items-center">
                        <h6 className="text-text-light text-sm font-bold">©Copyright 2021 Pk-Glopak. All Rights Reserved</h6>
                </footer>
            </main>
        </motion.div>
    )
}