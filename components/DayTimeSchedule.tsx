import React from 'react'
import style from './DayTimeSchedule.module.scss'
import {timeSlots} from '../data/timeSlot' 
import AppointmentCard from './snippets/Time'

type dataType = {
  appointments:  appointmentRespondType
}

export default function DayTimeSchedule({appointments}: dataType) {
  return (
    <div className={style.Time}>
        <div className={style.TimeTable}>
            {timeSlots.map(tm=>(
                <div key={Math.random()} className={style.TimeSlot}>
                    <div>{tm}</div>
                    <div></div>
                </div>
            ))}
            {appointments.map(ap=>(
              <AppointmentCard 
                top={ap.top} 
                bottom={ap.bottom} 
                detail={{
                  title: ap.title, 
                  start: ap.start, 
                  end: ap.end,
                  type: ap.title,
                  accounts: [{id: ap.id, name: ap.name }]
                }}/>
            ))}
        </div>
    </div>
  )
}
