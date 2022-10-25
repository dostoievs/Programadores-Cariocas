function mudar_texto_botao(){
   console.log("teste")
   $("#submit").click(function(){
      $(this).text("Teste");
    });
}

function mostra_campo_deslocamento(){
   var select = document.getElementById('algoritmo');
   var input_deslocamento = document.getElementById('deslocamento');
   input_deslocamento.style.visibility = (select.value == 'cifra_de_cesar') 
      ? "visible"
      : "hidden";  
}
function codificar(){
   var alfabeto_minusculo = 'abcdefghijklmnopqrstuvwxyz';
   var alfabeto_maiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var tamanho_alfabeto_maiusculo=alfabeto_maiusculo.length;
   var tamanho_alfabeto_minusculo=alfabeto_minusculo.length;
   var acao;
   if (document.getElementById("acao_realizada_codificar").checked) {
      acao=document.getElementById("acao_realizada_codificar").value;
      console.log(acao);
   } 
   else if (document.getElementById("acao_realizada_decodificar").checked) {
      acao=document.getElementById("acao_realizada_decodificar").value;
      console.log(acao);
   }
   select = document.getElementById('algoritmo');
	var algoritmo = select.options[select.selectedIndex].value;
   var codificar = document.getElementById('codificar').value;
   if((acao=='codificar')&&(algoritmo=='base64')){
      code=window.btoa(codificar);
      alert(code);
   }
   if((acao=='decodificar')&&(algoritmo=='base64')){  
      encode=window.atob(codificar);
      alert(encode);
   }
   if((acao=='codificar')&&(algoritmo=='cifra_de_cesar')){
      var deslocamento=document.getElementById('input_deslocamento').value;
      if((deslocamento=='')||(isNaN(deslocamento))||(deslocamento<0)||(deslocamento>tamanho_alfabeto_maiusculo)){
         alert('O deslocamento precisa ser um número inteiro válido');
      }
      var tamanhoCodificar=codificar.length;
      var posicao_maiusculo;
      var posicao_minusculo;
      var codificada="";
      for(var indice=0; indice<tamanhoCodificar; indice++){
         posicao_maiusculo=alfabeto_maiusculo.indexOf(codificar[indice]);
         posicao_minusculo=alfabeto_minusculo.indexOf(codificar[indice]);
         if(posicao_maiusculo!=-1){
            codificada += alfabeto_maiusculo[(posicao_maiusculo+parseInt(deslocamento))%tamanho_alfabeto_maiusculo];
         }
         else if(posicao_minusculo!=-1){
            codificada += alfabeto_minusculo[(posicao_minusculo+parseInt(deslocamento))%tamanho_alfabeto_minusculo];
         }
         else{
            codificada+=codificar[indice];
         }
      }
      alert(codificada)
   }
   if((acao=='decodificar')&&(algoritmo=='cifra_de_cesar')){
      var deslocamento=document.getElementById('input_deslocamento').value;
      if((deslocamento=='')||(isNaN(deslocamento))||(deslocamento<0)||(deslocamento>tamanho_alfabeto_maiusculo)){
         alert(`O deslocamento precisa ser um número inteiro válido entre 0 e ${tamanho_alfabeto_maiusculo}`);
      }
      var tamanhoCodificar=codificar.length;
      var posicao_maiusculo;
      var posicao_minusculo;
      var codificada="";
      for(var indice=0; indice<tamanhoCodificar; indice++){
         posicao_maiusculo=alfabeto_maiusculo.indexOf(codificar[indice]);
         posicao_minusculo=alfabeto_minusculo.indexOf(codificar[indice]);
         if(posicao_maiusculo!=-1){
            codificada += alfabeto_maiusculo[(posicao_maiusculo-parseInt(deslocamento))<0?posicao_maiusculo-parseInt(deslocamento)+26:(posicao_maiusculo-parseInt(deslocamento))>26?(posicao_maiusculo-parseInt(deslocamento))-26:(posicao_maiusculo-parseInt(deslocamento))];
         }
         else if(posicao_minusculo!=-1){
            codificada += alfabeto_minusculo[(posicao_minusculo-parseInt(deslocamento))];
         }
         else{
            codificada+=codificar[indice];
         }
      }
      alert(codificada)
   }
   return 0;
}
