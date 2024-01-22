'use client'
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from 'next/link';

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
    <nav className="flexBetween padding-container fixed top-0 w-full left-0 right-0 z-30 py-3" style={{ padding: '1rem 2rem', background:"#0B82CF", borderBottom:"1px solid #73BAE8" }}>
    <div className="flex gap-2 flex-row">
      <Link href="/">
          <div className="flex gap-2">
            <Image src="/michuLogo.png" alt="logo" width={50} height={50} style={{ borderRadius: '0.25rem' }} />
            <div className="text-white text-xl">
              <h1>MICHUTECH</h1>
              <p>Connect to your future</p>
            </div>
          </div>
      </Link>
    </div>
    <ul className="hidden h-full gap-12 lg:flex">
      {NAV_LINKS.map((link) => (
        <li key={link.key} className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
        <Link href={link.href}>
          <div
            className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            onClick={() => scrollToSection(link.id)}
          >
            {link.label}
          </div>
        </Link>

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
