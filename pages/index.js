import Head from 'next/head'
import {Navbar} from '../components';
import About from '../components/About';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhyUs from '../components/WhyUs';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useStore } from '../store/store';
import { setPage } from '../store/actions';

export default function Home() {
  const [_, dispatch] = useStore();
  useEffect(() => {
    dispatch(setPage('home')) 
  }, [])
  return (
    <motion.div 
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
    className="min-h-screen overflow-x-hidden mx-auto">
      <Head>
        <title>Pk Glopak - Home</title>
        <meta name="description" content="Pk Glopak limited website home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <WhyUs />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
    </motion.div>
  )
}
