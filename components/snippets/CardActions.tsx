'use client'
import React, { useState } from 'react'
import style from './Card.module.scss' 
import PopUp from './PopUp' 

export default function CardActions({id, propkey, reFetch, onClose}: {id: string, propkey: string, reFetch: ()=> Promise<void>, onClose: () => void}) {
  const [popup, setPopup] = useState({open: false, message: 'Cancel this appointment?'})

  async function onDelete() {
    try {
      const res = await fetch('/api/schedule', {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id, key:propkey})
      })
      if(!res.ok) throw Error('Failed to delete')
      const result = await res.json() as {success: boolean, message: string}
      if(result.success) {
        await reFetch()
        onClose()
      } else {
        setPopup({open: true, message: result.message})
      }
    } catch (error) {
        console.log(error);
        setPopup({open: true, message: 'oops, something went wrong'})
    }
  }

  return (
    <div className={style.CardActions}>
        <PopUp open={popup.open} setOpen={setPopup}>
            <div className={style.CardActionsDelete}> 
              <h6>{popup.message}</h6>
              <hr />
              <button onClick={onDelete} className={style.Primary}>Cancel</button>  
            </div>
        </PopUp>
        <button className={style.Primary} >Rechedule Appointment</button>
        <button className={style.Secondary} onClick={()=>setPopup({open: true, message: 'Cancel this appointment?'})}> Cancel Appointment</button>
    </div>
  )
}
