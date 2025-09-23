import Image from "next/image";
import Link from "next/link";
import { Linkedin, Youtube, Instagram, Twitter } from "lucide-react";
import { CgArrowsExchange } from "react-icons/cg";

export default function Footer({ dictionary }) {
  return (
    <footer className="bg-[#3B4650] text-white pt-12 pb-4 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* REACH US */}
          <div>
            <h3 className="flex flex-col  text-lg font-semibold mb-6 items-start justify-start">
              <span>{dictionary.footerHeading1}</span>

              {/* <span className="ml-2  w-8 h-[8px] bg-[#d2a97b]"></span> */}
              <CgArrowsExchange className="text-primary text-[40px] ml-[-10px]" />
            </h3>
            <div className="flex gap-3 mb-4">
              <div className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#d2a97b]"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">
                  {dictionary.footerHeading1Data1}
                </p>
                <p className="text-sm text-gray-300">
                  {dictionary.footerHeading1Data2}
                  <br />
                  {dictionary.footerHeading1Data3}
                  <br />
                  {dictionary.footerHeading1Data4}
                  <br />
                  {dictionary.footerHeading1Data5}
                </p>
              </div>
            </div>
            <Link
              href="https://maps.app.goo.gl/SA9xwjYR9MWThfre6"
              target="_blank"
              className="inline-block border border-[#d2a97b] text-[#d2a97b] px-6 py-2 text-sm hover:bg-[#d2a97b] hover:text-white transition-colors duration-300"
            >
              {dictionary.footerHeading1Data6}
            </Link>
            <div className="flex gap-3 mt-6 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#d2a97b]"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-sm">{dictionary.footerHeading1Data7}</span>
            </div>
          </div>

          {/* SITEMAP */}
          <div>
            <h3 className="flex flex-col  text-lg font-semibold mb-6 items-start justify-start">
              <span>{dictionary.footerHeading2}</span>
              <CgArrowsExchange className="text-primary text-[40px] ml-[-10px]" />
              {/* <span className="ml-2  w-8 h-[8px] bg-[#d2a97b]"></span> */}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/vision-and-mission"
                  className="text-sm hover:text-[#d2a97b] transition-colors"
                >
                  {dictionary.footerHeading2Data1}
                </Link>
              </li>
              <li>
                <Link
                  href="/#solution-section"
                  className="text-sm hover:text-[#d2a97b] transition-colors"
                >
                  {dictionary.footerHeading2Data2}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contactSection"
                  className="text-sm hover:text-[#d2a97b] transition-colors"
                >
                  {dictionary.footerHeading2Data3}
                </Link>
              </li>
              <li>
                <Link
                  href="/#newsSection"
                  className="text-sm hover:text-[#d2a97b] transition-colors"
                >
                  {dictionary.footerHeading2Data4}
                </Link>
              </li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h3 className="flex flex-col text-lg font-semibold mb-6 items-start justify-start">
              <span>{dictionary.footerHeading3}</span>
              <CgArrowsExchange className="text-primary text-[40px] ml-[-10px]" />
              {/* <span className="ml-2  w-8 h-[8px] bg-[#d2a97b]"></span> */}
            </h3>
            <ul className="space-y-1">
              {dictionary.solutionsItems.map((i) => (
                <li key={i.title}>
                  <span className="text-sm cursor-pointer hover:text-[#d2a97b] transition-colors ">
                    <Link href="/#solution-section">{i.title}</Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-600 bg-[#5c646a] px-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <Image
                src="/images/logo2.png"
                alt="Upwards Logo"
                width={150}
                height={40}
                className="brightness-0 invert"
              />
            </div>
            <div className="flex gap-4 text-sm text-gray-300">
              <Link href="#" className="hover:text-[#d2a97b] transition-colors">
                {dictionary.bottomFooterText1}
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-[#d2a97b] transition-colors">
                {dictionary.bottomFooterText2}
              </Link>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/upwardsuae/"
                className="text-white hover:text-[#d2a97b] transition-colors"
                target="_blank"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-[#d2a97b] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/upwards_ae/?igsh=MW9vNnh4amF1d2NtYQ%3D%3D#"
                className="text-white hover:text-[#d2a97b] transition-colors"
                target="_blank"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-[#d2a97b] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-6">
          {dictionary.bottomFooterText3}
        </div>
      </div>
    </footer>
  );
}
