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

(function(){
  const toggle=document.querySelector('.menu-toggle');
  const menu=document.querySelector('#menu-principal');
  if(toggle&&menu){
    toggle.addEventListener('click',()=>{
      const open=menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded',String(open));
    });
  }

  const form=document.querySelector('[data-contact-form]');
  const status=document.querySelector('[data-contact-status]');
  if(form&&status){
    form.addEventListener('submit', async (event)=>{
      event.preventDefault();
      const button=form.querySelector('button[type="submit"]');
      status.hidden=false;
      status.classList.remove('is-error');
      status.textContent='Enviando mensagem...';
      if(button){button.disabled=true;button.textContent='Enviando...';}
      try{
        const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
        const data=await response.json().catch(()=>({}));
        if(!response.ok){throw new Error(data.message||'Não foi possível enviar a mensagem agora.');}
        status.textContent=data.message||'Mensagem enviada com sucesso. A equipe do CRETA receberá seu contato.';
        form.reset();
      }catch(error){
        status.classList.add('is-error');
        status.textContent=error.message||'Não foi possível enviar a mensagem. Tente novamente pelo WhatsApp ou e-mail.';
      }finally{
        if(button){button.disabled=false;button.textContent='Enviar mensagem';}
      }
    });
  }
})();
