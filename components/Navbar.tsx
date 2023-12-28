import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

export default function Navbar () {
  return (
    <nav className="flexBetween padding-container fixed top-0 w-full left-0 right-0 z-30 py-5 bg-white" style={{padding:"1.5rem 2rem"}}>
      <div className="flex gap-2">
      <Link href="/" className="flex gap-2">
        <Image src="/michuTech-logo_1.png" alt="logo" width={100} height={100} style={{borderRadius:"0.25rem"}} />
        <h3 className="text-blue-800 text-xl">MichuTech IT Solutions</h3>
      </Link>
      </div>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
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
