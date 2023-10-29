'use client'  
import  { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export default function useDayNexter() {
    const [currentDay, setCurrentDay] = useState(dayjs());
    const [data, setData] = useState<appointmentRespondType>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [drawer, setDrawer] = useState({open: false, id: ''}) 
    const [appointment, setAppointment] = useState<singleAppointmentType | null>(null)

    const currentMonth = currentDay.format('MMMM');  
    const currentDate = currentDay.format('DD');
    const currentDayOfWeek = currentDay.format('dddd');  
    const currentYear = currentDay.year();
    const identifier = currentDay.format('YYYYMMDD')

    const handleNextDay = () => {
      setCurrentDay(currentDay.add(1, 'day'));
      setDrawer({open: false, id: ''})
    };
    const handlePreviousDay = () => {
      setCurrentDay(currentDay.subtract(1, 'day'));
      setDrawer({open: false, id: ''})
    };
    function onOpenDrawer(id: string) {
        setDrawer({open: true, id})
    }
    function onCloseDrawer( ) {
      setDrawer({open: false, id:""})
    }


    useEffect(()=>{
        const abortController = new AbortController();
        const signal = abortController.signal;

        reFetch(signal)

        return () => { 
            abortController.abort();
        }
    }, [currentDay]) 

    useEffect(()=>{
        if(!drawer.id) return 
        FetchAppointment()
    }, [drawer])

    async function reFetch(signal?: AbortSignal | null | undefined) {
        try {
            setIsLoading(true) 
            const response = await fetch(`/api/schedule/${identifier}` ,{signal})
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json() as { success: boolean;  message: string; data: appointmentRespondType; }
            if(result.success) {
                setData(result.data); 
            }
        } catch (error: any) {  
            if (error.name === 'AbortError') {
                console.log('Request was aborted');
            } else {
                console.error('Error fetching data:', error);
            }
            setData([]); 
        } finally {
            setIsLoading(false);
        }
    }

    async function FetchAppointment() {
        try {
            if(!drawer.id) return 
            setIsLoading(true)
            const response = await fetch(`/api/schedule?day=${identifier}&&key=${drawer.id}`)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            } 
            const result = await response.json() as { success: boolean;  message: string; data: singleAppointmentType; }
            if(result.success) setAppointment(result.data) 
        } catch (error) {
            setAppointment(null)
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false)
        }
    }

    return  {
        nextDay: handleNextDay, 
        previousDay: handlePreviousDay, 
        currentMonth, 
        currentDate, 
        currentDayOfWeek, 
        currentYear,
        data,
        isLoading,
        identifier ,
        reFetch,
        onOpenDrawer,
        onCloseDrawer,
        FetchAppointment,
        appointment,
        drawer
    }
}
