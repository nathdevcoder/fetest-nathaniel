type AppointmentType = {
    top: number, 
    bottom: number
    detail: {
        type: 'meeting' | 'others'
        title: string
        start: string
        end: string
        accounts: {
            name: string
            id: string
        }[]
    }
}