import  { useState } from 'react'

type ValidFileType = {val: null | File, notvalid: boolean, msg: string}
type URLFileType = string | null
type SetFileType = (newValue: File | null) => void
export default function useFileInput(initial:string | null): [ValidFileType, URLFileType, SetFileType] {
    const  [file, setFile] = useState<ValidFileType>({val: null, notvalid: true, msg: 'input a valid 1 mb image'})
    const [url, setUrl] = useState<URLFileType>(initial)
    function SetFile(newValue: File | null) {
        if(!newValue) return
        const valids = ['image/png', 'image/jpg', 'image/jpeg']
        if(newValue.size > 1000000) {
            setFile({val: null, msg: "Must less than 1 mb size", notvalid: true}) 
            setUrl(null)
        } else if(valids.includes(newValue.type)){
            setFile({val: newValue, msg: '', notvalid: false})
            setUrl(URL.createObjectURL(newValue))
        } else {
            setFile({val: null, msg: "Must valid png, jpeg, or jpg image only ", notvalid: true}) 
            setUrl(null)
        }
    }
  return [file, url ,SetFile]
}
