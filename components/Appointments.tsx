'use client'  
import useDayNexter from '@/hooks/useDayNexter'; 
import Image from 'next/image';
import style from './Appointment.module.scss'
import Modal from './Modal';
import { useState } from 'react';

export default function Appointments() {
    const [open, setOpen] = useState(false)
    const { 
        previousDay, 
        nextDay, 
        currentDate, 
        currentMonth,
        currentDayOfWeek,
        currentYear,
        isLoading,
        data,
        identifier
    } = useDayNexter()

  return (
    <> 
        <Modal open={open} setOpen={setOpen} id={identifier} today={`${currentMonth} ${currentDate}, ${currentYear}`}/> 
        <div className={style.Appointment}>
            <div className={style.AppointmentLeft}>
                <p>Appointment</p>
                <div className={style.AppointmentNexterUI}>
                    <p>{currentMonth}</p>
                    <div>
                        <button onClick={previousDay}>
                            <Image src={'/lchevron.svg'} alt="search button"  width={20} height={20} />
                        </button>
                        <button onClick={nextDay}>
                            <Image src={'/rchevron.svg'} alt="search button"  width={20} height={20} /> 
                        </button>
                    </div>
                </div>
                <p>Today is {currentDayOfWeek}, {currentMonth} {currentDate}, {currentYear} </p>
            </div>
            <div className={style.AppointmentRight}>
                <button disabled={isLoading} onClick={()=> setOpen(true)}>New Appointment</button>
            </div>
        </div>
    </>
  )
}
