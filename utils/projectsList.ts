// prettier-ignore
import imagivate from "@/public/images/projects/imagivate.png";
import spacedrive from "@/public/images/projects/spacedrive.png";
import hyperpost from "@/public/images/projects/hyperpost.png";
////
import tailwind from "@/public/images/tailwind.svg";
import react from "@/public/images/react.svg";
import nextjs from "@/public/images/nextjs-icon.svg";
import mongodb from "@/public/images/mongodb.svg";
import typescript from "@/public/images/Typescript.svg";
import appwrite from "@/public/images/appwrite.svg";
import convex from "@/public/images/convex.svg";
import redux from "@/public/images/redux.svg";
import imagivateGallery from "./projectsGallery/imagivateGallery";
import shadcnui from "@/public/images/shadcn-ui.svg";
import spaceDriveGallery from "./projectsGallery/spaceDriveGallery";

const projects = [
  {
    image: imagivate,
    title: "Imagivate: An AI Image Modification Platform",
    body: "Designed and developed an AI image editing SaaS platform with Next.js and TypeScript for front-end, MongoDB for data management, Clerk for user authentication, Stripe for payments, and Cloudinary for image storage and manipulation. Implemented Cloudinary AI features like restoration, recoloring, object removal, generative filling, background removal, and comprehensive image search capabilities.",
    chips: [
      {
        img: nextjs,
      },
      {
        img: shadcnui,
      },
      {
        img: mongodb,
      },
      {
        img: tailwind,
      },
      {
        img: typescript,
      },
    ],
    images: imagivateGallery,
    preview: "https://imagivate.vercel.app/",
    github: "https://github.com/UniverseVG/Imagivate",
  },
  {
    image: spacedrive,
    title: "Space drive: File Storage",
    body: "Developed 'Space Drive,' a file storage app similar to Google Drive, with Convex as the backend solution for efficient data management. Integrated Clerk for secure authentication, employed role-based authentication used Next.js and TypeScript for the front-end and Shadcn UI components for the user interface. 'Space Drive' offers seamless file storage and sharing for individual and organizational users with intuitive design and robust security.",
    chips: [
      {
        img: nextjs,
      },
      {
        img: tailwind,
      },
      {
        img: typescript,
      },
      {
        img: shadcnui,
      },
      {
        img: convex,
      },
    ],
    images: spaceDriveGallery,
    preview: "https://space-drive-app.vercel.app/",
    github: "https://github.com/UniverseVG/space-drive",
  },
  {
    image: hyperpost,
    title: "HyperPost - A Blogging Website",
    body: "Hyperpost is a meticulously crafted blogging platform designed to empower content creators. Leveraging React.js for a dynamic frontend and Appwrite's robust BaaS functionality, Hyperpost offers a scalable and secure foundation for content management.  Tailwind CSS ensures a visually appealing user interface, while Redux facilitates seamless global state management. Hyperpost fosters a creative environment with an emphasis on user-friendliness and robust security.",
    chips: [
      {
        img: react,
      },
      {
        img: tailwind,
      },
      {
        img: redux,
      },
      {
        img: appwrite,
      },
    ],
    preview: "https://hyperpost.vercel.app/",
    github: "https://github.com/UniverseVG/hyperpost",
  },
];

export default projects;
