import { motion } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";
import { Navbar } from "../../components";
import FooterPart from "../../components/Parts/FooterPart";
import { setPage } from "../../store/actions";
import { useStore } from "../../store/store";
import servicesNavigation from "../../constants/servicesNavigation.json";
import Link from "next/link";

export default function Book() {
  const [{ page }, dispatch] = useStore();
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(setPage("service/book"));
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0.4,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0.4,
      }}
      className="min-h-screen overflow-x-hidden mx-auto bg-bg-dark"
    >
      <Head>
        <title>Pk Glopak - Book Service</title>
        <meta
          name="description"
          content="Pk Glopak limited website book service page"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar>
          <div className="flex items-center">
            {servicesNavigation.map((nav) => (
              <div key={nav.target} className={`h-[70px] flex items-center text-center mx-2`}>
                <Link href={nav.target}>
                  <a
                    className={`text-black/80  ${
                      page == nav.page ? "bg-medium text-white/70" : ""
                    } hover:bg-medium hover:text-white/70 transition-colors p-5 text-sm ${
                      page == nav.page ? "text-white/90" : ""
                    } hover:text-white/80 text-xs md:text-xl lg:text-2xl`}
                  >
                    {nav.title}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </Navbar>

        <FooterPart />
      </main>
    </motion.div>
  );
}
