import React from 'react'
import style from './Drawer.module.scss'
import Image from 'next/image'
import CardHeader from './snippets/CardHeader'
import CardDetail from './snippets/CardDetail'
import CardPetDetail from './snippets/CardPetDetail'
import CardActions from './snippets/CardActions'

type DrawerType = {
    onClose: () => void
}

export default function Drawer({onClose}:DrawerType) {
  return (
    <div className={style.Drawer}>
        <button onClick={onClose} className={style.close}><Image src={'/CloseRounded.svg'} alt="Logo" width={24} height={24} /></button>
        <div className={style.DrawerPaper}>
            <CardHeader avatar='https://randomuser.me/api/portraits/men/2.jpg' title='Chrissie LEe' subtitle='client' lg/>
        </div>
        <div className={style.DrawerPaper}>
            <CardDetail email='cha@gmail.com' phone='0923898' address='somewhere around the world' heading='CONTACT INFORMATION' />
        </div>
        <div className={style.DrawerPaper}>
            <CardHeader avatar='https://randomuser.me/api/portraits/men/1.jpg' title='Silvervale Towers' subtitle='Los Angeles' header='CLINIC DETAILs'/>
            <CardDetail email='cha@gmail.com' phone='0923898' address='somewhere around the world'/>
        </div>
        <div className={style.DrawerPaper}>
            <CardHeader avatar='https://randomuser.me/api/portraits/men/1.jpg' title='Silvervale Towers' subtitle='Los Angeles' header='Pet DETAILs'/>
            <CardPetDetail breed='Bull dog' sex='Male' age='10 months' birthday='january 12, 2022' />
        </div>
        <div className={style.DrawerPaper}>
            <CardActions />
        </div>
    </div>
  )
}
