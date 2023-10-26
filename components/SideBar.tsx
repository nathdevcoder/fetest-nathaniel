'use client'

import React, { useState }from 'react'
import Image from 'next/image'
import style from './SideBar.module.scss'
import NavLink from './snippets/NavLink'

export default function SideBar() {
    const [active, setActive] = useState(true)
  return (
    <>
        <div className={ active ? style.SideBarActive : style.SideBar }>
            <button onClick={()=>setActive(!active)} className={style.SideBarBtn}>
                <Image 
                src={active ? "/tfchevron.svg" : "/trchevron.svg"}
                alt="Nav Toggle"
                width={20}
                height={20}
                priority
                />
            </button>
            <div className={style.SideBarLogo}>
                <Image 
                src={active? '/Top.svg' : '/Logo.svg'}
                alt="Logo"
                width={103}
                height={36}
                priority
                />
            </div>
            <div className={style.SideBarLinks}>
                <NavLink icon='/home.svg' text='Home' link='/' open={active} />
                <NavLink icon='/appointments.svg' text='Appointments' link='/' open={active} />
                <NavLink icon='/messages.svg' text='Message' link='/messages' open={active} />
                <NavLink icon='/contacts.svg' text='Contacts' link='/contacts' open={active} />
                <NavLink icon='/analytics.svg' text='Data Analytics' link='/analytics' open={active} />
                <NavLink icon='/subscription.svg' text='Subscription' link='/subscription' open={active} />
                <NavLink icon='/center.svg' text='Help Center' link='/help' open={active} />
                <NavLink icon='/settings.svg' text='Settings' link='/setting' open={active} />
            </div>
            <div className={style.SideBarFooter}>
                <div>
                    <Image 
                    src="/Vector.svg"
                    alt="Logo in footer"
                    width={20}
                    height={20}
                    priority
                    />
                    <p>© Lorem 2023</p>
                </div>
            </div>
        </div>
        <div className={active ? style.SideBarSpaceActive : style.SideBarSpace}></div>
    </>
  )
}
