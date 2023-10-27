 'use client'
 
import styles from './page.module.scss'
import Appointments from '@/components/Appointments'
import DayTimeSchedule from '@/components/DayTimeSchedule'
import Modal from '@/components/Modal'
import useDayNexter from '@/hooks/useDayNexter'
import { useState } from 'react'

export default function Home() {
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
      identifier,
      reFetch
  } = useDayNexter()
  return (
    <div className={styles.main}> 
      <Modal open={open} setOpen={setOpen} id={identifier} today={`${currentMonth} ${currentDate}, ${currentYear}`} reFetch={reFetch}/> 
      <Appointments 
        date={`Today is ${currentDayOfWeek}, ${currentMonth} ${currentDate}, ${currentYear}`} 
        month={currentMonth}
        setOpen={setOpen}
        previousDay={previousDay}
        nextDay={nextDay}
        isLoading={isLoading}
      />
      <DayTimeSchedule appointments={data}/> 
    </div>
  )
}
