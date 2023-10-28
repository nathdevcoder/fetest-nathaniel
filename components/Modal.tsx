'use client'
import React  from 'react'
import style from './Modal.module.scss'
import useFetcher from '@/hooks/useFetcher'
import TextInput from './snippets/TextInput'
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import CardDetail from './snippets/CardDetail'
import CardHeader from './snippets/CardHeader'

type modalType = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  id: string
  reFetch: ()=>Promise<void>
} & ({
  type: 'post' 
  today: string
} | {
  type: 'update'
  propkey: string
  appointment: singleAppointmentType
})

export default function Modal(props: modalType) {
    let today = ''
    let appiontment = null
    const {open, setOpen, id, reFetch} = props
    if(props.type === 'post') today = props.today
    if(props.type === 'update') {
      today = dayjs(id, 'YYYYMMDD').locale('en').format('dddd, MMMM D, YYYY');
      appiontment = props.appointment
    }

    const {
      breed,
      setBreed,
      age,
      setAge,
      name,
      setName,
      owner,
      setOwner,
      phone,
      setPhone,
      pet,
      setPet,
      email,
      setEmail,
      address,
      setAddress,
      gender,
      setGender,
      vet,
      setVet,
      vetDetail,
      loading,
      onSubmit,
      start,
      setStart,
      end,
      setEnd,
      reset,
      type,
      setType
    } = useFetcher(appiontment) 
    
    async function onSubmitHandler() {
        if(props.type === 'post') { 
          await onSubmit({
            id,
            method: "POST",
            onSuccess: async () => {
              await reFetch()
              reset()
              setOpen(false)
            },
            onError: ()=>setOpen(false)
          }) 
        } else if(props.type === 'update') {
          await onSubmit({
            id,
            key: props.propkey,
            method: "PATCH",
            onSuccess: async () => {
              await reFetch() 
              setOpen(false)
            },
            onError: ()=>setOpen(false)
          })  
        }
    }

  return (
    <div className={open? style.ModalActive : style.Modal} onClick={(e)=>{
        if(e.target == e.currentTarget) setOpen(false)
    }}>
      { loading ? <div className={style.ModalContent}>Loading...</div> :
      <div className={style.ModalContent}>
          <h5>{today}</h5>  
          <hr />
          <TextInput inputVal={owner} SetVal={setOwner} label='Your Name' />
          <hr />
          <h6>CONTACT INFORMATION</h6>
          <TextInput inputVal={email} SetVal={setEmail} label='Email' />
          <TextInput inputVal={phone} SetVal={setPhone} label='Phone' />
          <TextInput inputVal={address} SetVal={setAddress} label='Address' /> 
          <hr />
          <h6>PET DETAILS</h6> 
          <TextInput inputVal={name} SetVal={setName} label='Pet Name' />
          <TextInput inputVal={age} SetVal={setAge} label='Pet Age' />
          <TextInput inputVal={breed} SetVal={setBreed} label='Pet Breed' /> 
          <div className={style.Selects}>
            <select name="pet" id="pet" value={pet} onChange={(e)=> setPet(e.target.value as "Cat"|"Dog")}>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </select>
            <select name="gender" id="gender" value={gender} onChange={(e)=> setGender(e.target.value as "Male"|"Female")}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>  
          </div>
          <hr />
          <h6>CLINIC DETAILS</h6>  
        <div className={style.TimeInputs}>
          <input type="time" max={end} value={start} onChange={(e)=>setStart(e.target.value)}/>
          <input type="time" min={start} value={end} onChange={(e)=>setEnd(e.target.value)}/>
        </div>
        <div className={style.Selects}>
          <select name="type" id="type" value={type} onChange={(e)=> setType(e.target.value as "Consultation"|"Vacination")}>
            <option value="Consultation">Consultation</option>
            <option value="Vacination">Vacination</option>
          </select>
          <select name="vet" id="vet" value={vet} onChange={(e)=> setVet(e.target.value as "anika" |"danika"| "john")}>
              <option value="anika">Anika Perry</option>
              <option value="danika">Danica Jane</option>
              <option value="john">John Fins</option>
          </select>
        </div>   
        <div className={style.Detail}>
          <CardHeader title={vetDetail.building} subtitle={vetDetail.veterinary_name} avatar='https://randomuser.me/api/portraits/men/1.jpg' />
          <CardDetail email={vetDetail.veterinary_name} address={vetDetail.address} phone={vetDetail.contact_number} /> 
        </div>
        <hr />
        <div className={style.Actions}>
          <button onClick={onSubmitHandler} disabled={loading}>
            {props.type === 'post'? 'Post' : 'Update'}
          </button>
          <button onClick={()=>setOpen(false)} >
            Close
          </button>
        </div>
      </div> }
    </div>
  )
}
