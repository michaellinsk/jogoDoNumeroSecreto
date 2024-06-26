let listaDeNumerosSorteados = [];
let numeroLimite = 10 ;
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
   exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
function verificarChute(){
   let chute = document.querySelector('input').value;
   let palavraTentativa = tentativas > 1? 'tentativas!' : 'tentativa!';
   let menssagemTentativas = `Você Descobriu o número secreto com ${tentativas} ${palavraTentativa} `;
   if(chute == numeroSecreto){
      exibirTextoNaTela('h1', 'Parabéns!');
      exibirTextoNaTela('p', menssagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
      if(chute > numeroSecreto){
         exibirTextoNaTela('p', 'O número secreto é menor');
      }else{
         exibirTextoNaTela('p', 'O Numero secreto é maior');
      }
      tentativas  ++;
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