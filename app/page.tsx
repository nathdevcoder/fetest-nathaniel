 
import SideBar from '@/components/SideBar'
import styles from './page.module.scss'
import Appointments from '@/components/Appointments'

export default function Home() {
  return (
    <div className={styles.main}> 
      <Appointments />
      <h1>Hello world</h1>
    </div>
  )
}
