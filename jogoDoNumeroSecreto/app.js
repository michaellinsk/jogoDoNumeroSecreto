let listaDeNumerosSorteados = [];
let numeroLimite = 100 ;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;   
   responsiveVoice.speak(texto,'Brazilian Portuguese Female', {RATE:1.2});
}

exibirMenssagemInicial();

function exibirMenssagemInicial() {
   exibirTextoNaTela('h1', 'Jogo do número secreto');
   exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
function verificarChute() {
   let chute = document.querySelector('input').value;
   let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!';
   let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} `;
   
   if (chute == numeroSecreto) {
       exibirTextoNaTela('h1', 'Parabéns!');
       exibirTextoNaTela('p', mensagemTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
       let mensagemErro = chute > numeroSecreto ? 'O número secreto é menor' : 'O número secreto é maior';

       // Verifica múltiplos de 2, 3, 5 e 7 e adiciona à mensagem
       if (numeroSecreto % 2 === 0) {
           mensagemErro += ' , é múltiplo de 2.';
       } 
       if (numeroSecreto % 3 === 0) {
           mensagemErro += ' ,é múltiplo de 3.';
       } 
       if (numeroSecreto % 5 === 0) {
           mensagemErro += ' , é múltiplo de 5.';
       }   
       if (numeroSecreto % 7 === 0) {
           mensagemErro += ' , é múltiplo de 7.';
       }  

       exibirTextoNaTela('p', mensagemErro);
       tentativas++;
       limparCampo();
   }
}


function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantElementosNaLista = listaDeNumerosSorteados.length;

   if (quantElementosNaLista == numeroLimite){
      listaDeNumerosSorteados =[];
   }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
      gerarNumeroAleatorio();
   }else{
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados)
      return numeroEscolhido;
   }
}

function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';   
}

function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMenssagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
  
}
// Adiciona o evento de "keypress" para enviar o chute com a tecla Enter
document.querySelector('input').addEventListener('keypress', function(event) {
   if (event.key === 'Enter') {
       verificarChute();
   }
});