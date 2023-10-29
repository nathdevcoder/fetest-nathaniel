import React from 'react'
import style from './Drawer.module.scss'
import Image from 'next/image'
import CardHeader from './snippets/CardHeader'
import CardDetail from './snippets/CardDetail'
import CardPetDetail from './snippets/CardPetDetail'
import CardActions from './snippets/CardActions'

type DrawerType = {
    onClose: () => void
    appointment: singleAppointmentType | null
    loading: boolean
    reFetch: () => Promise<void>
    identifier: string
}

export default function Drawer({onClose, appointment, loading, identifier, reFetch}:DrawerType) {
  return (
    <div className={style.Drawer}>
        <button onClick={onClose} className={style.close}><Image src={'/CloseRounded.svg'} alt="Logo" width={24} height={24} /></button>
        { loading ? <div className={style.DrawerPaper}>Loading</div>
        : appointment ?  ( <>
            <div className={style.DrawerPaper}>
                <CardHeader avatar={appointment.avatar|| '/placeholder.jpg'} title={appointment.owner} subtitle='client' lg/>
            </div>
            <div className={style.DrawerPaper}>
                <CardDetail email={appointment.email} phone={appointment.phone} address={appointment.address} heading='CONTACT INFORMATION' />
            </div>
            <div className={style.DrawerPaper}>
                <CardHeader avatar={appointment?.vetDetail.image || '/placeholder.jpg'} title={appointment.vetDetail?.building} subtitle='Los Angeles' header='CLINIC DETAILS'/>
                <CardDetail email={appointment.email} phone={appointment.vetDetail?.contact_number} address='somewhere around the world'/>
            </div>
            <div className={style.DrawerPaper}>
                <CardHeader avatar={appointment.petimage || '/placeholder.jpg'} title={appointment.name} subtitle={appointment.pet} header='PET DETAILS'/>
                <CardPetDetail breed={appointment.breed} sex={appointment.gender as ("Male" | "Female")} age={appointment.age} birthday='january 12, 2022' />
            </div>
            <div className={style.DrawerPaper}>
                <CardActions id={identifier} propkey={appointment.key} reFetch={reFetch} onClose={onClose} appointment={appointment} />
            </div>
        </> ) 
        : <div className={style.DrawerPaper}>No Appointment Data</div>}
    </div>
  )
}
