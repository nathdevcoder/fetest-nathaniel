'use client'  
import  { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export default function useDayNexter() {
    const [currentDay, setCurrentDay] = useState(dayjs());
    const [data, setData] = useState<appointmentRespondType>([]);
    const [isLoading, setIsLoading] = useState(false);
    const currentMonth = currentDay.format('MMMM');  
    const currentDate = currentDay.format('DD');
    const currentDayOfWeek = currentDay.format('dddd');  
    const currentYear = currentDay.year();

    const handleNextDay = () => {
      setCurrentDay(currentDay.add(1, 'day'));
    };
  
    const handlePreviousDay = () => {
      setCurrentDay(currentDay.subtract(1, 'day'));
    };
    useEffect(()=>{
        const abortController = new AbortController();
        const signal = abortController.signal;

        reFetch(signal)

        return () => { 
            abortController.abort();
        }
    }, [currentDay]) 

    async function reFetch(signal?: AbortSignal | null | undefined) {
        try {
            setIsLoading(true)
            const identifier = currentDay.format('YYYYMMDD'); 
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

    return  {
        nextDay: handleNextDay, 
        previousDay: handlePreviousDay, 
        currentMonth, 
        currentDate, 
        currentDayOfWeek, 
        currentYear,
        data,
        isLoading,
        identifier: currentDay.format('YYYYMMDD'),
        reFetch
    }
}
