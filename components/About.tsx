import {
  Speed,
  WbIncandescent,
  Devices,
  RocketLaunch,
} from "@mui/icons-material";
import Image from "next/image";
import Photo from "@/assets/myPic.jpg";
import Link from "next/link";
import SlideUp from "@/utils/SlideUp";

const AboutMe = [
  {
    title: "Performance Obsessed",
    description:
      "I craft lightning-fast, responsive applications for flawless user experiences across all devices. (Includes SEO optimized)",
    icon: <Speed sx={{ fontSize: "60px" }} />,
  },
  {
    title: "Responsiveness",
    description:
      "I prioritize responsive design for a consistent and enjoyable experience, no matter what device your users choose.",
    icon: <Devices sx={{ fontSize: "60px" }} />,
  },
  {
    title: "Intuitive & Engaging",
    description:
      "Clean UIs and efficient APIs ensure your applications are not only functional but delightful to interact with.",
    icon: <WbIncandescent sx={{ fontSize: "60px" }} />,
  },
  {
    title: "Dynamic & Scalable",
    description:
      "Modern JavaScript expertise delivers engaging front-ends and robust backends that adapt and grow with your needs.",
    icon: <RocketLaunch sx={{ fontSize: "60px" }} />,
  },
];

const Info = [
  {
    title: "Name:",
    description: "VARUN G M",
  },
  {
    title: "Email:",
    description: "gmvarungmvarun32524@gmail.com",
  },
  {
    title: "Date of birth:",
    description: "24 May 2001 (23 Years Old)",
  },
  {
    title: "From:",
    description: "Bengaluru, India",
  },
];

const About = () => {
  return (
    <section id="About" className="section w-9/12 mx-auto pt-12 pb-10">
      <h3 className="text-5xl pt-10 font-semibold text-center">
        <span className="border-b-4 border-primary-main">About Me</span>
      </h3>
      <SlideUp>
        <div className="flex items-center justify-between pt-20">
          <div className="flex flex-col items-center gap-6 md:gap-4 mx-auto">
            <Image
              src={Photo}
              className="w-56 h-56 rounded-full bg-primary-main border-4 border-gray-900 dark:border-white"
              alt="VARUN G M"
            />
            <p className="text-xl font-bold text-primary-main border-b-2 border-primary-main ">
              Who am I?
            </p>
            <p className="text-base md:text-lg w-full md:w-8/12 text-center">
              I'm a Full-stack developer with 1+ years of experience. I build
              dynamic web and mobile apps using React (JS, Next.js, Native) and
              robust APIs with NestJS(Node.js). I leverage AWS (S3, CloudFront,
              Cognito) for deployment, security, and scalability. I use IaC with
              Terraform for efficient infrastructure provisioning.
            </p>
          </div>

          {/* <div className="flex flex-col gap-8 items-center">
          <div className="flex items-center bg-primary-main rounded-full h-14 w-14 text-center">
            <p className="text-9xl">2</p>
          </div>
          <p className="text-xl">Years of Experience</p>
        </div> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-between justify-items-center py-16 gap-y-6 md:gap-y-10  xl:gap-0">
          {Info.map((item, index) => (
            <SlideUp index={index} key={index} reverse>
              <div className="flex flex-col items-center md:items-start gap-2">
                <p className="text-base text-gray-400 dark:text-gray-400 ">
                  {item.title}
                </p>
                <p className="text-lg">{item.description}</p>
              </div>
            </SlideUp>
          ))}
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link href="#Contact">
            <p className="border-b-2 border-dashed border-primary-main hover:text-primary-main cursor-pointer">
              Let's make something special.
            </p>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center py-20 gap-y-10 xl:gap-0">
          {AboutMe.map((item, index) => (
            <SlideUp index={index} key={index}>
              <div className="flex flex-col items-center gap-2 ">
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary-main text-white">
                  {item.icon}
                </div>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-base text-gray-500 w-60 text-center">
                  {item.description}
                </p>
              </div>
            </SlideUp>
          ))}
        </div>
      </SlideUp>
    </section>
  );
};

export default About;
