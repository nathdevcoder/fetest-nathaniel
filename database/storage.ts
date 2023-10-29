import {   ref, uploadBytes, getDownloadURL } from "firebase/storage"; 
import { storage } from "./firebase";

export async function saveUserImage(file: File, id: string, to: string, name: "owner" | "pet"): Promise<string> { 
    const metadata = {
        contentType: file.type
    };
    try {
        const storageRef = ref(storage, `fetest/${id}/${to}/${name}` );
        await uploadBytes(storageRef, file, metadata);
        const imageUrl = await getDownloadURL(storageRef);
        return imageUrl
    } catch (error) {
        console.log(error); 
        return ''
    }
}