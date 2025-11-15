import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const linkedinUrl = searchParams.get('url');

  if (!linkedinUrl) {
    return NextResponse.json({ error: 'URL requise' }, { status: 400 });
  }

  try {
    // Récupérer les meta tags Open Graph de LinkedIn
    const response = await fetch(linkedinUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.ok) {
      throw new Error('Impossible de récupérer le post');
    }

    const html = await response.text();
    
    // Extraire l'image Open Graph
    const imageMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
    const image = imageMatch ? imageMatch[1] : null;

    // Extraire la description Open Graph
    const descriptionMatch = html.match(/<meta\s+property="og:description"\s+content="([^"]+)"/i);
    const description = descriptionMatch ? descriptionMatch[1] : null;

    return NextResponse.json({
      image,
      description,
      success: true
    });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Impossible de récupérer les informations du post', success: false },
      { status: 500 }
    );
  }
}

