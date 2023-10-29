import React from 'react'
import style from './File.module.scss'
import Image from 'next/image'

type FileFielType = {
    inputVal: {val: null | File, notvalid: boolean, msg: string}
    Url: string | null
    SetVal: (e: React.ChangeEvent<HTMLInputElement> ) => void
    label: string 
}

export default function FileInput({inputVal, SetVal, label, Url}: FileFielType) {
  return (
    <div className={style.FileInputWrapper}>
        <div className={style.FileInputImages}>
            <Image src={Url || '/placeholder.jpg'} height={70} width={70} alt='avatar'/>
        </div>
        <div className={style.FileInputFields}>
            <label>{label}</label>
            <input type='file' onChange={SetVal} accept=".jpg, .jpeg, .png"/>
            {inputVal.notvalid && <p>{inputVal.msg}</p>}
        </div>
    </div>
  )
}
