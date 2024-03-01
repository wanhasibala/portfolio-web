import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className=" p-4 md:p-8 my-20">
      <h1 className="max-w-[1440px] text-secondary-800  text-heading-2 mx-auto text-center">
        A Quick Glance of My past Project
      </h1>

      <div className="mx-auto max-w-[1440px] ">
        <Link heading="ADS VIDEO" year="2018" imgSrc="/Intersect.webp" href="#" />
        <Link heading="Clients" year="2019" imgSrc="/Intersect.webp" href="#" />
        <Link
          heading="Portfolio"
          year="2017"
          imgSrc="/Intersect.webp"
          href="#"
        />
       
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, year, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8  "
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className=" relative z-5 block text-4xl  text-secondary-700 transition-colors duration-500 group-hover:text-secondary-700 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0 },
          whileHover: { scale: 1, rotate: "0deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 object-cover md:h-48 md:w-64 "
        alt={`Image representing a link for ${heading}`}
      />
      <span className=" relative z-10 mt-2 block text-base text-secondary-800 transition-colors duration-500 group-hover:text-secondary-700">
        {year}
      </span>
      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-secondary-700" />
      </motion.div>
    </motion.a>
  );
};
