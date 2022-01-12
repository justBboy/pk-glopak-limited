import Image from "next/image";
import { useEffect, useState, useRef, Fragment } from "react";
import Heading from "./Parts/Heading";
import { motion } from "framer-motion";

import services from "../constants/services.json";
import { useStore } from "../store/store";
import { setPage } from "../store/actions";

export default function Services() {
  const [{_}, dispatch] = useStore();
  const [currentService, setCurrentService] = useState(0);
  let timer = useRef(null);
  const [fixed, setFixed] = useState(false);
  const containerRef = useRef(null);
  const [containerInView, setContainerInView] = useState(false);

  const handleChange = (indx) => {
    if (!fixed) setFixed(true);
    setCurrentService(indx);
  };

  const handleChangeClick = (e, indx) => {
    e.preventDefault();
    if (!fixed) setFixed(true);
    setCurrentService(indx);
  };

  const handleAutoChange = () => {
    setCurrentService(currentService++ % services.length);
  };

  useEffect(() => {
    const checkInView = () => {
      if(!containerRef.current) return;
      if (window.scrollY >= containerRef.current.offsetTop + 150) {
        setContainerInView(false);
      } else if (window.scrollY >= containerRef.current.offsetTop - 150) {
        setContainerInView(true);
      } else {
        setContainerInView(false);
      }
    };
    window.addEventListener("scroll", checkInView);


    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []);

  useEffect(() => {
    const mounted = true;
    if(containerInView && mounted){
        dispatch(setPage('home/services'))
    }
    return () => {mounted=false}
  }, [containerInView])


  useEffect(() => {
    const mounted = true;
    if (fixed) {
      if (typeof timer.current == "number") clearInterval(timer.current);
    } else if (mounted) {
      if (!timer.current && !fixed)
        timer.current = setInterval(handleAutoChange, 10000);
    }

    return () => {
      mounted = false;
    };
  }, [fixed]);

  return (
    <div
      ref={containerRef}
      className="h-[100vh] flex flex-col p-3 md:p-10 relative bg-bg-dark z-10"
    >
      <div className="container sticky p-0 top-0 overflow-hidden mx-auto h-full" id="services">
        <Heading title="Services" className="text-center mb-3 sm:mb-0" />
        <div className="flex flex-col justify-center overflow-hidden h-full">
          <div className="flex flex-1 text-right flex-col lg:flex-row lg:justify-between">
            {services.map((serviceMain, currentIndx) => {
              if (currentIndx == currentService)
                return (
                  <Fragment key={serviceMain.title}>
                    <motion.div 
                     initial={{
                         opacity: 0,
                         scale: 0.4
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 50,
                          delay: 0.5
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0
                        }}
                    className="relative rounded overflow-hidden self-center my-3 mx-auto sm:min-w-[600px] sm:min-h-[320px] h-[180px] w-[310px] shadow-2xl">
                      <Image src={services[currentService].img} layout="fill" />
                    </motion.div>
                    <div className="w-full max-h-[70vh] min-h-[50vh] mt-[7%] lg:w-1/ pb-2 border-b border-b-light-gray sm:border-b-0 overflow-x-hidden overflow-y-auto">
                      <motion.h1
                        initial={{
                          opacity: 0,
                          scale: 0.3,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 130,
                          delay : 0.3
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0,
                        }}
                        className="text-center text-2xl text-black/70"
                      >
                        {services[currentService].title}
                      </motion.h1>

                      <div className="flex flex-wrap py-10 md:p-10">
                        {serviceMain.services.map((service, indx) => (
                          <div className="w-1/2" key={indx}>
                            <motion.h3
                              initial={{
                                opacity: 0,
                                scale: 0.3,
                                y: -30,
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 130,
                                delay: (indx/serviceMain.services.length) * 1,
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0,
                                y: -30,
                              }}
                              className="text-black/60 my-2 px-3"
                            >
                              {service.title}
                            </motion.h3>
                            {service.sub &&
                              service.sub.map((subService, subIndx) => (
                                <Fragment key={subIndx*indx}>
                                  <motion.h3
                                    initial={{
                                      opacity: 0,
                                      scale: 0.3,
                                      x: -30,
                                    }}
                                    transition={{
                                      type: "spring",
                                      stiffness: 130,
                                      delay: ((indx/serviceMain.services.length) * 1) + ((subIndx/service.sub.length) * 0.4),
                                    }}
                                    animate={{
                                      opacity: 1,
                                      scale: 1,
                                      x: 0,
                                    }}
                                    exit={{
                                      opacity: 0,
                                      scale: 0,
                                      x: -30,
                                    }}
                                    className="text-black/80 ml-4 my-2"
                                  >
                                    {subService}
                                  </motion.h3>
                                </Fragment>
                              ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Fragment>
                );
            })}
          </div>
          <div
            className={`transition-all duration-300 ${
              containerInView
                ? " opacity-100 bottom-[0]"
                : "opacity-50 bottom-[-120%]"
            } fixed left-0 right-0 z-[100] bg-white shadow-xl shadow-black w-full`}
          >
            <div className="container mx-auto flex justify-evenly h-full">
              {services.map((service, indx) => (
                <div
                  key={service.title}
                  onMouseEnter={() => {
                    handleChange(indx);
                  }}
                  className={`transition-colors p-5 sm:p-10 text-center ${
                    indx == currentService ? "bg-lighter text-white/70" : ""
                  }`}
                >
                  <a
                    href="#"
                    onFocus={(e) => handleChangeClick(e, indx)}
                    onClick={(e) => handleChangeClick(e, indx)}
                    className={`text-black/80 text-sm ${
                      currentService == indx ? "text-white/90" : ""
                    } hover:text-white/80 text-xs md:text-xl lg:text-2xl`}
                  >
                    {service.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
