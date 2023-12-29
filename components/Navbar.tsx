'use client'
import { NAV_LINKS } from "@/constants"
import Image from "next/image"

export default function Navbar () {

  const scrollToSection = (id:any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
   <nav className="flexBetween padding-container fixed top-0 w-full left-0 right-0 z-30 py-5 bg-white" style={{ padding: '1.5rem 2rem' }}>
      <div className="flex gap-2 flex-row">
        <a href="#home">
          <Image src="/michuTech-logo_1.png" alt="logo" width={100} height={100} style={{ borderRadius: '0.25rem' }} />
          <h3 className="text-blue-800 text-xl">MichuTech IT Solutions</h3>
        </a>
      </div>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
          <a href={`${link.href}`} onClick={() => scrollToSection(link.id)}>
            {link.label}
          </a>
        </li>
        ))}
      </ul>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}
