import React from 'react'
import style from './DayTimeSchedule.module.scss'
import {timeSlots} from '../data/timeSlot'
import dayjs from 'dayjs'
import AppointmentCard from './snippets/Time'

export default function DayTimeSchedule() {
  return (
    <div className={style.Time}>
        <div className={style.TimeTable}>
            {timeSlots.map(tm=>(
                <div key={Math.random()} className={style.TimeSlot}>
                    <div>{tm}</div>
                    <div></div>
                </div>
            ))}
            <AppointmentCard top={850} bottom={1450} detail={{title: 'Meeting', start: '8:30 am', end: '9:30 am',type: "meeting", accounts: [{id:'/acc/123', name: 'Charise' }]}}/>
        </div>
    </div>
  )
}
