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
