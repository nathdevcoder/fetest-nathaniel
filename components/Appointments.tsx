'use client'  
import useDayNexter from '@/hooks/useDayNexter'; 
import Image from 'next/image';
import style from './Appointment.module.scss'

export default function Appointments() {
    const { 
        previousDay, 
        nextDay, 
        currentDate, 
        currentMonth,
        currentDayOfWeek,
        currentYear,
        isLoading,
        data
    } = useDayNexter()

  return (
    <> 
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
            <button disabled={isLoading}>New Appointment</button>
        </div>
    </div>
    </>
  )
}
