import Link from 'next/link'
import React from 'react'
import style from './NavLink.module.scss' 
import { Urbanist } from 'next/font/google' 
import { usePathname } from 'next/navigation'

const urbanist = Urbanist({ subsets: ['latin'] })

export default function NavLink({icon, text, link, open}: {icon:React.ReactNode, text: string, link: string, open: boolean} ) {
  const pathname = usePathname()
  const selected = pathname === link && text !== 'Home'
  return (
    <Link href={link} style={{width: '100%'}} className={selected ? style.Selected : ""}>
        <div className={ open ? style.NavLinks : style.NavLinksOpen}>
          <div >
            <div style={{width: '20px', height:'20px', padding: 0, margin: 0}}>
              {icon}
            </div>
            <p className={urbanist.className}><span>{text}</span></p> 
          </div>
        </div>
    </Link>
  )
}
