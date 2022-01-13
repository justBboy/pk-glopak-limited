import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Navbar } from "../../components";
import { setPage } from "../../store/actions";
import { useStore } from "../../store/store";


export default function ChangePassword(){
    const [_, dispatch] = useStore();
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState("");
    useEffect(() => {
        let mounted = true
        if(mounted)
            dispatch(setPage('auth/change-password')) 
        return () => {mounted=false}
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
                <title>Pk Glopak - Change Password</title>
                <meta name="description" content="Pk Glopak limited website forgot password page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                <div className="container mx-auto py-[150px] flex flex-col items-center">
                    <h3 className="text-md font-extrabold capitalize text-dark-gray">Enter new password</h3>
                    <div className="mt-6 mb-5 flex flex-col items-center">
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
                        <label className="block text-text-light font-normal text-sm" htmlFor="newpassword">New Password: </label>
                        <input placeholder="********" type="password" className="outline-none border border-text-light w-[310px] sm-[420px] sm:w-[340px] h-[40px] p-5 text-dark-gray bg-light-gray rounded-md focus:border-2 transition-all" value={newPassword} onChange={(e) => {setNewPassword(e.target.value)}} />
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
                     className="mb-2 mt-5">
                         <div className="flex justify-between">
                            <label className="block text-text-light font-normal text-sm" htmlFor="confirmpassword">Confirm Password: </label>
                         </div>
                        <input placeholder="*********" type="password" className="outline-none border border-text-light w-[310px] sm:w-[340px] h-[40px] p-5 text-dark-gray bg-light-gray rounded-md focus:border-2 transition-all" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
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
                            delay: 0.3
                        }}
                        animate={{
                            opacity: 1,
                            y: 0 
                        }}
                    >
                        <button 
                        
                        onClick={handleSubmit} className="mb-2 mt-4 sm:w-[340px] w-[310px] h-[40px] flex justify-center items-center text-white/80 rounded-md bg-lighter">
                            <span>Change</span>
                        </button>
                    </motion.div>
                    </div>
                </div>

            </main>
        </motion.div>
    )
}