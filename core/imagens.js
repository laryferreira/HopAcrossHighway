//imagens e sons do jogo
//imagens
let imagemdaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
// sons
let somdaTrilha;
let somdaColisão;
let somdoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage("imagens/ator-1.png")
  imagemCarro = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  somdaTrilha = loadSound("sons/trilha.mp3");
  somdaColisao = loadSound("sons/colidiu.mp3")
  somdoPonto= loadSound("sons/pontos.wav")
}
