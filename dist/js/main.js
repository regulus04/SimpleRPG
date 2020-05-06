import { Monster } from './Monsters.js';
import { Hero } from './Hero.js';
import { Items } from './Items.js';
import { BattleSystem } from './BattleSystem.js';
import { FieldSystem } from './FieldSystem.js';
import { FieldObject } from './FieldObject.js';

// Field 
const fieldContainer = document.querySelector('#field-container');
const mouseMoveArea = document.querySelector('#event-field');
const field = document.querySelector('#field');
const heroOnField = document.querySelector('#character');
// Field Menu
const menuBtn = document.querySelector('#cmd-menu');
const saveBtn = document.querySelector('#cmd-save');
const loadBtn = document.querySelector('#cmd-load');
// Menu
const menuScreen = document.querySelector('#menu-screen');
const menuItemList = document.querySelector('#menu-item-list');
const menuStatusLv = document.querySelector('#menu-status-lv');
const menuStatusHp = document.querySelector('#menu-status-hp');
const menuStatusMp = document.querySelector('#menu-status-mp');
const menuStatusAtk = document.querySelector('#menu-status-atk');
const menuStatusDef = document.querySelector('#menu-status-def');
const menuStatusSpd = document.querySelector('#menu-status-spd');
const menuStatusExp = document.querySelector('#menu-status-exp');
// Battle
const battleField = document.querySelector('#main-container');
const message = document.querySelector('#message');
const skipArrow = document.querySelector('#skip-arrow');
const backArrow = document.querySelector('#back-arrow');
const commandList = document.getElementById('command-list');
const heroMoveBox = document.querySelector('#player-box');
const monsterMoveBox = document.querySelector('#enemy-box');
const monsterName = document.querySelector('#enemy-name');
const monsterHp = document.querySelector('#enemy-hp');
const heroHp = document.querySelector('#hero-hp');
const heroMp = document.querySelector('#hero-mp');
// Action Command 
const attackCmd = document.querySelector('#action-attack');
const defendCmd = document.querySelector('#action-defend');
const itemCmd = document.querySelector('#action-item');
const runCmd = document.querySelector('#action-run');
// Attack Command
const attackList = document.querySelector('#attack-list');
const punchCmd = document.querySelector('#attack-punch');
const kickCmd = document.querySelector('#attack-kick');
const fireCmd = document.querySelector('#attack-fire');
const thunderCmd = document.querySelector('#attack-thunder');
// Item Command
const itemList = document.querySelector('#command-item-list');
// Generate Hero instance
let hero = new Hero;
let monster;
let items = new Items;
let bs = new BattleSystem;
let fs = new FieldSystem;
let fo = new FieldObject;
// Field 
let direction;
let charX, charY;
// Battle 
let heroAction;
let monsterAction;

// If movabele == 1, character can move on the field
let movable = 1;


