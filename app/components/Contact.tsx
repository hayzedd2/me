"use client";
import { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { Links } from "../contents/content";
import Pill from "./Pill";
const Contact = () => {
  const ref = useRef<SVGSVGElement | null>(null);
  const isInView = useInView(ref, { once: false });
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  return (
    <section className="py-10">
      <h3 className="text-[#949494] mb-2 font-[500] w-max decoration-dotted  underline underline-offset-2 ">
        Contact
      </h3>

      <p>
        You can contact me 
        <a href="mailto:azeezalhameen1@gmail.com">
          <Pill text="here" link />
        </a>
      </p>
      <div className="flex gap-3 mt-3">
        {Links.map((link, index) => {
          return (
            <div
              key={index}
              className="flex flex-col relative  gap-3 items-center justify-center"
            >
              <span
                style={{
                  backgroundColor: link.bg,
                  rotate: link.tilt,
                }}
                className={`transition-all top-[-3.5rem] absolute ${link.bg} duration-300 ${
                  hoveredIndex !== index
                    ? "opacity-0 translate-y-1"
                    : "opacity-100 translate-y-0"
                }  ease-in-out text-white p-3 rounded-[10px] text-[1.2rem]`}
              >
                {link.icon}
              </span>

              <a
                className={`${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-20"
                    : ""
                } transition-all  duration-300 relative ease-in-out`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                href={link.href}
                target="_blank"
              >
              <Pill text={link.name} link/>
               
              </a>
            </div>
          );
        })}
      </div>
      <svg
        ref={ref}
        width="91"
        height="47"
        className="mt-[20px]"
        viewBox="0 0 91 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: isInView ? 1 : 0,
          }}
          transition={{
            duration: 1.3,
          }}
          d="M1.00027 8.02632C1.20829 7.38781 1.52801 6.94701 1.9764 6.46374C3.73122 4.57239 6.13876 2.18479 8.6815 1.83645C10.6959 1.56049 12.8398 2.88027 14.1642 4.44749C17.1438 7.9733 17.2946 13.807 16.9831 18.3293C16.6396 23.3147 15.3759 28.1666 14.0638 32.9269C13.0552 36.5863 12.1883 40.4266 10.652 43.8752C10.5836 44.0286 9.61773 46.3642 9.21973 45.9519C8.89522 45.6157 8.94955 44.616 8.95518 44.2381C8.98853 41.9993 9.28758 39.7424 9.58463 37.5341C10.7976 28.5165 12.7403 19.3829 15.6147 10.8289C16.4639 8.30166 17.464 5.85976 18.7893 3.59059C19.088 3.0792 20.1876 0.839842 21.0335 1.00979C21.8884 1.18156 22.0674 3.71671 22.1464 4.31643C22.7399 8.81784 22.642 13.4313 22.8398 17.9664C22.9866 21.3333 23.2993 24.6672 23.8341 27.9871C24.1553 29.9808 24.447 32.8345 25.8776 34.3383C28.1711 36.7492 32.2575 23.5242 32.6739 22.1199C33.0466 20.8629 33.3865 19.5927 33.7413 18.3293C34.0088 17.3768 33.7671 19.2305 33.7595 19.3475C33.6233 21.4544 33.6121 26.5144 36.6331 26.1524C39.7903 25.774 42.0969 21.5863 44.1593 19.3072C45.0442 18.3293 45.2885 23.1506 45.3361 23.7732C45.6866 28.3568 46.2533 34.6366 43.6575 38.6228C40.956 42.7714 36.5523 44.2057 32.2178 45.0849C30.7582 45.381 28.4787 45.8599 27.0362 45.1353C26.4654 44.8486 27.9182 44.1098 28.1856 43.855C29.3511 42.7446 30.4419 41.692 31.7799 40.8306C40.4658 35.2384 49.8793 30.3949 57.2867 22.7247C57.88 22.1103 58.4542 21.4749 59.0291 20.8396C59.0673 20.7973 59.487 20.3072 59.5126 20.3355C59.8483 20.7065 57.4345 26.2486 57.1954 26.9992C56.8509 28.0809 56.3169 29.8113 56.7667 30.9712C57.4356 32.696 61.9334 29.2043 62.596 28.6122C64.5866 26.8331 66.257 24.4459 67.7411 22.1602C68.1088 21.594 71.4098 15.7047 69.4015 15.5973C66.3931 15.4365 69.1431 26.9476 71.4084 28.0275C76.2856 30.3524 79.6493 21.784 80.3668 17.9462C80.5828 16.7911 80.7723 15.6005 80.8047 14.4178C80.8157 14.0182 81.0181 15.1819 81.1149 15.5671C81.7338 18.0318 82.5339 24.2524 85.4025 25.0132C87.8093 25.6515 88.9414 20.4214 89.015 18.6721C89.0298 18.3209 88.9931 17.5786 88.942 18.4806C88.8418 20.2524 88.9916 22.1168 89.1884 23.874C89.3844 25.6254 90.0003 27.5017 90.0003 29.2574"
          stroke="#3A3A3A"
          strokeWidth="2"
          stroke-linecap="round"
        />
      </svg>
    </section>
  );
};

export default Contact;
