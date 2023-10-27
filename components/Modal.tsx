'use client'
import React, { useState } from 'react'
import style from './Modal.module.scss'
import useFetcher from '@/hooks/useFetcher'
import TextInput from './snippets/TextInput'

type modalType = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  id: string
  today: string
  reFetch: ()=>Promise<void>
}

export default function Modal({open, setOpen, id, today, reFetch}: modalType) { 
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
      Post,
      start,
      setStart,
      end,
      setEnd,
      type,
      setType
    } = useFetcher()

    async function onSuccess() {
      await reFetch()
      setOpen(false)
    }

  return (
    <div className={open? style.ModalActive : style.Modal} onClick={(e)=>{
        if(e.target == e.currentTarget) setOpen(false)
    }}>
      { loading ? <div className={style.ModalContent}>Loading...</div> :
      <div className={style.ModalContent}>
        <p>{today}</p>
        <div className={style.ModalBody}> 
          <div>
            <TextInput inputVal={owner} SetVal={setOwner} label='Owner' />
            <TextInput inputVal={phone} SetVal={setPhone} label='Phone' />
            <TextInput inputVal={email} SetVal={setEmail} label='Email' />
            <TextInput inputVal={address} SetVal={setAddress} label='Address' />
          </div>
          <div>
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
          </div>
        </div>
        <div className={style.TimeInputs}>
          <input type="time" max={end} value={start} onChange={(e)=>setStart(e.target.value)}/>
          <input type="time" min={start} value={end} onChange={(e)=>setEnd(e.target.value)}/>
        </div>
        <div className={style.Selects}>
          <select name="type" id="type" value={pet} onChange={(e)=> setType(e.target.value as "Consultation"|"Vacination")}>
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
          <p>{vetDetail.address}</p>
          <p>{vetDetail.building}</p>
          <p>{vetDetail.contact_number}</p>
          <p>{vetDetail.veterinary_name}</p>
        </div>
        <div className={style.Actions}>
          <button onClick={()=>Post(id, onSuccess, ()=>setOpen(false))} disabled={loading}>
            Post
          </button>
          <button onClick={()=>setOpen(false)} >
            Close
          </button>
        </div>
      </div> }
    </div>
  )
}
