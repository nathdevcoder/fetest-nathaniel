

import React, { useState } from 'react'
import useTextInput from './snippets/useTextInput'
import Vets from '@/data/veterinary'

export default function useFetcher() {
    const [start, setStart] = useState('00:00')
    const [end, setEnd] = useState('23:00')
    const [breed, setBreed] = useTextInput('must not empty')
    const [age, setAge] = useTextInput('must not empty')
    const [name, setName] = useTextInput('must not empty')
    const [owner, setOwner] = useTextInput('must not empty')
    const [phone, setPhone] = useTextInput('must not empty')
    const [email, setEmail] = useTextInput('must not empty')
    const [address, setAddress] = useTextInput('must not empty')
    const [gender, setGender] = useState<'Male' | 'Female'>('Male')
    const [type, setType] = useState<'Consultation' | 'Vacination'>('Consultation')
    const [pet, setPet] = useState<'Dog' | 'Cat'>('Dog')
    const [vet, setVet] = useState<'anika' | 'danika' | 'john' >('john')
    const vetDetail = Vets[vet]
    const [loading, setLoading] = useState(false)

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

    async function Post(id: string, onSuccess?: () => void, onError?: ()=>void) {
        if(notValid()) return
        try {
            setLoading(true)  
            const res = await fetch(`/api/schedule`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
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
                        start,
                        end,
                        type
                    }
                })
            })
            if(res.ok) {
                alert('appointment save')
                if(onSuccess) onSuccess()
            }
        } catch (error) {
            alert('oops something went wrong') 
            if(onError) onError() 
        } finally {
            setLoading(false)  
        }
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
    Post,
    start,
    setStart,
    end,
    setEnd,
    type,
    setType
  }
}
