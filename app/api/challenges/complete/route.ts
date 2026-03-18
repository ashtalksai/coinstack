import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { challengeId, action } = body

  if (!challengeId || !['complete', 'skip'].includes(action)) {
    return NextResponse.json(
      { error: 'Invalid request. Provide challengeId and action (complete|skip).' },
      { status: 400 }
    )
  }

  return NextResponse.json({
    success: true,
    challengeId,
    action,
    completedAt: new Date().toISOString(),
  })
}
