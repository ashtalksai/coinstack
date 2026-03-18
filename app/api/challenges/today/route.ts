import { NextResponse } from 'next/server'
import { mockChallenges } from '@/lib/mock-data'

export async function GET() {
  const today = new Date().toISOString().split('T')[0]
  const index = new Date().getDate() % mockChallenges.length
  const challenge = mockChallenges[index]

  return NextResponse.json({
    ...challenge,
    date: today,
    status: 'pending',
  })
}