class UI{
  // Field UI /////////////////////////////
  // Hero on the field move ////
  moveHero(count, direction, heroX, heroY){
    clearInterval(animation);
    
    var animation = setInterval(() => {
      movable = 2;
     
      var move = function(){
        console.log(count);
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
      move();
      // console.log(direction);
      // console.log(heroX, heroY);
      if(fs.encount() == true){
        clearInterval(animation);
    
        // When it goes back to field, set char in these positions
        charX = heroX;
        charY = heroY;
        console.log(charX, charY);
        setTimeout(function(){
          startButtle();
        }, 500);
      }else if(count < 0){
        clearInterval(animation);
        // adjust some error px
        this.adjustP(direction);
        movable = 1;
      }else if(fo.charStop(heroX, heroY, direction) == 'stop'){
        clearInterval(animation);
        // adjust some error px
        this.adjustP(direction);
        movable = 1;
      }
      
    }, 300);
  }
  // Adjust Distances //////
  adjustP(direction) {
    let heroX, heroY, errGapX, errGapY;
    heroX = heroOnField.getBoundingClientRect().x - mouseMoveArea.getBoundingClientRect().x;
    heroY = heroOnField.getBoundingClientRect().y - mouseMoveArea.getBoundingClientRect().y;
    errGapX = heroX -  Math.floor(heroX / 50) * 50;
    errGapY = heroY -  Math.floor(heroY / 50) * 50;

    if(fo.charStop(heroX, heroY, direction) == 'stop'){
      switch(direction){
        case "right":
          heroOnField.style.left = heroX - errGapX + 'px';
          break;
        case "left":
          heroOnField.style.left = heroX - errGapX + 'px';
          break;
        case "up":
          heroOnField.style.top = heroY - errGapY + 'px';
          break;
        case "down":
          heroOnField.style.top = heroY  - errGapY + 'px';
          break;
      }
    }else{
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
  }
  setChar(charX, charY){
    heroOnField.style.left = charX + 'px';
    heroOnField.style.top = charY + 'px';
  }
  openMenu(){
    menuScreen.style.display = 'grid';
    field.style.display = 'none';
    menuStatusLv.textContent = `${hero.lv}`;
    menuStatusHp.textContent = `${hero.hp} / ${hero.maxHp}`;
    menuStatusMp.textContent = `${hero.mp} / ${hero.maxMp}`;
    menuStatusAtk.textContent = `${hero.atk}`;
    menuStatusDef.textContent = `${hero.def}`;
    menuStatusSpd.textContent = `${hero.spd}`;
    menuStatusExp.textContent = `${hero.exp} / ${hero.maxExp}`;
    this.itemsOn(menuItemList);
  }
  closeMenu(){
    menuScreen.style.display = 'none';
    field.style.display = 'block';
  }
  // Switch scene ///////////
  battleEnd(){
    this.setChar(charX, charY);
    fieldContainer.style.display = "flex";
    battleField.style.display = "none";
    movable = 1;
  }
  battleStart(){
    fieldContainer.style.display = "none";
    battleField.style.display = "flex";
    backArrow.style.display = 'none';
  }
  // Buttle UI /////////////////
  arrowOn(){
    skipArrow.style.display = 'block';
  }
  arrowOff(){
    skipArrow.style.display = 'none';
  }
  backArrowOn(){
    backArrow.style.display = 'block';
  }
  backArrowOff(){
    backArrow.style.display = 'none';
  }
  messageOn(content){
    message.style.display = 'block';
    message.textContent = content;
  }
  damageMessageOn(who, damage){
    this.messageOn(`${who} got ${damage} damage!`);
    this.arrowOn();
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
  attackOn(){
    attackList.style.display = 'flex';
    backArrow.style.display = 'block';
    backNum = 1;
  }
  attackOff(){
    attackList.style.display = 'none';
    backArrow.style.display = 'none';
    backNum = 0;
  }
  itemsOn(destination){
    this.commandOff();
    destination.style.display = 'block';
    backArrow.style.display = 'block';
    while(destination.firstChild) {
      destination.removeChild(destination.firstChild);
    }
    items.itemList.forEach(function(item){
      if(item['stock'] != 0){
        const one = document.createElement('div');
        one.textContent = `${item['name']}[${item['stock']}]`;
        destination.appendChild(one); 
      }
    });
    backNum = 2;
  }
  itemsOff(){
    itemList.style.display = 'none';
    backArrow.style.display = 'none';
    this.commandOn();
  }
  applyEnemy(name, hp, color){
    monsterName.textContent = name;
    monsterHp.textContent = hp;
    monsterMoveBox.style.background = color;
  }
  applyHero(hp, mp){
    heroHp.textContent = hp;
    heroMp.textContent = mp;
  }
  // Action Animation ////
  punchAnime(){
    heroMoveBox.style.background = 'red';
    this.messageOn('Hero is punching!');
    setTimeout(function(){
      heroMoveBox.style.background = 'steelblue';
      ui.messageOff();
    }, 1000);
  }
  getDamageAnime(e){
    if(e == 1){
      heroMoveBox.style.animationPlayState = 'running';
      setTimeout(function(){
        heroMoveBox.style.animationPlayState = 'paused';
      }, 1200);
    }else{
      monsterMoveBox.style.animationPlayState = 'running';
      setTimeout(function(){
        monsterMoveBox.style.animationPlayState = 'paused';
      }, 1200);
    }
  }
}
// Generate UI instance
const ui = new UI();

// Field //////////////////////////
// Menu ////////
menuBtn.addEventListener('click', runMenu);
let menuNum = 0;
function runMenu(){
  if(menuNum == 0){
    ui.openMenu();
    menuNum = 1;
  }else{
    ui.closeMenu();
    menuNum = 0;
  }
}

// Move character function ///////////////////////////////////////
mouseMoveArea.addEventListener('click', runMoveChar);
// this number let disable runmovechar while they are moving
function runMoveChar(e){
  if(movable == 1){

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
    if(gapX < 0 && gapX > -50){
      moveCountX = 0;
    }else if(gapY < 0 && gapY > -50){
      moveCountY = 0;
    }

    if(heroX <= mouseX && mouseX <= heroX + 50){
      if(heroY < mouseY){
        direction = 'down';
        ui.moveHero(moveCountY, direction, heroX, heroY);
        // if(fo.charStop(heroX, heroY, direction) != 'stop'){
        // }
      }else{
        moveCountY += 1;
        direction = 'up';
        ui.moveHero(moveCountY, "up", heroX, heroY);
      }
    }else if(heroY <= mouseY && mouseY <= heroY + 50){
      if(heroX < mouseX){
        direction = 'right';
        ui.moveHero(moveCountX, "right", heroX, heroY);
      }else{
        moveCountX += 1;
        direction = 'left';
        ui.moveHero(moveCountX, "left", heroX, heroY);
      }
    }else if(Math.abs(gapX) > Math.abs(gapY)){
      if(gapX > 0){
        direction = 'right';
        ui.moveHero(moveCountX, "right", heroX, heroY);
      }else{
        moveCountX += 1;
        direction = 'left';
        ui.moveHero(moveCountX, "left", heroX, heroY);  
      }
    }else{
      if(gapY > 0){
        direction = 'down';
        ui.moveHero(moveCountY, "down", heroX, heroY);
      }else{
        moveCountY += 1;
        direction = 'up';
        ui.moveHero(moveCountY, "up", heroX, heroY);
      }
    }
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



// Battle ///////////////////////////////////////////////
// startButtle();
// Experiment zone////////////////////

// Back arrow ////////////
backArrow.addEventListener('click', runBack);
let backNum = 0;
function runBack(){
  switch (backNum){
    case 1 :
      ui.attackOff();
      ui.commandOn();
      break;
    case 2 :
      ui.itemsOff();
      break;
  }
}
// Skip arrow //////////// Battle Turn Process //////
skipArrow.addEventListener('click', runNext);
let skipNum = 'battle start';
function runNext(){
  switch(skipNum){
    case 'battle start' :
      ui.messageOff();
      ui.commandOn();
      break;
    case 'battle end' :
      ui.backArrowOff();
      ui.battleEnd();
      skipNum = 'battle start';
      break;
    case 'second hero' :
      ui.arrowOff();
      heroAction();
      // Check if mosnter is alive //
      if(monster.hp == 0){
        skipNum = 'won';
      }else{
        skipNum = 'turn end';
      }
      break;
    case 'second monster' :
      ui.arrowOff();
      monsterAction();
      // Check if hero is alive //
      if(hero.hp == 0){
        skipNum = 'lost';
      }else{
        skipNum = 'turn end';
      }
      break;
    case 'turn end':
      ui.messageOff();
      ui.arrowOff();
      ui.commandOn();
      break;
    case 'run' :
      ui.battleEnd();
      skipNum = 'battle start';
      break;
    case 'won' :
      ui.messageOn(`Hero beat ${monster.name}!`);
      skipNum = 'get exp';
      break;
    case 'get exp' :
      ui.messageOn(`Hero got ${monster.exp} exp!`);
      hero.recieveExp(monster.exp);
      if(hero.exp >= 100){
        skipNum = 'level up';
        hero.resetExp();
      }else{
        skipNum = 'get item';
      }
      break;
    case 'level up' :
      ui.messageOn('Hero leveled up!');
      skipNum = 'get item';
      break;
    case 'get item' :
      let item = monster.itemDrop();
      console.log(item);
      if(item == 0){
        ui.battleEnd();
        skipNum = 'battle start';
      }else{
        items.getItem(item);
        ui.messageOn(`${monster.name} dropped ${item}!`);
        ui.arrowOn();
        skipNum = 'battle end';
      }
      break;
    case 'lost' :
      alert('Game Over');
      break;
  }
}
//////////////////////////////////
// Attack command ////
attackCmd.addEventListener('click', function(){
  ui.commandOff();
  ui.attackOn();
});
// Punch /////
punchCmd.addEventListener('click', runPunch);
function runPunch(){
  ui.backArrowOff();
  heroAction = function punchTurn(){
    ui.attackOff();
    let damage = hero.punch(monster);
    monster.hp = bs.hpAdjust(monster.hp);
    ui.punchAnime();
    setTimeout(ui.getDamageAnime.bind(null,0), 1000);
    setTimeout(function(){
      ui.applyEnemy(monster.name, monster.hp);
      ui.damageMessageOn(monster.name, damage);
    }, 2200);
    console.log('punch action');
  }

  battleProcess();
}

// Item Command ////
itemCmd.addEventListener('click', function(){
  ui.itemsOn(itemList);
});

// Run away ////
runCmd.addEventListener('click', runAway);
function runAway(){
  ui.commandOff();
  ui.messageOn('Hero escaped successflly');
  ui.arrowOn();
  skipNum = 'run';
}

// Enemy Turn /////
monsterAction = function enemyTurn(){
  ui.attackOff();
  let damage = monster.attack(hero);
  hero.hp = bs.hpAdjust(hero.hp);
  ui.applyHero(hero.hp, hero.mp);
  ui.damageMessageOn(hero.name, damage);
}

// Battle turns process
function battleProcess(){
  if(bs.compareSp(hero, monster) == 1){
    heroAction();
    // Check if mosnter is alive //
    if(monster.hp == 0){
      skipNum = 'won';
    }else{
      skipNum = 'second monster';
    }
  }else{
    monsterAction();
    // Check if hero is alive //
    if(hero.hp == 0){
      skipNum = 'lost';
    }else{
      skipNum = 'second hero';
    }
  }
}