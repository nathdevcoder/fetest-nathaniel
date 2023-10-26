import Link from 'next/link'
import React from 'react'
import style from './NavLink.module.scss'
import Image from 'next/image'
import { Urbanist } from 'next/font/google' 

const urbanist = Urbanist({ subsets: ['latin'] })

export default function NavLink({icon, text, link, open}: {icon:string, text: string, link: string, open: boolean} ) {
  return (
    <Link href={link}>
        <div className={ open ? style.NavLinks : style.NavLinksOpen}>
         <Image 
            src={icon}
            alt="Nav Toggle"
            width={20}
            height={20}
            priority
        />
        <p className={urbanist.className} >{text}</p>
        </div>
    </Link>
  )
}
