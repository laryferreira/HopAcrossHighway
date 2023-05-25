// ator:
let Yator = 366;
let Xator = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, Xator, Yator, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    Yator -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    Yator += 3;
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(Xcarros[i],Ycarros[i], comprimentoCarro, alturaCarro, Xator, Yator, 15)
    if (colisao){
      posicaoInicial();
      somdaColisao.play();
      if (meusPontos > 0){
      meusPontos -= 1;
      }
    }
  }
}

function posicaoInicial(){
  Yator = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (Yator < 15){
    meusPontos += 1;
    somdoPonto.play();
    posicaoInicial()
  }
}

function podeSeMover(){
    return Yator < 366;
}
