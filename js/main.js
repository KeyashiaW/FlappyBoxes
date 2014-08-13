//Initialize Phaser Engine. Create a 400x490px game.

var game = new Phaser.Game(400, 490, Phaser.AUTO, "gameDiv");

//Create our 'main' state that will contain the game
//This is the body of the game itself. It contains all relevant code

var mainState = {
  
    preload: function (){
    //This function will execute at the beginning of the game
    //Here we'll load all of our assests (art, music, etc)
    }, 
    
    create: function () {
     //The creatae function is called right after the preload f(x)
     //This is where we'll set up the game assests from scratch 
    },
   
    update: function () {
     //This function is called 60times a second
     //IT contains the games logic and all time related actions
       
    }
  
  
  
  
  
}


//Add and start the gameState
game.state.add('main', mainState);
game.state.start('main');