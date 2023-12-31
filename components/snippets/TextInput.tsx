import React from 'react'
import style from './TextInput.module.scss'

type TextFielType = {
    inputVal: {
        notvalid:boolean
        val: string
        msg: string
    }
    SetVal: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    label: string 
}

export default function TextInput({inputVal, SetVal, label}:TextFielType) {
  return (
    <div className={style.TextInputWrapper}>
        <label>{label}</label>
        <div className={style.TextInputFields}>
          <input type="text" value={inputVal.val} className={inputVal.notvalid ? style.TextInputError : style.TextInput} onChange={SetVal}/>
          {inputVal.notvalid && <p>{inputVal.msg}</p>}
        </div>
    </div>
  )
}
