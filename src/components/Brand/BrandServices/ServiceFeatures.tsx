"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";

type ServiceFeaturesProps = {
  index: number;
  item: string;
  expanded: false | number;
  setExpanded: React.Dispatch<React.SetStateAction<false | number>>;
};

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({
  index,
  item,
  expanded,
  setExpanded,
}) => {
  const isOpen = index === expanded;
  const [title, description] = item.split(":").map((str) => str.trim());

  return (
    <li>
      <motion.button
        className="w-full px-6 xl:mx-6 mt-12 cursor-pointer bg-foreground text-background rounded-xl flex items-center justify-between"
        onClick={() => setExpanded(isOpen ? false : index)}
        whileTap={{ scale: 0.95 }}
        aria-expanded={isOpen}
      >
        <p className="text-xl p-6">{title}</p>
        <motion.div
          animate={{ rotate: isOpen ? "180deg" : "0deg" }}
          transition={{ duration: 0.4 }}
        >
          <AiOutlineDown aria-hidden="true" />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                scale: 1,
                height: "auto",
                transition: { opacity: { delay: 0.2 }, scale: { delay: 0.2 } },
              },
              collapsed: {
                opacity: 0,
                scale: 0.8,
                height: 0,
                transition: { height: { delay: 0.2 } },
              },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p className="text-xl pt-12 px-12">{description}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </li>
  );
};

export default ServiceFeatures;
