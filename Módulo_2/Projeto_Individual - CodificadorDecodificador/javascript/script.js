const alfabeto_minusculo = 'abcdefghijklmnopqrstuvwxyz';/*Declaração de constantes*/
const alfabeto_maiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
var tamanho_alfabeto_maiusculo=alfabeto_maiusculo.length;
var tamanho_alfabeto_minusculo=alfabeto_minusculo.length;
var acao;

function muda_botao(){
   if (document.getElementById("acao_realizada_codificar").checked) {
      document.getElementById("submit").value='Codificar';              /*função para mudar botões*/
   } 
   else if (document.getElementById("acao_realizada_decodificar").checked) {
      document.getElementById("submit").value='Decodificar';
   }
}

function mostra_campo_deslocamento(){
   var select = document.getElementById('algoritmo');
   var input_deslocamento = document.getElementById('label_deslocamento'); /*função para deixar oculto ou ativo o input deslocamento*/
   input_deslocamento.style.visibility = (select.value == 'cifra_de_cesar') 
      ? "visible"
      : "hidden";  
}
function codificar(){/*Função de escolha qual algoritmo usar*/
   if (document.getElementById("acao_realizada_codificar").checked) {
      acao=document.getElementById("acao_realizada_codificar").value;
   } 
   else if (document.getElementById("acao_realizada_decodificar").checked) {
      acao=document.getElementById("acao_realizada_decodificar").value; 
   }
   var codificado=document.getElementById('codificado');
   select = document.getElementById('algoritmo');
	var algoritmo = select.options[select.selectedIndex].value;
   var codificar = document.getElementById('codificar').value;
   if((acao=='codificar')&&(algoritmo=='base64')){
      codificarBase64(codificar, codificado);
   }
   if((acao=='decodificar')&&(algoritmo=='base64')){  
      decodificarBase64(codificar, codificado)
   }
   if((acao=='codificar')&&(algoritmo=='cifra_de_cesar')){
      codificarCifraDeCesar(codificar, codificado)
   }
   if((acao=='decodificar')&&(algoritmo=='cifra_de_cesar')){
      decodificarCifraDeCesar(codificar, codificado)
   }
}

function codificarBase64(codificar, codificado){/*Função Codificar Base64*/
   code=window.btoa(codificar);
   codificado.textContent = code
}

function decodificarBase64(codificar, codificado){/*Função Decodificar Base64*/
   encode=window.atob(codificar);
   codificado.textContent = encode;
}

function codificarCifraDeCesar(codificar, codificado){/*Função Codificar Cifra de César*/
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
   codificado.textContent = codificada
}

function decodificarCifraDeCesar(codificar, codificado){/*Função Decodificar Cifra de César*/
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
   codificado.textContent = codificada
}