"use client";
import {
  ArrowDownward,
  GitHub,
  Instagram,
  LinkedIn,
  OpenInNew,
} from "@mui/icons-material";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const socials = [
  {
    link: "https://github.com/UniverseVG",
    icon: <GitHub className="text-3xl" />,
  },
  {
    link: "https://www.linkedin.com/in/varun-gm-86694a1a4/",
    icon: <LinkedIn className="text-3xl" />,
  },
  {
    link: "https://www.instagram.com/varungm24/",
    icon: <Instagram className="text-3xl" />,
  },
];

const Hero = () => {
  return (
    <section id="Home">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center gap-4 relative h-screen w-full"
      >
        {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" /> */}
        <h1 className="text-xl font-bold">Hi, I am</h1>
        <p className="text-5xl font-bold text-gradient text-center">
          VARUN G M
        </p>
        <TypeAnimation
          sequence={[
            "Javascript Developer",
            1000,
            "Frontend Developer",
            1000,
            "Full-Stack Developer",
            1000,
            "React/Next Developer",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-3xl md:text-4xl text-center "
        />
        <p className="text-xl sm:text-2xl sm:w-6/12 mx-3 text-center my-4">
          A passionate Full-Stack Developer with 1+ years of experience, I
          bridge the gap between creativity and functionality by crafting
          beautiful and functional web and mobile applications.
        </p>
        <div className="flex items-center gap-3 z-40">
          <Link href="#Projects">
            <button className="btn">
              View Projects <ArrowDownward />
            </button>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1Zio3dZXxgBU5uJ9k6I1itrSNIyJBTLZ2/view?usp=sharing"
            target="_blank"
          >
            <button className="btn-bordered">
              Open PDF Resume <OpenInNew />
            </button>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-2 dark:bg-white bg-gray-900 dark:text-gray-900 text-white rounded-full px-4 py-2 mt-4">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              className="hover:scale-110 transition"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        {/* <BackgroundBeams /> */}
      </motion.div>
    </section>
  );
};

export default Hero;
