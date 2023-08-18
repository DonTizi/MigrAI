"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";

const font = Montserrat({ weight: '400', subsets: ['latin'] });

export const LandingFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white p-4  bottom-0 w-full flex items-center justify-center" style={{ backgroundColor: '#172447' }}>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="flex items-center space-x-4">
          <p className={`${font.className}`}>© {currentYear} MigrAI inc. All Rights Reserved.</p>
          <a href="https://www.facebook.com/imigrai" target="_blank" rel="noopener noreferrer" className={`hover:text-gray-400 transition duration-300 ${font.className}`}>
            <Image src="/facebook.png" alt="Facebook Icon" width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/company/migrAI/" target="_blank" rel="noopener noreferrer" className={`hover:text-gray-400 transition duration-300 ${font.className}`}>
            <Image src="/linkedin.png" alt="LinkedIn Icon" width={24} height={24} />
          </a>
          <a href="/privacy-policy" className={`hover:text-gray-400 transition duration-300 ${font.className}`}>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
