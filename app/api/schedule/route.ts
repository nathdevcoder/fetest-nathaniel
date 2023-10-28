import { PostApointment, deleteSingleAppointment, getSingleAppointment } from '@/database/appointment'
import { NextRequest, NextResponse } from 'next/server' 


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('day')
  const key = searchParams.get('key')
  if(!id || !key) return NextResponse.json({ success: false, message: 'no data provided', data: null })
  const data = await getSingleAppointment(id, key)  
  return Response.json(data)
}

export async function POST(request: NextRequest)  {   
    const body = await request.json()  
    if(!body.id || ! body.data ) return NextResponse.json({ success: false, message: 'no data provided' })
    const res = await PostApointment(body.id, body.data) 
    return NextResponse.json(res)
}

export async function DELETE(request: NextRequest) {
  const body = await request.json() 
  const id = body.id
  const key = body.key
  if(!id || !key) return NextResponse.json({ success: false, message: 'no data provided'  })
  const data = await deleteSingleAppointment(id, key)
  return NextResponse.json(data)
}