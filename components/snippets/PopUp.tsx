import React from 'react'
import style from './Popup.module.scss'
import Image from 'next/image'

type modalType = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<{open: boolean, message: string}>> 
    children: React.ReactNode
  }

export default function PopUp({setOpen, open, children}:modalType) {
  return (
    <div className={open? style.ModalActive : style.Modal} onClick={(e)=>{
        if(e.target == e.currentTarget) setOpen(st=>({...st, open: false}))
    }}>
        <div className={style.ModalContent}>
          <button onClick={()=>setOpen(st=>({...st, open: false}))} className={style.close}>
            <Image src={'/CloseRounded.svg'} alt="Logo" width={24} height={24} />
          </button>
          {children}
        </div>
    </div>
  )
}
