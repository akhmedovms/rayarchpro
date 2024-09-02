import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="bg-[#151515] pl-40 h-[788px] 2xl:h-[px] overflow-y-auto flex justify-between relative space-x-10 "
      ref={ref}
    >
      <div className="py-[20%] relative flex">
        <div className="">
          {content.map((item, index) => (
            <div key={item.title + index} className="pb-[65%]">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  transition: {
                    duration: 0.8,
                  },
                }}
                className="text-4xl  text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  transition: {
                    duration: 0.8,
                  },
                }}
                className=" text-xl text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block w-[720px] bg-[var(--neutral-900)] overflow-hidden sticky top-0 left-0">
        <AnimatePresence>
          <motion.div
            key={activeCard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`${cn(contentClassName)} `}
          >
            {content[activeCard]?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
