//PASSO 1 CRIAR AS VARIÁVEIS
var trex, trex_correndo;
var solo, soloimagem;

function preload() {
    //carregar a imagem do solo
soloimagem=loadImage("solo.png")
    //carregar a animação do t-rex

}

function setup() {
    createCanvas(600, 200);

    //criar a sprite solo;
solosprite=createSprite(300,180)
    //adicionar a imagem na sprite solo
solosprite.addImage(soloimagem)
    //dar velocidade ao solo
solosprite.velocityX=-3



    //criar a sprite trex;

    //adicionar a animação na sprite do t-rex

    //definir o tamanho da animação


}

function draw() {
    background("orange");

    //reiniciar a posição do solo automaticamente
if (solosprite.x<0) {solosprite.x=solosprite.width / 2
    
}

    //fazer o trex pular se apertar espaço


    //dar gravidade ao trex


    //impedir o trex de cair no abismo


    drawSprites();

}