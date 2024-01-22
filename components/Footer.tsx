import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  
  return (
    <footer id="footer" className="flexCenter mb-0 pb-6 pt-4 text-white" style={{background:"#0B82CF"}}>
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
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

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
          {FOOTER_LINKS.map((columns, columnIndex) => (
              <FooterColumn key={columnIndex} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-black">
                  {columns.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.destination}>
                        <p>{link.text}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
           ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
              <ul className="regular-14 flex gap-4 text-white">
                {
                  SOCIALS.links.map((link) => (
                    <Link href={link.destination} key={link.url}>
                      <span>
                        <Image src={link.url} alt="logo" width={24} height={24} />
                      </span>
                    </Link>
                  ))}
              </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
          <p className="regular-14 w-full text-center text-white">{new Date().getFullYear()} MichuTech IT Solutions | All rights reserved</p>
        </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

