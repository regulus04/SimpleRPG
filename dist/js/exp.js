const startBtn = document.getElementById('start-button');
const commandList = document.getElementById('command-list');
const heroAttack1 = document.querySelector('#action-1');
const heroAttack2 = document.querySelector('#action-2');
const heroAttack3 = document.querySelector('#action-3');
const heroAttack4 = document.querySelector('#action-4');
const heroHpText = document.querySelector('#hero-hp');
const heroMpText = document.querySelector('#hero-mp');
const heroMoveBox = document.querySelector('#player-box'); 
const heroHp = document.querySelector('#hero-hp');
const enemyMoveBox = document.querySelector('#enemy-box');
const enemyName = document.querySelector('#enemy-name');
const enemyHp = document.querySelector('#enemy-hp');
const enemyTurn = document.querySelector('#enemy-turn');

let enemy;
let hp = 100;
let heroMp = 20;

// Start game & choose the enemy
startBtn.addEventListener('click', startGame);
function startGame(){
  startBtn.style.display = "none";
  commandList.style.display = "flex";

  let enemyNum;
  enemyNum = Math.floor(Math.random() * 4) + 1;
  enemy = new GameEnemy(enemyNum);
  console.log(enemyNum);

  // Enemy's UI
  enemyName.textContent = enemy.name;
  enemyHp.textContent = enemy.hp;
  enemyMoveBox.style.background = enemy.color;
}

function GameEnemy(enemy_id) {
  switch(enemy_id){
    case 1 :
      this.hp = 10;
      this.name = "Goomba";
      this.attack = 2;
      this.color = "saddlebrown";
      break;
    case 2:
      this.hp = 20;
      this.name = "Koopa";
      this.attack = 5;
      this.color = "seagreen";
      break;
    case 3:
      this.hp = 30;
      this.name = "Patapata"
      this.attack = 10;
      this.color = "crimson";
      break;
    default:
      this.hp = 500;
      this.name = "Bowser";
      this.attack = 20;
      this.color = "green";
      break;
  }
}

function HeroAction(actionName){
  switch(actionName){
    case "Punch" :
      this.damage = 1;
      this.mp = 0;
      this.move = "forward-once";
      break;
    case "Kick":
      this.damage = 2;
      this.mp = 1;
      this.move = "forward-twice";
      break;
    case "Fire":
      this.damage = 3;
      this.mp = 2;
      this.move = "jump";
      break;
    default:
      this.damage = 4;
      this.mp = 3;
      this.move = "jump-twice";
      break;
  }
}
// Hero's action animation
HeroAction.prototype.heroAnimation = function(actionNum){
  // Action list
  if(actionNum == "forward-once"){
    heroMoveBox.style.transition = "all 0.5s ease";
    heroMoveBox.style.left = "100px";
    var animation = function(){
      heroMoveBox.style.left = "0";
    } 
    setTimeout(animation, 500);
  }else if(actionNum == "forward-twice"){
    heroMoveBox.style.transition = "all 0.2s ease";
    heroMoveBox.style.left = "100px";
    var animation = function(){
      heroMoveBox.style.left = "0";
      console.log("hello");
    } 
    setTimeout(animation, 200);
    var animation2 = function(){
      heroMoveBox.style.left = "100px";
      console.log("hello");
    } 
    setTimeout(animation2, 400);
    var animation3 = function(){
      heroMoveBox.style.left = "0";
      console.log("hello");
    } 
    setTimeout(animation3, 600);
  }else if(actionNum == "jump") {
    heroMoveBox.style.transition = "all 0.5s ease";
    heroMoveBox.style.bottom = "100px";
    var animation = function(){
      heroMoveBox.style.bottom = "0";
    } 
    setTimeout(animation, 500);
  }else if(actionNum == "jump-twice"){
    heroMoveBox.style.transition = "all 0.2s ease";
    heroMoveBox.style.bottom = "100px";
    var animation = function(){
      heroMoveBox.style.bottom = "0";
      console.log("hello");
    } 
    setTimeout(animation, 200);
    var animation2 = function(){
      heroMoveBox.style.bottom = "100px";
      console.log("hello");
    } 
    setTimeout(animation2, 400);
    var animation3 = function(){
      heroMoveBox.style.bottom = "0";
      console.log("hello");
    } 
    setTimeout(animation3, 600);
  }
}

// Enemy's action animation
function enemyAnimation(){
  enemyTurn.style.display = "none";
  enemyMoveBox.style.transition = "all 0.5s ease";
  enemyMoveBox.style.left = "-100px";
  var animation = function(){
    enemyMoveBox.style.left = "0";
  } 
  setTimeout(animation, 500);
}


// I dont know when and why i have to use this
GameEnemy.prototype.receiveDamage = function(amount) {
  this.hp -= amount;
}

// Getting damage action
function enemyDamageAnimation(){
  enemyMoveBox.style.transition = "all 0.5s ease";
  enemyMoveBox.style.opacity = "0.3";
  var animation = function(){
    enemyMoveBox.style.opacity = "1";
  }
  setTimeout(animation, 500);
}
function heroDamageAnimation(){
  heroMoveBox.style.transition = "all 0.5s ease";
  heroMoveBox.style.opacity = "0.3";
  var animation = function(){
    heroMoveBox.style.opacity = "1";
  }
  setTimeout(animation, 500);
}


// Hero's action
heroAttack1.addEventListener('click', runAttack);
heroAttack2.addEventListener('click', runAttack);
heroAttack3.addEventListener('click', runAttack);
heroAttack4.addEventListener('click', runAttack);
function runAttack(e){
  // Hero's turn
  const action = new HeroAction(e.target.textContent);
  if(heroMp - action.mp < 0){
    alert('You dont have enough MP to do that');
  }else{
    heroMp -= action.mp;
    heroMpText.textContent = heroMp;
    commandList.style.display = "none";
    action.heroAnimation(action.move);
    if(enemy.hp - action.damage <= 0){
      enemyHp.textContent = 0;
      var result = function(){
        alert('You won');
      }
      setTimeout(result, 1000);
    }else{
      enemy.hp -= action.damage;
      enemyHp.textContent = enemy.hp;
      enemyDamageAnimation();
      var turnChange = function(){
        enemyTurn.style.display = "block";
      }
      setTimeout(turnChange, 1000);
    }
  }
}

// Enemy's turn
enemyTurn.addEventListener('click', runEnemy);
function runEnemy(){
  enemyAnimation();
  heroDamageAnimation();
  var result = function(){
    hp -= enemy.attack;
    if(hp <= 0){
      heroHp.textContent = 0;
      var result = function(){
        alert('You lost');
      }
      setTimeout(result, 1000);
    }else{
      heroHp.textContent = hp;
      commandList.style.display = "flex";
    }
  }
  setTimeout(result, 500);
}

