import React from 'react'
import style from './Card.module.scss'
import Image from 'next/image'

export default function CardHeader({avatar, title, subtitle, header, lg = false}: {avatar: string, title: string, subtitle: string, header?:string, lg?:boolean}) {
  return (
    <div className={style.CardHeader}>
        {header && <h6>{header}</h6>}
        <div>
            <Image src={avatar} alt="title" height={lg ? 80 : 52 } width={lg ? 80 : 52 }/>
            <div>
                {lg ? <h5>{title}</h5> : <h4>{title}</h4>}
                <p>{subtitle}</p>
            </div>
        </div>
    </div>
  )
}
