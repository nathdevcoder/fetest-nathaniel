 
import SideBar from '@/components/SideBar'
import styles from './page.module.scss'
import Appointments from '@/components/Appointments'
import DayTimeSchedule from '@/components/DayTimeSchedule'

export default function Home() {
  return (
    <div className={styles.main}> 
      <Appointments />
      <DayTimeSchedule /> 
    </div>
  )
}
