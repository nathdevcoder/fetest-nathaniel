'use client'  
import  { useState } from 'react';
import dayjs from 'dayjs';

export default function useDayNexter() {
    const [currentDay, setCurrentDay] = useState(dayjs());
    const currentMonth = currentDay.format('MMMM');  
    const currentDate = currentDay.format('DD');
    const currentDayOfWeek = currentDay.format('dddd'); // Full day name (e.g., "Sunday")
    const currentYear = currentDay.year();

    const handleNextDay = () => {
      setCurrentDay(currentDay.add(1, 'day'));
    };
  
    const handlePreviousDay = () => {
      setCurrentDay(currentDay.subtract(1, 'day'));
    };
  return  {nextDay: handleNextDay, previousDay: handlePreviousDay, currentMonth, currentDate, currentDayOfWeek, currentYear }
}
