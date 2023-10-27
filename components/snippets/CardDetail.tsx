import React from 'react'
import style from './Card.module.scss' 
import Image from 'next/image'

export default function CardDetail({email, phone, address, heading}: {email: string, phone: string, address: string, heading?: string}) {


    const Field = ({text, icon, content}: {text:string,icon:string, content: string}) => (
        <div>
            <div><Image  src={ icon } alt="Logo" width={20} height={20} /> <span>{text}</span></div> 
            <p>{content}</p>
        </div>
    )

  return (
    <div className={style.CardDetail}>
        {heading && <h6>{heading}</h6>}
        <Field text='Email' icon='/icmessages.svg' content={email}></Field>  
        <Field text='Phone' icon='/icphone.svg' content={phone}></Field>  
        <Field text='Address' icon='/icpin.svg' content={address}></Field>  
    </div>
  )
}
