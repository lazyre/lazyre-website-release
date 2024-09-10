import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function MoreWorkButton() {
  return (
    <li className="flex items-center justify-center">
      <Link
        href="/work"
        aria-label="View more projects"
        className="relative z-40 mt-12 h-32 w-32 cursor-pointer border rounded-full flex justify-center items-center"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ArrowUpRight className="text-text text-xl" />
        </div>
        <motion.div
          className="absolute w-full h-full"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 180 }}
        >
          <p className="sr-only">More</p>
          {"MORE  MORE".split("").map((char, index) => (
            <span
              key={index}
              className="absolute left-1/2 text-base origin-[0_4rem] pt-1"
              style={{ rotate: `${index * 30}deg` }}
            >
              {char}
            </span>
          ))}
        </motion.div>
      </Link>
    </li>
  );
}
