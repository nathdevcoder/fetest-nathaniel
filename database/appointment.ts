import {    doc, getDoc,  setDoc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "./firebase";
import { createId, customizeAppointmentDetail } from "@/utils/Keeper";

export async function PostApointment(id:string, data: any) { 
    const docRef = doc(db, 'fetest', id);
    const key = createId()
    const customData = customizeAppointmentDetail(data)
    try { 
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) { 
            await updateDoc(docRef, {
                [key]: customData
            });
        } else { 
            await setDoc(docRef, {
                [key]: customData
            });
        }
        return { success: true, message: 'Document updated or added successfully' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Oops, something went wrong' };
    }
}

export async function GetApointments(id:string) { 
    const docRef = doc(db, 'fetest', id);
     
    try {
        const docSnapshot = await getDoc(docRef);
    
        if (docSnapshot.exists()) { 
            const snap = docSnapshot.data();
            const data: appointmentRespondType = Object.keys(snap).map((key) => {
            const prop = snap[key];
                return {
                    title: prop.type,
                    name: prop.owner,
                    start: prop.start,
                    end: prop.end,
                    id: key,
                    top: prop.top,
                    bottom: prop.bottom,
                };
            });
          return { success: true, message: 'Appointment data retrieved successfully', data };
        } else {
          return { success: true, message: 'No appointment data found', data: [] };
        }
      } catch (error) {
        console.error(error);
        return { success: false, message: 'Oops, something went wrong', data: [] };
      }
}

export async function getSingleAppointment(id: string, key: string) {
    const docRef = doc(db, 'fetest', id);
    try {
        const docSnapshot = await getDoc(docRef); 
        if (docSnapshot.exists()) {
            const snap = docSnapshot.data();
            const data = snap[key]  
            data['key'] = key 
            if(!data) return { success: true, message: 'No appointment data found', data: null };
            else return { success: true, message: 'Appointment data retrieved successfully', data };
        } else {
            return { success: true, message: 'No appointment data found', data: [] };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Oops, something went wrong', data: null };
    }
}

export async function deleteSingleAppointment(id: string, key: string) {
    const docRef = doc(db, 'fetest', id);
    try {
        const updateData = {
            [key]: deleteField()
        }; 
        await updateDoc(docRef, updateData); 
        return { success: true, message: 'Appointment deleted successfully' };

    } catch (error) {
        console.error(error);
        return { success: false, message: 'Oops, something went wrong', data: null };
    }
}

export async function UpdateApointment(id:string, key: string, data: any) { 
    const docRef = doc(db, 'fetest', id); 
    const customData = customizeAppointmentDetail(data)
    try { 
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) { 
            await updateDoc(docRef, {
                [key]: customData
            });
        } else { 
            return { success: true, message: 'No appointment data found' };
        }
        return { success: true, message: 'Document updated or added successfully' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Oops, something went wrong' };
    }
}