"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export function Banner() {
  return (
    <section className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center">
      <div className="max-w-2xl lg:max-w-4xl mx-auto p-4 text-center">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b dark:from-rose-200 dark:to-rose-500 from-rose-500 to-rose-900  text-center font-sans font-bold">
          RED PLANET QUEST
        </h1>
        <p></p>
        <p className="text-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to RedPlanetQuest, your gateway to the ultimate adventure of a
          lifetime – a visit to Mars! Whether {`you're`} a seasoned space
          enthusiast or a curious explorer, RedPlanetQuest offers a seamless and
          engaging application process to help you prepare for this
          extraordinary journey. Begin your quest today and take the first step
          towards exploring the Red Planet!
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{
          delay: 0.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.5,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-0 right-0 flex items-center justify-center z-10"
      >
        <DoubleArrowDownIcon className="mx-auto size-6 text-foreground" />
      </motion.div>
      <BackgroundBeams />
    </section>
  );
}
