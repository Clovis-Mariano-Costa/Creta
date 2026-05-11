# CRETA — site completo v1

Esta pasta contém uma primeira versão estática completa do site do CRETA, reconstruída com base no material público extraído do site atual.

## Páginas incluídas

- index.html
- quem-somos.html
- nosso-programa.html
- fundador.html
- nossa-estrutura.html
- breves-relatos.html
- perguntas-frequentes.html
- contato.html
- politica-de-privacidade-e-cookies.html

## Arquivos de apoio

- assets/css/styles.css
- assets/js/main.js
- assets/js/cookies.js
- conteudo-original-extraido/ — textos originais em Markdown preservados para conferência.

## Pontos pendentes antes de publicar oficialmente

1. Baixar pelo Google Sites/Drive as imagens e vídeos originais do CRETA e substituir os blocos de placeholder.
2. Confirmar critérios atuais de acolhimento: público atendido, sexo, idade, vagas, tempo de tratamento, regras de visita e lista de itens permitidos.
3. Revisar tecnicamente frases clínicas sobre adicção, dependência química e saúde.
4. Revisar juridicamente a Política de Privacidade e Cookies.
5. Confirmar links reais das redes sociais.
6. Configurar o envio direto do formulário no Cloudflare Pages com `RESEND_API_KEY` e remetente verificado.

## Publicação simples

Pode publicar a pasta inteira em GitHub Pages, Cloudflare Pages, Netlify ou hospedagem comum. O arquivo inicial é `index.html`.


## Atualização v1.1

- Página `breves-relatos.html` revisada com crédito autoral para Clovis Mariano da Costa e novo texto completo de “Era só maconha”.
- Página `perguntas-frequentes.html` atualizada com critérios confirmados: acolhimento masculino maior de 18 anos, voluntariedade, recomendação mínima de 9 meses, itens para entrada, almoço familiar mensal e visitas conforme grau/fase do tratamento.
- Página `contato.html` ajustada inicialmente para que o formulário “Mensagem rápida” direcionasse o envio para `contato@creta.org.br` via `mailto`.
- Observação histórica: essa solução foi substituída na v1.2 por Cloudflare Pages Functions.


## Atualização v1.2

- Adicionada a página `fundador.html`, dedicada a Jonas Pires Ramos, Seu Jonas, Presidente da Obra.
- Menu principal atualizado com o item `Fundador` em todas as páginas.
- Inserida explicação inicial sobre a origem bíblica do nome CRETA, com referência principal a Tito 1:5 e menção honesta a Atos 27:7-13, Atos 2:11 e Tito 1:12, sem destaque especial para Tito 1:12.
- Página `quem-somos.html` recebeu chamada curta para a origem do nome e link para `fundador.html`.
- Formulário de contato substituído: deixou de usar `mailto` e agora envia para `/api/contact`, preparado para Cloudflare Pages Functions.
- Criada a função `functions/api/contact.js` para envio direto ao e-mail `contato@creta.org.br` usando Resend API.

## Configuração do formulário no Cloudflare Pages

Para o envio direto funcionar em produção:

1. Publicar esta pasta em um projeto do Cloudflare Pages.
2. Criar/verificar conta e domínio no Resend, ou serviço compatível.
3. No painel do Cloudflare Pages, configurar a variável secreta/ambiente:
   - `RESEND_API_KEY` = chave de API do Resend.
4. Opcionalmente configurar:
   - `CONTACT_TO` = `contato@creta.org.br`
   - `CONTACT_FROM` = `CRETA <contato@creta.org.br>` ou outro remetente verificado no Resend.
5. Reimplantar o projeto.

Observação: Cloudflare Pages Functions executa código no ambiente Workers. Para envio de e-mail, esta versão usa Resend via API HTTPS. O remetente precisa estar autorizado/verificado no serviço de e-mail.


## Atualização CRETA v2.0

Ver `RELATORIO_ATUALIZACAO_CRETA_v2_0.md` para detalhes da atualização de identidade visual, Memória Visual, CRETA em Vídeo e Trabalho para Charlie Echo.
