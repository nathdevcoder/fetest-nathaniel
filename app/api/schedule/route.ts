import { PostApointment } from '@/database/appointment'
import { NextRequest, NextResponse } from 'next/server' 

export async function POST(request: NextRequest)  {   
    const body = await request.json()  
    if(!body.id && ! body.data ) return NextResponse.json({ success: false, message: 'no data provided' })
    const res = await PostApointment(body.id, body.data) 
  return NextResponse.json(res)
  }