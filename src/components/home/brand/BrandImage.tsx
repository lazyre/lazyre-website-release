"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { brandDataType } from "@/types/types";

interface BrandImageProps {
  activeBrand: brandDataType | null;
  prevBrand: brandDataType | null;
  nextBrand: brandDataType | null;
}

export default function BrandImage({
  activeBrand,
  prevBrand,
  nextBrand,
}: BrandImageProps) {
  return (
    <div className="sticky top-0 h-screen w-full">
      <AnimatePresence initial={false}>
        {activeBrand && (
          <motion.div
            key={activeBrand.id}
            className="absolute w-full h-screen opacity-100 py-24 pl-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="relative flex flex-col items-center h-full w-full rounded-xl overflow-hidden">
              <Image
                src={activeBrand.image}
                fill
                alt={`${activeBrand.title} brand image`}
                sizes="(max-width: 1200px) 100vw, 50vw"
                className="object-cover object-center"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {prevBrand && (
        <div className="hidden absolute w-full h-screen opacity-0 py-24 pl-12">
          <div className="relative flex flex-col items-center h-full w-full rounded-xl overflow-hidden">
            <Image
              src={prevBrand.image}
              fill
              alt={`${prevBrand.title} brand image`}
              sizes="(max-width: 1200px) 100vw, 50vw"
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>
      )}

      {nextBrand && (
        <div className="hidden absolute w-full h-screen opacity-0 py-24 pl-12">
          <div className="relative flex flex-col items-center h-full w-full rounded-xl overflow-hidden">
            <Image
              src={nextBrand.image}
              fill
              alt={`${nextBrand.title} brand image`}
              sizes="(max-width: 1200px) 100vw, 50vw"
              className="object-cover object-center"
              unoptimized
            />
          </div>
        </div>
      )}
    </div>
  );
}

// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// interface BrandImageProps {
//   image: string;
//   id: string;
//   brandInView: string;
// }

// export default function BrandImage({
//   image,
//   id,
//   brandInView,
// }: BrandImageProps) {
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={id}
//         className="absolute w-full h-screen py-24 pl-12"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.1, ease: "easeInOut" }}
//       >
//         <div className="relative flex flex-col items-center h-full w-full rounded-xl overflow-hidden">
//           <Image
//             src={image}
//             fill
//             alt={`${brandInView} brand image`}
//             sizes="(max-width: 1200px) 100vw, 50vw"
//             className="object-cover object-center"
//             priority
//           />
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }
