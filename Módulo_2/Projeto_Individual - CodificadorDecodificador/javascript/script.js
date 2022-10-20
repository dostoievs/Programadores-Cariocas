function myFunction(){
   const base64='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/=';
   tamanhoBase64=base64.length;
   var select = document.getElementById('acao_realizada');
	var acao = select.options[select.selectedIndex].value;
   select = document.getElementById('algoritmo');
	var algoritmo = select.options[select.selectedIndex].value;
   var codificar = document.getElementById('codificar').value;
   if((acao=='codificar')&&(algoritmo=='base64')){
      code =window.btoa(codificar);
      alert(code);
   }
   if((acao=='decodificar')&&(algoritmo=='base64')){  
      encode=window.atob(codificar);
      alert(encode);
   }
   return 0;
}
