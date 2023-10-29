import  { useState } from 'react'

type ValidFileType = {val: null | File, notvalid: boolean, msg: string}
type URLFileType = string | null
type SetFileType = (e: React.ChangeEvent<HTMLInputElement>) => void 
type ResetType = (url: string) => void
export default function useFileInput(initial:string | null): [ValidFileType, URLFileType, SetFileType, ResetType] {
    const  [file, setFile] = useState<ValidFileType>({val: null, notvalid: true, msg: 'input a valid 1 mb image'})
    const [url, setUrl] = useState<URLFileType>(initial)
    function SetFile(e: React.ChangeEvent<HTMLInputElement>) {
        let newValue = null
        if (e.target.files) newValue = e.target.files[0] 
        
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
 
    function  reset(url: string) {
        setUrl(url)
    }
  return [file, url ,SetFile, reset]
}
