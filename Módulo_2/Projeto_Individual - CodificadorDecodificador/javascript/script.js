function myFunction(){
   var alfabeto_minusculo = 'abcdefghijklmnopqrstuvwxyz';
   var alfabeto_maiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var tamanho_alfabeto_maiusculo=alfabeto_maiusculo.length;
   var tamanho_alfabeto_minusculo=alfabeto_minusculo.length;
   var select = document.getElementById('acao_realizada');
	var acao = select.options[select.selectedIndex].value;
   select = document.getElementById('algoritmo');
	var algoritmo = select.options[select.selectedIndex].value;
   var codificar = document.getElementById('codificar').value;
   var codificar_html = document.getElementById('codificar');
   if((acao=='codificar')&&(algoritmo=='base64')){
      code=window.btoa(codificar);
      alert(code);
   }
   if((acao=='decodificar')&&(algoritmo=='base64')){  
      encode=window.atob(codificar);
      alert(encode);
   }
   if((acao=='codificar')&&(algoritmo=='cifra_de_cesar')){
      var deslocamento=prompt();
      if((deslocamento=='')||(isNaN(deslocamento))){
         alert('O deslocamento precisa ser um número inteiro válido');
      }
      var tamanhoCodificar=codificar.length;
      for(var indice=0; indice<tamanhoCodificar; indice++){
         var codificada=[];
         var posicao=alfabeto_maiusculo.indexOf(codificar[indice]);
         if(posicao!=-1){
            codificada += alfabeto_maiusculo[(posicao+deslocamento)];
            console.log(`${posicao} - ${deslocamento}`)
         }
         posicao=alfabeto_minusculo.indexOf(codificar[indice]);
         if(posicao!=-1){
            codificada += alfabeto_minusculo[(posicao+deslocamento)];
         }
         else{
            codificada+=codificar[indice];
         }
      }
      alert(codificada)
   }
   if((acao=='decodificar')&&(algoritmo=='cifra_de_cesar')){
      var deslocamento=prompt();
      if((deslocamento=='')||(isNaN(deslocamento))){
         alert('O deslocamento precisa ser um número inteiro válido');
      }
   }
   return 0;
}
