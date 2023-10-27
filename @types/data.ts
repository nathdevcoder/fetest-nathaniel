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
