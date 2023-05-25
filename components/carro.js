// carros:

let Xcarros = [600, 600, 600, 600, 600, 600]
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.8]
let Ycarros = [40,96,150,210, 270, 320]
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], Xcarros[i], Ycarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    Xcarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicial(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(Xcarros[i])){
      Xcarros[i] = 600;
    }
  }
}

function passouTodaATela(Xcarro){
  return Xcarro < - 50;
}
