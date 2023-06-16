
//Variáveis dos objetos do jogo
var fundo;
var player;
var objeto = [];
var IMGobjeto = [];
var ponto = 0;
var somEspada;
var somObjeto;
//Define a velocidade como 5
var velocidade = 5;


//Funcionamento da Variáveis
function preload() {
  fundo = loadImage("Jogo/IMGjogo/fundo_dragon.png");
  player = loadImage("Jogo/IMGjogo/dragon3.png");
  //Adiciona player no jogo
  player = new Player();

  //Listagem de UP de IMG dos Objetos
  IMGobjeto[0] = loadImage("Jogo/IMGjogo/espada.png");
  IMGobjeto[1] = loadImage("Jogo/IMGjogo/gems.png");
  IMGobjeto[2] = loadImage("Jogo/IMGjogo/gold1.png");
  IMGobjeto[3] = loadImage("Jogo/IMGjogo/ovo.png");
  IMGobjeto[4] = loadImage("Jogo/IMGjogo/fire.png");
  IMGobjeto[5] = loadImage("Jogo/IMGjogo/comida.png");
  //Listagem de adição dos Objetos
  objeto[0] = new Objetos();
  objeto[1] = new Objetos();
  objeto[2] = new Objetos();
  objeto[3] = new Objetos();
  objeto[4] = new Objetos();
  objeto[5] = new Objetos();
  //SONS da ESPADA e dos OBJETOS
  somEspada = loadSound("Jogo/SOUND/Decapitation.mp3");
  somObjeto = loadSound("Jogo/SOUND/objeto.mp3");
}

function setup() {
  createCanvas(600, 400).parent("jogo");
}

//Funcionamento dos recursos do Cenário
function draw() {
  executarJogo();
}
