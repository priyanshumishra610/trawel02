import React from 'react';
import Image from 'next/image';

/**
 * Navbar section component with a black background, centered logo,
 * and split navigation links as described in the high-level design.
 */
const Navbar: React.FC = () => {
  const leftNavLinks = [
    { name: 'Journeys', href: '/journeys' },
    { name: 'Destination', href: '/destinations' },
    { name: 'Explore India', href: 'https://www.aabee-india.in/' },
  ];

  const rightNavLinks = [
    { name: 'Why Aabee', href: 'https://www.aabee-india.in/whyinbound' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const whiteLogo = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/logo-white-1.svg";
  const blackLogo = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/logo-black-2.svg";
  const menuIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/menu-icon-3.svg";

  return (
    <nav className="bg-black text-white w-full">
      {/* Desktop Navigation */}
      <div className="hidden min-[600px]:flex h-fit w-full items-center justify-around gap-12 bg-black px-4 py-12 font-display text-xl text-white">
        {/* Left Side Links */}
        <div className="flex gap-5 items-center">
          {leftNavLinks.map((link) => (
            <a key={link.name} href={link.href} className="group relative block h-[28px]">
              {link.name}
              <span className="absolute left-0 top-full h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Centered Logo */}
        <a href="/" className="flex items-center">
          <Image
            src={whiteLogo}
            alt="Aabee"
            width={300}
            height={48}
            className="mx-2 hover:cursor-pointer object-contain"
            priority
          />
        </a>

        {/* Right Side Links */}
        <div className="flex gap-5 items-center">
          {rightNavLinks.map((link) => (
            <a key={link.name} href={link.href} className="group relative block h-[28px]">
              {link.name}
              <span className="absolute left-0 top-full h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation (Shown only on small screens < 600px) */}
      <div className="flex min-[600px]:hidden h-fit w-full items-center justify-between gap-12 bg-white px-8 py-4 text-black">
        <a href="/" className="flex items-center">
          <Image
            src={blackLogo}
            alt="Aabee"
            width={150}
            height={40}
            className="object-contain"
          />
        </a>
        <button className="p-1 focus:outline-none">
          <Image
            src={menuIcon}
            alt="Menu"
            width={30}
            height={30}
            className="object-contain"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;