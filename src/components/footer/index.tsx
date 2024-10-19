import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineBehance,
  AiOutlineDribbble,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white py-12 px-6 md:px-12 lg:px-24 ">
      <div className="relative max-w-[100rem] mx-auto z-[60]">
        <div className="mb-12">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-7xl mb-4">
            Got an idea?
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center text-3xl md:text-5xl lg:text-7xl font-light hover:text-primary transition-colors"
          >
            <span className="underline decoration-primary">
              Let's talk about it
            </span>
            <span className="ml-2 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <ArrowUpRight className="text-primary" aria-hidden="true" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Tech",
                "Design",
                "Build",
                "Mechatronics",
                "Web",
                "Digitalytics",
                "Studio",
                "Lab",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/brand/${item.toLowerCase()}`}
                    className="hover:text-black transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              {[
                "Work",
                "Clients",
                "Culture",
                "Blogs",
                "News",
                "Team",
                "Contact",
                "Terms",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-black transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="mb-2">
              Email us at: <br />
              <a
                href="mailto:info@lazyre.com.com"
                className="text-xl font-bold hover:text-white transition-colors"
              >
                info@lazyre.com
              </a>
            </p>
            <p>
              Call us at: <br />
              <a
                href="tel:+911234567890"
                className="text-xl font-bold hover:text-white transition-colors"
              >
                +91 1234567890
              </a>
            </p>
          </div>
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://res.cloudinary.com/lazyre/image/upload/v1596660652/Lazyre/logo/lazyre_tech_logo_light_ciuerh.svg"
                alt="Lazyre logo"
                width={150}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mb-4">
              Full service tech agency based in{" "}
              <span className="block">Mangalore, India</span>
            </p>
            <div className="flex gap-4">
              <SocialLink
                href="https://instagram.com"
                aria-label="Follow us on Instagram"
              >
                <AiOutlineInstagram />
              </SocialLink>
              <SocialLink
                href="https://twitter.com"
                aria-label="Follow us on Twitter"
              >
                <AiOutlineTwitter />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com"
                aria-label="Connect with us on LinkedIn"
              >
                <FaLinkedinIn />
              </SocialLink>
              <SocialLink
                href="https://behance.net"
                aria-label="View our work on Behance"
              >
                <AiOutlineBehance />
              </SocialLink>
              <SocialLink
                href="https://dribbble.com"
                aria-label="Check our designs on Dribbble"
              >
                <AiOutlineDribbble />
              </SocialLink>
            </div>
          </div>
        </div>

        <div className="text-sm opacity-80">
          © {new Date().getFullYear()} Lazyre. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{
  href: string;
  children: React.ReactNode;
  "aria-label": string;
}> = ({ href, children, "aria-label": ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl hover:text-black transition-colors"
    aria-label={ariaLabel}
  >
    {children}
  </a>
);

export default Footer;
