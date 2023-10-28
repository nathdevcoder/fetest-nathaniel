import Link from 'next/link'
import React from 'react'
import style from './NavLink.module.scss'  
import { usePathname } from 'next/navigation'
 

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
            <p><span>{text}</span></p> 
          </div>
        </div>
    </Link>
  )
}
