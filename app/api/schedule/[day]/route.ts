

 
 
import { NextResponse } from 'next/server'
 
export async function GET( request: Request, {params}:{params: {day:string}}) { 
    const {day} = params
    const data = [day]
  return NextResponse.json(data)
}