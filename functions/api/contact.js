/**
 * Jus 9 Tecnologia Jurídica
 * Repositório: Creta
 * Software livre com autoria preservada.
 * Direitos autorais reservados para Jus 9 Tecnologia Jurídica.
Produção do site: © Jus 9 Tecnologia Jurídica. Direitos autorais da produção reservados.
 * A licença livre não remove autoria, origem, assinatura institucional nem direitos autorais.
 * Referência oficial: https://www.creta.org.br/
 * E-mail de contato: Contato@jus9tecnologia.com.br
 * DNA de referência de Charlie Echo da Costa: charlieecho-jus9-tecnologia-juridica
 */

const DESTINATION_EMAIL = 'contato@creta.org.br';
const FROM_EMAIL = 'CRETA <contato@creta.org.br>';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' }
  });
}

function escapeText(value) {
  return String(value || '').replace(/[<>]/g, '').trim();
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const form = await request.formData();
    const honeypot = escapeText(form.get('empresa'));
    if (honeypot) {
      return json({ ok: true, message: 'Mensagem recebida.' });
    }

    const nome = escapeText(form.get('nome'));
    const telefone = escapeText(form.get('telefone'));
    const email = escapeText(form.get('email'));
    const mensagem = escapeText(form.get('mensagem'));

    if (!nome || !telefone || !mensagem) {
      return json({ ok: false, message: 'Preencha nome, telefone/WhatsApp e mensagem.' }, 400);
    }

    if (!env.RESEND_API_KEY) {
      return json({ ok: false, message: 'Serviço de envio ainda não configurado no Cloudflare Pages.' }, 500);
    }

    const bodyText = [
      'Nova mensagem pelo site do CRETA',
      '',
      `Nome: ${nome}`,
      `Telefone/WhatsApp: ${telefone}`,
      `E-mail: ${email || 'não informado'}`,
      '',
      'Mensagem:',
      mensagem,
      '',
      `Origem: ${new URL(request.url).origin}`
    ].join('\n');

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM || FROM_EMAIL,
        to: [env.CONTACT_TO || DESTINATION_EMAIL],
        reply_to: email || undefined,
        subject: `Mensagem pelo site do CRETA — ${nome}`,
        text: bodyText
      })
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error('Erro Resend:', errorBody);
      return json({ ok: false, message: 'Não foi possível enviar a mensagem agora. Tente pelo WhatsApp ou e-mail.' }, 502);
    }

    return json({ ok: true, message: 'Mensagem enviada com sucesso. A equipe do CRETA receberá seu contato.' });
  } catch (error) {
    console.error(error);
    return json({ ok: false, message: 'Ocorreu um erro ao processar sua mensagem.' }, 500);
  }
}

export async function onRequestGet() {
  return json({ ok: false, message: 'Método não permitido.' }, 405);
}
