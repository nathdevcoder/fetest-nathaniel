import dayjs from "dayjs";
import isSameOrAfter  from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore"
dayjs.extend(isSameOrAfter, isSameOrBefore)

export const timeSlots = [ '12:00 am',  '01:00 am', '02:00 am', '03:00 am', '04:00 am', '05:00 am', '06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm', '08:00 pm', '09:00 pm', '10:00 pm', '11:00 pm' ];
  
  export const newAppointment = {
    title: 'Meeting',
    start: 850, // Start time
    end: 950,   // End time
  };

 