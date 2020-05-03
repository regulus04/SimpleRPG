import { Monster } from './Monsters.js';
import { Hero } from './Hero.js';

const fieldContainer = document.querySelector('#field-container');
const mouseMoveArea = document.querySelector('#event-field');
const field = document.querySelector('#field');
const heroOnField = document.querySelector('#character');

const battleField = document.querySelector('#main-container');
const message = document.querySelector('#message');
const skipArrow = document.querySelector('#skip-arrow');
const commandList = document.getElementById('command-list');
const enemyMoveBox = document.querySelector('#enemy-box');
const enemyName = document.querySelector('#enemy-name');
const enemyHp = document.querySelector('#enemy-hp');
const heroHp = document.querySelector('#hero-hp');
const heroMp = document.querySelector('#hero-mp');
// Command 
const attackCmd = document.querySelector('#action-attack');
const defendCmd = document.querySelector('#action-defend');
const itemCmd = document.querySelector('#action-item');
const runCmd = document.querySelector('#action-run');

// Generate Hero instance
let hero;
hero = new Hero;

let monster;

class UI{
  // Field /////////////////////
  moveHero(count, direction, heroX, heroY){
    clearInterval(animation);
    var move = function(){
      count -= 1;
      switch(direction){
        case "right":
          heroX = heroX + 50;
          heroOnField.style.left = heroX + 'px';
          break;
        case "left":
          heroX = heroX - 50;
          heroOnField.style.left = heroX + 'px';    
          break;
        case "up":
          heroY = heroY - 50;
          heroOnField.style.top = heroY + 'px';    
          break;
        case "down":
          heroY = heroY + 50;
          heroOnField.style.top = heroY + 'px';
          break;
      }
    }
    var animation = setInterval(() => {
      movable = 2;
      move();
      encount();
      if(count < 0){
        clearInterval(animation);
        movable = 1;
        // adjust some error px
        this.adjustP(direction);
      }
    }, 300);
  }
  adjustP(direction) {
    let heroX, heroY, errGapX, errGapY;
    heroX = heroOnField.getBoundingClientRect().x - mouseMoveArea.getBoundingClientRect().x;
    heroY = heroOnField.getBoundingClientRect().y - mouseMoveArea.getBoundingClientRect().y;
  
    errGapX = heroX -  Math.floor(heroX / 50) * 50;
    errGapY = heroY -  Math.floor(heroY / 50) * 50;
    switch(direction){
      case "right":
        heroOnField.style.left = heroX + 50 - errGapX + 'px';
        break;
      case "left":
        heroOnField.style.left = heroX - errGapX + 'px';
        break;
      case "up":
        heroOnField.style.top = heroY - errGapY + 'px';
        break;
      case "down":
        heroOnField.style.top = heroY + 50 - errGapY + 'px';
        break;
    }
  }
  // Switch scene 
  battleEnd(){
    fieldContainer.style.display = "flex";
    battleField.style.display = "none";
  }
  battleStart(){
    fieldContainer.style.display = "none";
    battleField.style.display = "flex";
  }
  // Buttle /////////////////
  arrowOn(){
    skipArrow.style.display = 'block';
  }
  arrowOff(){
    skipArrow.style.display = 'none';
  }
  messageOn(content){
    message.style.display = 'block';
    message.textContent = content;
  }
  messageOff(){
    message.style.display = 'none';
  }
  commandOn(){
    commandList.style.display = 'flex';
    skipArrow.style.display = 'none';
  }
  commandOff(){
    commandList.style.display = 'none';
  }
  applyEnemy(name, hp, color){
    enemyName.textContent = name;
    enemyHp.textContent = hp;
    enemyMoveBox.style.background = color;
  }
  applyHero(hp, mp){
    heroHp.textContent = hp;
    heroMp.textContent = mp;
  }
}
// Generate UI instance
const ui = new UI();

// Field //////////////////////
mouseMoveArea.addEventListener('click', runMoveChar);
// this number let disable runmovechar while they are moving
let movable; 
movable = 1;

// Move character function
function runMoveChar(e){
  
  if(movable == 1){

    var ui = new UI();
    // mouse position
    let mouseX, mouseY;
    mouseX = e.offsetX;
    mouseY = e.offsetY;
  
    // Get Hero's position in the field
    let heroX, heroY;
    heroX = heroOnField.getBoundingClientRect().x - field.getBoundingClientRect().x;
    heroY = heroOnField.getBoundingClientRect().y - field.getBoundingClientRect().y;
    
    let gapX, gapY;
    
    gapX = mouseX - heroX;
    gapY = mouseY - heroY;
    // Calculate move times 
    let moveCountX = Math.floor(Math.abs(gapX) / 50) - 1;
    let moveCountY = Math.floor(Math.abs(gapY) / 50) - 1;

    if(heroX <= mouseX && mouseX <= heroX + 50){
      if(heroY < mouseY){
        ui.moveHero(moveCountY, "down", heroX, heroY);
      }else{
        moveCountY += 2;
        ui.moveHero(moveCountY, "up", heroX, heroY);
      }
    }else if(heroY <= mouseY && mouseY <= heroY + 50){
      if(heroX < mouseX){
        ui.moveHero(moveCountX, "right", heroX, heroY);
      }else{
        moveCountX += 2;
        ui.moveHero(moveCountX, "left", heroX, heroY);
      }
    }else if(Math.abs(gapX) > Math.abs(gapY)){
      if(gapX > 0){
        ui.moveHero(moveCountX, "right", heroX, heroY);
      }else{
        moveCountX += 2;
        ui.moveHero(moveCountX, "left", heroX, heroY);  
      }
    }else{
      if(gapY > 0){
        ui.moveHero(moveCountY, "down", heroX, heroY);
      }else{
        moveCountY += 2;
        ui.moveHero(moveCountY, "up", heroX, heroY);
      }
    }
  }

}


// Encount ///////////////
function encount(){
  let encountNum = Math.floor(Math.random() * 20 + 1);
  
  if(encountNum == 20){
    startButtle();
  }
}
function startButtle(){
  // UI
  ui.battleStart();
  let enemyNum;
  enemyNum = Math.floor(Math.random() * 4) + 1;
  // Load Monster's data
  monster = new Monster(enemyNum);
  // Enemy's UI
  ui.applyEnemy(monster.name, monster.hp, monster.color);
  ui.messageOn(`${monster.name} sprang out!!!`);
}

// Battle //////////////////////////////////
// switch (temporary)
// startButtle();
// Experiment zone////////////////////
// monster.attack(hero);
// console.log(hero);
// ui.applyHero(hero.hp, hero.mp);
// hero.punch(monster);
// setTimeout(ui.applyEnemy.bind(null, monster.name, monster.hp), 1000);

// Skip arrow ////////////
skipArrow.addEventListener('click', runNext);
let skipNum = 1;
function runNext(){
  if(skipNum == 1){
    ui.messageOff();
    ui.commandOn();
    skipNum = 2;
  }else if(skipNum == 'run'){
    ui.battleEnd();
    skipNum = 1;
  }
}

// Run away ////
runCmd.addEventListener('click', runAway);
function runAway(){
  ui.commandOff();
  ui.messageOn('Hero escaped successflly');
  ui.arrowOn();
  skipNum = 'run';
}