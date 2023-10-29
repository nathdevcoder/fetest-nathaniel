

import { useEffect, useState } from 'react'
import useTextInput from './snippets/useTextInput'
import Vets from '@/data/veterinary'
import { createId, reFormatTime } from '@/utils/Keeper'
import useFileInput from './snippets/useFileInput'
import { saveUserImage } from '@/database/storage'

export default function useFetcher(appointment: singleAppointmentType | null) {
    const [start, setStart] = useState('00:00')
    const [end, setEnd] = useState('23:00')
    const [avatarFile, avatarUrl, setAvatar, resetAvatar] = useFileInput(null)
    const [petFile, petUrl, sePet, resePet] = useFileInput(null)
    const [breed, setBreed, resetbreed] = useTextInput('pet breed field is required')
    const [age, setAge, resetage] = useTextInput('pet age field is required')
    const [name, setName, resetname] = useTextInput('pet name field is required')
    const [owner, setOwner, resetowner] = useTextInput('owner name field is required')
    const [phone, setPhone, resetphone] = useTextInput('phone number field is required')
    const [email, setEmail, resetemail] = useTextInput('email fielf is required')
    const [address, setAddress, resetaddress] = useTextInput('address field is required')
    const [gender, setGender] = useState<'Male' | 'Female'>('Male')
    const [type, setType] = useState<'Consultation' | 'Vacination'>('Consultation')
    const [pet, setPet] = useState<'Dog' | 'Cat'>('Dog')
    const [vet, setVet] = useState<'anika' | 'danika' | 'john' >('john')
    const vetDetail = Vets[vet]
    const [loading, setLoading] = useState(false)
    const [storageID, setStorageID] = useState(appointment?.media|| createId())

    useEffect(()=>{
        if(appointment) {
            resetbreed(appointment.breed)
            resetage(appointment.age)
            resetemail(appointment.email)
            resetowner(appointment.owner)
            resetaddress(appointment.address)
            resetname(appointment.name)
            resetphone(appointment.phone)
            setStart(reFormatTime(appointment.start))
            setEnd(reFormatTime(appointment.end))
            setGender(appointment.gender)
            setType(appointment.type)
            setPet(appointment.pet)
            setVet(appointment.vet)
            if(appointment.avatar) resetAvatar(appointment.avatar)
            if(appointment.petimage) resePet(appointment.petimage)
        }
    },[])

    function notValid() {
        const error: string[] = []
        if(breed.notvalid) error.push(breed.msg)
        if(age.notvalid) error.push(age.msg)
        if(name.notvalid) error.push(name.msg)
        if(owner.notvalid) error.push(owner.msg)
        if(phone.notvalid) error.push(phone.msg)
        if(email.notvalid) error.push(email.msg)
        if(address.notvalid) error.push(address.msg) 
        if(error.length > 0) {
            window.alert(error.join('\n'))
            return true
        } else return false
    }
 
    async function onSubmit({id, onSuccess, onError, method, key }:{id: string, key?: string, onSuccess?: () => Promise<void>, onError?: ()=>void, method: "POST" | "PATCH" }) {
        if(notValid()) return 
        const data: any = {
            id: id, 
            data: {
                breed: breed.val,
                owner: owner.val,
                age: age.val,
                address: address.val,
                email: email.val,
                name: name.val,
                phone: phone.val,
                pet: pet ,
                gender: gender ,
                vet: vet,
                vetDetail: vetDetail,
                start: start,
                end: end,
                type: type,
                media: storageID,
                avatar: appointment?.avatar || "",
                petimage: appointment?.petimage || ""
            }
        }
        if(key) data['key'] = key
        try {
            setLoading(true)  
            if(!avatarFile.notvalid && avatarFile.val) {
                console.log(!avatarFile.notvalid, avatarFile.val); 
                const ownerurl = await saveUserImage(avatarFile.val, id, storageID, 'owner')
                if(ownerurl) data['data']['avatar'] = ownerurl
            }
            if(!petFile.notvalid && petFile.val) {
                const peturl = await saveUserImage(petFile.val, id, storageID, 'pet')
                if(peturl) data['data']['petimage'] = peturl 
            }
            const res = await fetch(`/api/schedule`, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            if(!res.ok) throw Error('oops something went wrong')
            const result = await res.json() as {success: boolean, message: string}
            if(result.success) {
                alert(result.message || 'appointment saved')  
                if(onSuccess) await onSuccess()
                if(method === 'POST') setStorageID(createId())
                resePet("")
                resetAvatar("")
            } else {
                alert(result.message || 'appointment not saved')  
                if(onError) onError()  
            }
        } catch (error) {
            alert('oops something went wrong') 
            if(onError) onError() 
        } finally {
            setLoading(false)  
        }
    }

    function reset() {
        resetbreed()
        resetage()
        resetemail()
        resetowner()
        resetaddress()
        resetname()
        resetphone()
    }
    
  return {
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
    type,
    setType,
    reset,
    setAvatar,
    avatarUrl,
    avatarFile,
    petFile, 
    petUrl, 
    sePet 
  }
}
