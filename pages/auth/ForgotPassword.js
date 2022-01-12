import { motion } from "framer-motion";
import Head from "next/head"
import { Navbar } from "../../components";
export default function ForgotPassword(){
    const handleForgot = () => {
        console.log("forgot")
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
                <title>Pk Glopak - Forgot Password</title>
                <meta name="description" content="Pk Glopak limited website Forgot Password page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                <div className="container mx-auto py-[150px] flex flex-col items-center">
                    <p className="text-md font-normal text-left text-text-light w-full sm:w-1/2 px-5">
                        You have been sent an email to change password.
                        If the you haven't received an email yet, <a href="#" className="text-[#23f] font-bold" onClick={handleForgot}>Try Again</a>     
                    </p> 
                </div>

                <footer className="border-t border-text-light w-full h-[70px] fixed bottom-0 px-5 flex items-center">
                        <h6 className="text-text-light text-sm font-bold">©Copyright 2021 Pk-Glopak. All Rights Reserved</h6>
                </footer>
            </main>
        </motion.div>
    )
}