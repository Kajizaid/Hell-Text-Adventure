//VARIABLES GO HERE.
var lever = false;
var start = confirm("Are you ready to start the game?");

//END

//Creates the Player (custom constructor)
function Player(name, health, damageDealt, damageBonus, inventory){
    this.name = name;
    this.health = 100;
    this.damageDealt = 4;
    this.damageBonus = 6;
    this.inventory = [];
    
};

/* Area (custom constructor): 
* name: name of area
* E: East
* W: West
* S: South
* N: North
* desc: description
*/
function Area(name, desc, E, W, S, N)
{
    this.name = name;
    this.desc = desc;
    this.E = E;
    this.W = W;
    this.S = S;
    this.N = N;
    
}
//List of New Areas
var entranceOfHell = new Area("Entrance of Hell", "It's cold and dark. I think that's a pile of bones in the corner. There's a glowing light straight ahead", "You can't go East... it's too dark.", "You can't go West... it's too dark.", "You bump into a skeleton... Eek! You turn back around.", stage1);

//This is the first stage. Consider it level 1.
var stage1 = new Area("Start of Bridge of Hell", "It's very hot in here... There is fire everywhere. At least there is some light. Looking north, there is a bridge. It seems... broken?", eOfStage1, wOfStage1, entranceOfHell, bridge);

var eOfStage1 = new Area("East of Start of Bridge", "It's just a corner.", "You can't go East.", stage1, stage1, "You can't go North. You'll just bump into a wall!");

var wOfStage1 = new Area("West of Start of Bridge", "There's a lever.", stage1, "You can't go West.", stage1, "You can't go North. You'll just bump into a wall!");

var bridge = new Area("Bridge of Hell", "The bridge is long. Spikes line it. Monsters like to inhabit this bitch...", "You can't go East. You wanna fall off and die?", "C'mon, you can't go West. You'll fall off and stay a resident of Hell forever!", stage1, null);
//End of Level 1
                     

//End of List of new Areas.

//Starts game function -->
if (start) 
{
var question = prompt("What's your name?");
if(question)
{
    
 var player = new Player(question);
}
    gamePlay();
}
// --<

//gamePlay() function
function gamePlay(){
    
    //Story part 1
alert("'~Wake UP, " + player.name + "~.'");

alert("'~WAKE UP!~'");

alert("...You open your eyes, although it's hard to see in the still darkness.");

alert("'~There you are. I am the voice in your head. You have died and been taken to HELL.~'");

alert("You gasp. ...You always imagined Hell to be firey and hot... Yet, it's very chilly.");

alert("At least your health is at " + player.health + ".");

alert("'~Gather yourself, " + player.name + ". I reckon you do not want to be here... forever.~'");
    //END Story part 1
    
    
    
      }

//End of gamePlay() function
