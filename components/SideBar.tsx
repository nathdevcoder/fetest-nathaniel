'use client'

import React, { useState }from 'react'
import Image from 'next/image'
import style from './SideBar.module.scss'
import NavLink from './snippets/NavLink' 
import HomeIcon from './icons/HomeIcon'
import AppointmentIcon from './icons/AppointmentIcon'
import MessageIcon from './icons/MessageIcon'
import ContactIcon from './icons/ContactIcon'
import AnalyticsIcon from './icons/AnalyticsIcon'
import SubscriptionIcon from './icons/SubscriptionIcon'
import HelpIcon from './icons/HelpIcon'
import SettingsIcon from './icons/SettingsIcon'
import { Urbanist } from 'next/font/google'


const urbanist = Urbanist({ subsets: ['latin'] })

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
                <div className={ active ? style.Open : style.NotOpen }>
                    <Image src={'/Logo.svg'}  alt="Logo" width={36} height={36} priority />
                    <p className={ active ? style.Open : style.NotOpen }>LOREM</p>
                </div>
            </div>
            <div className={style.SideBarLinks}> 
                <NavLink icon={<HomeIcon />} text='Home' link='/' open={active} />
                <NavLink icon={<AppointmentIcon />} text='Appointments' link='/' open={active} />
                <NavLink icon={<MessageIcon />} text='Message' link='/messages' open={active} />
                <NavLink icon={<ContactIcon/>} text='Contacts' link='/contacts' open={active} />
                <NavLink icon={<AnalyticsIcon />} text='Data Analytics' link='/analytics' open={active} />
                <NavLink icon={<SubscriptionIcon />} text='Subscription' link='/subscription' open={active} />
                <NavLink icon={<HelpIcon />} text='Help Center' link='/help' open={active} />
                <NavLink icon={<SettingsIcon />} text='Settings' link='/setting' open={active} />
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
