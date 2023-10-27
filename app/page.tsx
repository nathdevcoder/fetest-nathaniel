 'use client'
 
import styles from './page.module.scss'
import Appointments from '@/components/Appointments'
import DayTimeSchedule from '@/components/DayTimeSchedule'
import Drawer from '@/components/Drawer'
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
      reFetch,
      onCloseDrawer,
      onOpenDrawer,
      FetchAppointment,
      appointment,
      drawer
  } = useDayNexter()

  


  return (
    <div className={styles.body}> 
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
        <DayTimeSchedule appointments={data} openDetail={onOpenDrawer}/> 
      </div>
      <div className={ drawer.open ? styles.assideActive : styles.asside}>
        <Drawer onClose={onCloseDrawer}/>
      </div>
    </div>

  )
}
