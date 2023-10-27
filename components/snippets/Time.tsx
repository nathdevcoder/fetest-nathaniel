 
import style from "./Time.module.scss" 
import Image from "next/image";

type AppointmentCardType = AppointmentType & {
    openDetail: (id:string) => void
}
 
const AppointmentCard = ({top, bottom, detail, openDetail}: AppointmentCardType) => { 
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
                {detail.accounts.map(ac=> ( <button key={ac.id} onClick={()=>openDetail(ac.id)}>{ac.name}</button> ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default AppointmentCard;