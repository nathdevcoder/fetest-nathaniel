type AppointmentType = {
    top: number, 
    bottom: number
    detail: {
        type: 'Consultation' | 'Vacination'
        title: string
        start: string
        end: string
        accounts: {
            name: string
            id: string
        }[]
    }
}
type appointmentRespondType = {
    title: "Consultation" | "Vacination"
    id: string
    start: string
    end: string
    top: number
    bottom: number
    name: string
  }[]

  type singleAppointmentType = {
    key: string
    address: string
    age: string
    bottom: number
    top: number
    breed: string
    email: string
    end: string
    gender: 'Male' | 'Female'
    name: string
    owner: string
    pet: 'Dog' | 'Cat'
    phone: string
    start: string
    type: "Consultation" | "Vacination"
    vet: 'anika' | 'danika' | 'john' 
    vetDetail: {
        address: string
        building: string
        contact_number: string
        veterinary_name: string
    }
  }