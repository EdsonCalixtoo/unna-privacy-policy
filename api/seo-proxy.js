import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  try {
    const { id, type } = req.query;

    const supabase = createClient(
      process.env.VITE_SUPABASE_URL || 'https://brcshofygapysytsxhcy.supabase.co',
      process.env.VITE_SUPABASE_ANON_KEY || ''
    );

    let title = "UNNA Social App";
    let description = "Conectando você ao que importa!";
    let imageUrl = "https://unnasocialapp.com/assets/default-preview.png";

    if (id && type) {
      if (type === 'event') {
        const { data } = await supabase.from('events').select('title, description, image_url, image_urls').eq('id', id).single();
        if (data) {
          title = `UNNA - ${data.title || 'Evento'}`;
          description = data.description || description;
          imageUrl = data.image_url || (data.image_urls && data.image_urls[0]) || imageUrl;
        }
      } 
      else if (type === 'u') {
        const { data } = await supabase.from('profiles').select('name, username, bio, avatar_url').eq('username', id).single();
        if (data) {
          title = `UNNA - ${data.name || data.username}`;
          description = data.bio || `Confira o perfil de ${data.username}`;
          imageUrl = data.avatar_url || imageUrl;
        }
      }
      else if (type === 'post') {
        const { data } = await supabase.from('posts').select('content, image_url, profiles(name, username)').eq('id', id).single();
        if (data) {
          const authorName = data.profiles?.name || data.profiles?.username || 'Usuário';
          title = `Publicação de ${authorName} no UNNA`;
          description = data.content || description;
          imageUrl = data.image_url || imageUrl;
        }
      }
      else if (type === 'community') {
        const { data } = await supabase.from('communities').select('name, description, image_url').eq('id', id).single();
        if (data) {
          title = `Comunidade ${data.name} no UNNA`;
          description = data.description || description;
          imageUrl = data.image_url || imageUrl;
        }
      }
    }

    // Busca o HTML principal original gerado pelo Vite (produção)
    // Usamos a URL base da própria requisição (req.headers.host)
    const host = req.headers.host || 'unnasocialapp.com';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    
    // Tenta buscar o index.html base. Se falhar por algum motivo, a gente faz um HTML básico de fallback
    let html = '';
    try {
      const response = await fetch(`${protocol}://${host}/index.html`);
      html = await response.text();
    } catch (e) {
      // Fallback extremo
      html = `<!DOCTYPE html><html lang="pt-BR"><head></head><body><div id="root"></div></body></html>`;
    }

    const metaTags = `
    <!-- Open Graph / WhatsApp Preview Tags injetadas pelo Vercel Edge -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description.substring(0, 150)}...">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:type" content="website">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description.substring(0, 150)}...">
    <meta name="twitter:image" content="${imageUrl}">
    `;

    // Se já existe um </head>, a gente injeta lá.
    if (html.includes('</head>')) {
      html = html.replace('</head>', `${metaTags}</head>`);
    } else {
      html = html + metaTags;
    }
    
    if (html.includes('<title>')) {
      html = html.replace(/<title>(.*?)<\/title>/, `<title>${title}</title>`);
    }

    // IMPORTANTE: Definir os headers corretamente para o Safari aceitar como HTML!!
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=60');
    
    // Retorna o HTML com o status 200
    res.status(200).send(html);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
