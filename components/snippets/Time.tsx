import { newAppointment  } from "@/data/timeSlot"; 
import style from "./Time.module.scss"
import Link from "next/link";
import Image from "next/image";
 
const AppointmentCard = ({top, bottom, detail}: AppointmentType) => { 
    return (
      <div className={ detail.type === 'Consultation' ? style.TimeCardConsultaion : style.TimeCardVacination} style={{ bottom , top  }}>
        <div className={detail.type === 'Consultation' ?  style.Vicon : style.Oicon }>
            <Image 
            src={detail.type === 'Consultation' ? '/consultation.svg' : '/injection.svg'}
            alt="Logo"
            width={20}
            height={20} 
            />
        </div>
        <div>
            <h5>{detail.title}</h5>
            <p>{detail.start} - { detail.end }</p>
            <div className={style.TimeCardAccounts}>
            <Image 
                src={detail.type === 'Consultation' ? '/vuser.svg' : '/ouser.svg'}
                alt="Logo"
                width={16}
                height={16}
                priority
            />
                {detail.accounts.map(ac=> ( <Link key={ac.id} href={ac.id}>{ac.name}</Link> ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default AppointmentCard;