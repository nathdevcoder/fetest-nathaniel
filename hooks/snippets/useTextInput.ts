import React, { ChangeEvent, useState } from 'react'

type dataType = {
    val: string;
    msg: string;
    notvalid: boolean;
}
type setDataType = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> void
type resetDataType = ( ) => void

export default function useTextInput(msg:string): [dataType, setDataType, resetDataType]{
    const [data , setData] = useState({val: '', msg: msg, notvalid: true})
    function SetData(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const val = e.target.value
        if(val) setData({val, msg:"", notvalid: false})
        else setData({val:'', msg: msg, notvalid: true})
    }
    function resetData() {
        setData({val:'', msg: msg, notvalid: true})
    }
  return [ data, SetData, resetData]
}
