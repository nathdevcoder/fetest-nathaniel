import React from 'react'
import style from './Card.module.scss' 

export default function CardActions() {
  return (
    <div className={style.CardActions}>
        <button>Rechedle Appointment</button>
        <button> Cancel Appointment</button>
    </div>
  )
}
