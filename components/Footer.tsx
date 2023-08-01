// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 absolute bottom-0 left-0 w-full">
      <ul className="flex gap-4 justify-center">
        <li>
          <a href="/about-us" className="text-black-300 hover:underline">
            About Us
          </a>
        </li>
        <li>
          <a href="/privacy-policy" className="text-black-300 hover:underline">
            Policies
          </a>
        </li>
      </ul>
      <div className="mt-2 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MigrAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
