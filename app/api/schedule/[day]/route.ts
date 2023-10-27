

 
 
import { GetApointments } from '@/database/appointment'
import { NextResponse } from 'next/server'
 
export async function GET( request: Request, {params}:{params: {day:string}}) { 
    const {day} = params
    if(!day ) return NextResponse.json({ success: false, message: 'no id provided', data: []})
    const result = await GetApointments(day)
  return NextResponse.json(result)
}