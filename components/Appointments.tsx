'use client'   
 
import style from './Appointment.module.scss' 
import LeftChevron from './icons/LeftChevron';
import RightChevron from './icons/RightChevron';

type AppointmentType = {
    date: string
    month: string
    isLoading: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    previousDay: () => void
    nextDay: () => void
}

export default function Appointments({date, month, isLoading, setOpen, previousDay, nextDay}:AppointmentType) {
   

  return (
    <div className={style.Appointment}>
        <div className={style.AppointmentLeft}>
            <p>Appointment</p>
            <div className={style.AppointmentNexterUI}>
                <p>{month}</p>
                <div>
                    <button onClick={previousDay}>
                        <LeftChevron />
                    </button>
                    <button onClick={nextDay}>
                        <RightChevron/>
                    </button>
                </div>
            </div>
            <p>{date}</p>
        </div>
        <div className={style.AppointmentRight}>
            <button disabled={isLoading} onClick={()=> setOpen(true)}>New Appointment</button>
        </div>
    </div> 
  )
}
