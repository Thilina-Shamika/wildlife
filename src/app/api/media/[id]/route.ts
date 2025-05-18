import { fetchMedia } from '@/lib/api';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const media = await fetchMedia(Number(params.id));
    return NextResponse.json(media);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch media' },
      { status: 500 }
    );
  }
} 