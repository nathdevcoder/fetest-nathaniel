
import Image from 'next/image'
import React from 'react'
import style from './Card.module.scss' 


export default function CardPetDetail({breed, sex, age, birthday}: {breed: string, sex: "Male" | "Femail", age: string, birthday: string}) {
    const Field = ({text, icon, content}: {text:string,icon:string, content: string}) => (
        <div>
            <div><Image  src={ icon } alt="Logo" width={20} height={20} /> <span>{text}</span></div> 
            <p>{content}</p>
        </div>
    )
  return (
    <div className={style.CardDetail}> 
        <Field text='Breed' icon='/icbreed.svg' content={breed}></Field>  
        <Field text='Sex' icon='/icsex.svg' content={sex}></Field>  
        <Field text='Age' icon='/icage.svg' content={age}></Field>  
        <Field text='Birthday' icon='/iccalendar.svg' content={birthday}></Field>  
    </div>
  )
}
