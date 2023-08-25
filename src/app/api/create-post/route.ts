import { Supabase } from '@/supabase/Supabase'
import { type NextRequest, NextResponse } from 'next/server'
export async function POST(request: NextRequest) {
  try {
    const { content }: { content: string } = await request.json()
    const supabase = new Supabase()
    await supabase.createPost(content)
    return new NextResponse(
      JSON.stringify({ message: 'Posteo subido correctamente!' }),
      {
        status: 200
      }
    )
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: 'Error al crear posteo.' }),
      {
        status: 404
      }
    )
  }
}
