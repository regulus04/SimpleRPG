import { Monsters } from './Monsters.js';
import { Hero } from './Hero.js';
import { Items } from './Items.js';
import { EquipItems } from './EquipItems.js';
import { BattleSystem } from './BattleSystem.js';
import { FieldSystem } from './FieldSystem.js';
import { FieldObject } from './FieldObject.js';
import { SecondFieldObject } from './SecondFieldObject.js';
import { FirstBoss } from './FirstBoss.js';
import { SecondBoss } from './SecondBoss.js';
import { Weapons } from './Weapons.js';
import { Shoes } from './Shoes.js';
import { Caps } from './Caps.js';
import { Shirts } from './Shirts.js';
import { Craft } from './Craft.js';
import { ThirdBoss } from './ThirdBoss.js';
import { ThirdFieldObject } from './thirdFieldObject.js';
import { FourthFieldObject } from './FourthFieldObject.js';
import { FifthFieldObject } from './FifthFieldObject.js';

// Functions I want to add later 
// 1. typing message(by array and foreach)

// Field 
const blackFade = document.querySelector('#black-fade');
const fieldContainer = document.querySelector('#field-container');
const mouseMoveArea = document.querySelector('#event-field');
const field = document.querySelector('#field');
const fieldObstacles = document.querySelector('#field-obstacles');
const heroOnField = document.querySelector('#character');
// Field Character and Obstacles
const boss = document.querySelector('#boss');
// Field Menu
const menuBtn = document.querySelector('#cmd-menu');
const craftBtm = document.querySelector('#cmd-craft');
const saveBtn = document.querySelector('#cmd-save');
const loadBtn = document.querySelector('#cmd-load');
// Field Message
const fieldMessage = document.querySelector('#field-message-box');
const leftTriangle = document.querySelector('#left-triangle');
const rightTriangle = document.querySelector('#right-triangle');
const yesBox = document.querySelector('#yes-box');
const noBox = document.querySelector('#no-box');
// Menu
const menuScreen = document.querySelector('#menu-screen');
const menuItemList = document.querySelector('#menu-item-list');
const menuItems = document.querySelector('#menu-items-title');
const menuEquip = document.querySelector('#menu-equip-title');
const menuStatusLv = document.querySelector('#menu-status-lv');
const menuStatusHp = document.querySelector('#menu-status-hp');
const menuStatusMp = document.querySelector('#menu-status-mp');
const menuStatusAtk = document.querySelector('#menu-status-atk');
const menuStatusDef = document.querySelector('#menu-status-def');
const menuStatusSpd = document.querySelector('#menu-status-spd');
const menuStatusExp = document.querySelector('#menu-status-exp');
const menuHeroB = document.querySelector('#menu-hero-body');
const menuHeroT = document.querySelector('#menu-hero-t-shirt');
const menuHeroW = document.querySelector('#menu-hero-weapon');
const menuHeroS = document.querySelector('#menu-hero-shoes');
const menuHeroC = document.querySelector('#menu-hero-head');
const menuHeroE = document.querySelector('#menu-hero-effect');
// Craft
const craftScreen = document.querySelector('#craft-screen');
const materialList = document.querySelector('#craft-material-list');
const equipList = document.querySelector('#craft-equipment-list');
const resultMaterial = document.querySelector('#craft-result-material');
const resultEquip = document.querySelector('#craft-result-equipment');
const resultResult = document.querySelector('#craft-result-result');
const doCraft = document.querySelector('#craft-btn');

// Battle
const battleField = document.querySelector('#main-container');
const battleBG = document.querySelector('#battle-box');
const message = document.querySelector('#message');
const skipArrow = document.querySelector('#skip-arrow');
const backArrow = document.querySelector('#back-arrow');
const commandList = document.getElementById('command-list');
const heroMoveBox = document.querySelector('#player-box');
const heroBC = document.querySelector('#battle-hero-cap');
const heroBW = document.querySelector('#battle-hero-weapon');
const heroBS = document.querySelector('#battle-hero-shoes');
const heroBT = document.querySelector('#battle-hero-t-shirt');
const heroBattleE = document.querySelector('#battle-hero-effect-box');
const heroPJT = document.querySelector('#hero-throwing-item');
const monsterMoveBox = document.querySelector('#enemy-box');
const monsterName = document.querySelector('#enemy-name');
const monsterHp = document.querySelector('#enemy-hp');
const monsterPJT = document.querySelector('#monster-throwing-item');
const heroHp = document.querySelector('#hero-hp');
const heroMp = document.querySelector('#hero-mp');
// level up
const levelUpBox = document.querySelector('#level-up-parameter-box');
const remainP = document.querySelector('#remaining-point');
const paraHp = document.querySelector('#parameter-hp');
const paraMp = document.querySelector('#parameter-mp');
const paraAtk = document.querySelector('#parameter-atk');
const paraDef = document.querySelector('#parameter-def');
const paraSpd = document.querySelector('#parameter-spd');

// Action Command 
const attackCmd = document.querySelector('#action-attack');
const defendCmd = document.querySelector('#action-defend');
const itemCmd = document.querySelector('#action-item');
const runCmd = document.querySelector('#action-run');
// Attack Command
const attackList = document.querySelector('#attack-list');
const punchCmd = document.querySelector('#attack-punch');
const iceCmd = document.querySelector('#attack-ice');
const fireCmd = document.querySelector('#attack-fire');
const thunderCmd = document.querySelector('#attack-thunder');
// Item Command
const itemList = document.querySelector('#command-item-list');
// Generate Hero instance
let hero = new Hero;
let monster;
let items = new Items;
let qItems = new EquipItems;
let crafts = new Craft;
let bs = new BattleSystem;
let fs = new FieldSystem;
let fo = new FieldObject;
let fo1 = new FieldObject;
fo = fo1;
let fo2 = new SecondFieldObject;
let fo3 = new ThirdFieldObject;
let fo4 = new FourthFieldObject;
let fo5 = new FifthFieldObject;
let fieldBoss = new FirstBoss;
let weapons = new Weapons;
let shoes = new Shoes;
let caps = new Caps;
let shirts = new Shirts;

// Boss status 
let firstBoss = 'alive';
let secondBoss = 'alive';
let thirdBoss = 'alive';
let fourthBoss = 'alive';
let fifthBoss = 'alive';

// Craft
let selectedMaterial = '???';
let selectedEquipment = '???';
let selectedResult = '???'

// Battle 
let heroAction;
let monsterAction;
// Level up parameter
let levelUpP = 0;
let temHp = 0;
let temMp = 0; 
let temAtk = 0;
let temDef = 0;
let temSpd = 0;

// If movabele == 1, character can move on the field
let movable = 1;
// If walking != 1, hero cant talk to the boss
let walking = 1;
// Item on itemlists of the menu 
let menuItemClickable = 1;


class UI{
  // Field UI /////////////////////////////
  fieldOn(){
    field.style.display = 'block';
  }
  fieldOff(){
    field.style.display = 'none';
  }
  moveChar(char, xTo, yTo){
    char.style.top = yTo + 'px';
    char.style.left = xTo + 'px';
  }
  openMenu(){
    this.craftOff();
    this.fieldOff();
    menuScreen.style.display = 'grid';
    this.reStatusOnMenu();
    this.reImgOnMenu();
    this.itemsOn(menuItemList);
    menuItemClickable = 1;
    menuItems.style.opacity = 1;
    menuEquip.style.opacity = 0.5;
  }
  closeMenu(){
    menuScreen.style.display = 'none';
    field.style.display = 'block';
  }
  reStatusOnMenu(){
    menuStatusLv.textContent = `${hero.lv}`;
    menuStatusHp.textContent = `${hero.hp} / ${hero.maxHp}`;
    menuStatusMp.textContent = `${hero.mp} / ${hero.maxMp}`;
    menuStatusAtk.textContent = `${hero.atk}`;
    menuStatusDef.textContent = `${hero.def}`;
    menuStatusSpd.textContent = `${hero.spd}`;
    menuStatusExp.textContent = `${hero.exp} / ${hero.maxExp}`;
  }
  reImgOnMenu(){
    menuHeroW.style.background = `url(../dist/img/arms.png) center center / cover`;
    menuHeroS.style.background = `url(../dist/img/legs.png) center center / cover`;
    menuHeroC.style.background = 'none';
    menuHeroT.style.background = 'none';
    if(hero.weapon != 'none'){
      menuHeroW.style.background = `url(${qItems.getImg(hero.weapon)}) center center / cover`;
    }
    if(hero.head != 'none'){
      menuHeroC.style.background = `url(${qItems.getImg(hero.head)}) center center / cover`;
    }
    if(hero.shoes != 'none'){
      menuHeroS.style.background = `url(${qItems.getImg(hero.shoes)}) center center / cover`;
    }
    if(hero.shirt != 'none'){
      menuHeroT.style.background = `url(${qItems.getImg(hero.shirt)}) center center / cover`;
    }
  }
  menuHeroEOn(url){
    if(url != 'none'){
      menuHeroE.style.background = `url(${url}) center center / cover`;
    }
  }
  menuHeroEOff(){
    menuHeroE.style.background = 'none';
  }
  makeFieldObject(){
    while(fieldObstacles.firstChild) {
      fieldObstacles.removeChild(fieldObstacles.firstChild);
    }
    fo.obstaclesPosition.forEach(function(each){
      if(each['type'] == 'chest'){
        const one = document.createElement('div');
        one.className = 'chest';
        one.id = each['name'];
        one.style.top = `${each['top']}px`;
        one.style.left = `${each['left']}px`;
        if(each['status'] == 'closed'){
          one.style.background = 'url(../dist/img/chest.png) center center / cover';
        }else{
          one.style.background = 'url(../dist/img/chestOpened.png) center center / cover';
        }
        fieldObstacles.appendChild(one);
      }else if(each['type'] == 'boss'){
        const one = document.createElement('div');
        one.id = 'boss';
        if(each['status'] == 'alive'){
          one.style.background = `url(${each['img']}) center center / cover`;
        }else{
          one.style.background = `url(../dist/img/upstairs.png) center center / cover`;
        }
        fieldObstacles.appendChild(one);
      }
    });
  }
  // Switch scene ///////////
  blackFade(){
    blackFade.style.display = 'block';
    setTimeout(() => {blackFade.style.display = 'none'}, 2100);
  }
  battleEnd(){
    // this.setChar(charX, charY);
    fieldContainer.style.display = "flex";
    battleField.style.display = "none";
    movable = 1;
  }
  battleStart(){
    fieldContainer.style.display = "none";
    battleField.style.display = "flex";
    battleBG.style.background = `url(${fo.battleBG}) center center / cover`;
    backArrow.style.display = 'none';
    this.battleHeroVisual();
  }
  battleHeroVisual(){
    if(hero.weapon != 'none'){
      heroBW.style.background = `url(${qItems.getImg(hero.weapon)}) center center / cover`;
    }else{
      heroBW.style.background = `url(../dist/img/arms.png) center center / cover`;
    }
    if(hero.head != 'none'){
      heroBC.style.background = `url(${qItems.getImg(hero.head)}) center center / cover`;
    }else{
      heroBC.style.background = `url(../dist/img/heroface.png) center center / cover`
    }
    if(hero.shoes != 'none'){
      heroBS.style.background = `url(${qItems.getImg(hero.shoes)}) center center / cover`;
    }else{
      heroBS.style.background = 'url(../dist/img/legs.png) center center / cover';
    }
    if(hero.shirt != 'none'){
      heroBT.style.background = `url(${qItems.getImg(hero.shirt)}) center center / cover`;
    }else{
      heroBT.style.background = 'url(../dist/img/herobody.png) center center / cover';
    }
  }
  messageLeftOnField(){
    movable = 2;
    fieldMessage.style.display = 'block';
    fieldMessage.style.top = 0;
    fieldMessage.style.left = 10 + 'px';
    leftTriangle.style.display = 'block';
    rightTriangle.style.display = 'none';
  }
  messageRightOnField(){
    movable = 2;
    fieldMessage.style.display = 'block';
    fieldMessage.style.top = 0;
    fieldMessage.style.left = 330 + 'px';
    leftTriangle.style.display = 'none';
    rightTriangle.style.display = 'block';
  }
  messageOffOnField(){
    movable = 1;
    fieldMessage.style.display = 'none';
  }
  afterBossBattle(){
    fo.obstaclesPosition[0]['status'] = 'dead';
    this.makeFieldObject();
  }
  changeFieldUp(){
    field.style.background = `url(${fo.background}) center center / cover`;
    hero.resetPosition();
    heroOnField.style.top = 500 + 'px';
    heroOnField.style.left = 250 + 'px';
    fieldBoss = fs.setBoss(fo.name);
    // if(checkBoss() == 'talk'){
    //   boss.style.background = `url(${fieldBoss.background}) center center / cover`;
    // }
  }
  changeFieldDown(){
    field.style.background = `url(${fo.background}) center center / cover`;
    hero.resetPositionToUp();
    heroOnField.style.top = 50 + 'px';
    heroOnField.style.left = 250 + 'px';
    fieldBoss = fs.setBoss(fo.name);
    // boss.style.background = `url(../dist/img/upstairs.png) center center / cover`
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
        one.style.position = 'relative';
        const two = document.createElement('div');
        two.textContent = `${item['name']}`;
        two.className = 'items';
        const three = document.createElement('div');
        three.textContent = `[${item['stock']}]`
        one.appendChild(two);
        one.appendChild(three);
        destination.appendChild(one); 
      }
    });
    menuItemClickable = 1;
    backNum = 2;
  }
  itemPopOut(target){
    let itemName = target.textContent;
    let desc = items.getDescription(itemName);
    if(items.getUse(itemName) == 'battle' || items.getUse(itemName) == 'material'){
      const t = document.createElement('div');
      t.className = 'triangle';
      const one = document.createElement('div');
      one.className = 'menu-pop-out';
      const oneP = document.createElement('p');
      oneP.textContent = `${desc}`;
      const two = document.createElement('div');
      two.className = 'option-box';
      const four = document.createElement('div');
      four.className = 'x-btn field-button';
      const five = document.createElement('i');
      five.className = 'fas fa-times';
      four.appendChild(five);
      two.appendChild(four);
      one.appendChild(t);
      one.appendChild(oneP);
      one.appendChild(two);
      target.appendChild(one);
    }else{
      const t = document.createElement('div');
      t.className = 'triangle';
      const one = document.createElement('div');
      one.className = 'menu-pop-out';
      const oneP = document.createElement('p');
      oneP.textContent = `${desc}`;
      const two = document.createElement('div');
      two.className = 'option-box';
      const three = document.createElement('div');
      three.className = 'use-btn field-button';
      three.textContent = 'USE';
      const four = document.createElement('div');
      four.className = 'x-btn field-button';
      const five = document.createElement('i');
      five.className = 'fas fa-times';
      four.appendChild(five);
      two.appendChild(three);
      two.appendChild(four);
      one.appendChild(t);
      one.appendChild(oneP);
      one.appendChild(two);
      target.appendChild(one);
    }
  }
  battleItemPopOut(target){
    let itemName = target.textContent;
    let desc = items.getDescription(itemName);
    if(items.getUse(itemName) == 'field' || items.getUse(itemName) == 'material'){
      const t = document.createElement('div');
      t.className = 'triangle';
      const one = document.createElement('div');
      one.className = 'menu-pop-out';
      const oneP = document.createElement('p');
      oneP.textContent = `${desc}`;
      const two = document.createElement('div');
      two.className = 'option-box';
      const four = document.createElement('div');
      four.className = 'x-btn field-button';
      const five = document.createElement('i');
      five.className = 'fas fa-times';
      four.appendChild(five);
      two.appendChild(four);
      one.appendChild(t);
      one.appendChild(oneP);
      one.appendChild(two);
      target.appendChild(one);
    }else{
      const t = document.createElement('div');
      t.className = 'triangle';
      const one = document.createElement('div');
      one.className = 'menu-pop-out';
      const oneP = document.createElement('p');
      oneP.textContent = `${desc}`;
      const two = document.createElement('div');
      two.className = 'option-box';
      const three = document.createElement('div');
      three.className = 'use-btn field-button';
      three.textContent = 'USE';
      const four = document.createElement('div');
      four.className = 'x-btn field-button';
      const five = document.createElement('i');
      five.className = 'fas fa-times';
      four.appendChild(five);
      two.appendChild(three);
      two.appendChild(four);
      one.appendChild(t);
      one.appendChild(oneP);
      one.appendChild(two);
      target.appendChild(one);
    }
  }
  closeItemPopOut(){
    menuItemList.childNodes.forEach(function(each){
      each.firstChild.childNodes.forEach(function(theone){
        if(theone.className == 'menu-pop-out'){
          let popout = document.querySelector('.menu-pop-out');
          popout.parentNode.removeChild(popout);
        }
      });
    });
  }
  battleCloseItemPopOut(){
    itemList.childNodes.forEach(function(each){
      each.firstChild.childNodes.forEach(function(theone){
        if(theone.className == 'menu-pop-out'){
          let popout = document.querySelector('.menu-pop-out');
          popout.parentNode.removeChild(popout);
        }
      });
    });
  }
  equipOn(destination, hero){
    while(destination.firstChild) {
      destination.removeChild(destination.firstChild);
    }
    qItems.itemList.forEach(function(item){
      if(item['stock'] != 0){
        const one = document.createElement('div');
        const two = document.createElement('div');
        two.textContent = `${item['name']}`;
        two.className = 'equip';
        two.style.color = 'black';
        if(qItems.type(item['name']) == 'weapon'){
          if(item['name'] == hero.weapon){
            two.style.color = 'red';
          }
        }else if(qItems.type(item['name']) == 'shoes'){
          if(item['name'] == hero.shoes){
            two.style.color = 'red';
          }
        }else if(qItems.type(item['name']) == 'cap'){
          if(item['name'] == hero.head){
            two.style.color = 'red';
          }
        }else if(qItems.type(item['name']) == 'shirt'){
          if(item['name'] == hero.shirt){
            two.style.color = 'red';
          }
        }
        const three = document.createElement('div');
        three.textContent = `[${item['stock']}]`
        one.appendChild(two);
        one.appendChild(three);
        destination.appendChild(one); 
      }
    });
  }
  itemsOff(){
    itemList.style.display = 'none';
    backArrow.style.display = 'none';
  }
  craftOn(){
    craftScreen.style.display = 'grid';
    field.style.display = 'none';
    menuScreen.style.display = 'none';
    selectedMaterial = '???';
    selectedEquipment = '???';
    selectedResult = '???';
    doCraft.style.display = 'none';
    this.craftResultOn();
    this.materialOn(materialList);
    this.equipOn(equipList, hero);
  }
  craftOff(){
    craftScreen.style.display = 'none';
  }
  materialOn(destination){
    while(destination.firstChild) {
      destination.removeChild(destination.firstChild);
    }
    items.itemList.forEach(function(item){
      if(item['stock'] != 0 && item['use'] == 'material'){
        const one = document.createElement('div');
        one.style.position = 'relative';
        const two = document.createElement('div');
        two.textContent = `${item['name']}`;
        two.className = 'items';
        const three = document.createElement('div');
        three.textContent = `[${item['stock']}]`
        one.appendChild(two);
        one.appendChild(three);
        destination.appendChild(one); 
      }
    });
  }
  craftResultOn(){
    resultMaterial.textContent = selectedMaterial;
    resultEquip.textContent = selectedEquipment;
    resultResult.textContent = selectedResult;
  }
  applyEnemy(name, hp, color){
    monsterName.textContent = name;
    monsterHp.textContent = hp;
    monsterMoveBox.style.background = `url(${color}) center center/ cover`;
  }
  applyEnemyHp(monster){
    monsterHp.textContent = monster.hp;
  }
  applyHero(hp, mp){
    heroHp.textContent = hp;
    heroMp.textContent = mp;
  }
  openLevelUp(){
    levelUpBox.style.display = 'grid';
    remainP.textContent = levelUpP;
    paraHp.textContent = `HP: ${hero.maxHp}`;
    paraMp.textContent = `MP: ${hero.maxMp}`;
    paraAtk.textContent = `ATK: ${hero.atk}`;
    paraDef.textContent = `DEF: ${hero.def}`;
    paraSpd.textContent = `SPD: ${hero.spd}`;
  }
  closeLevelUp(){
    levelUpBox.style.display = 'none';
  }
  monsterGrave(){
    monsterMoveBox.style.background = `url(${monster.grave}) center center / cover`;
  }
  // Action Animation ////
  punchAnime(){
    setTimeout(function(){
      heroMoveBox.style.animationName = 'heroHit';
      heroMoveBox.style.animationPlayState = 'running';
    }, 400);
    this.messageOn('Hero is attacking!');
    setTimeout(function(){
      ui.messageOff();
      heroMoveBox.style.animationPlayState = 'paused';
    }, 1000);
  }
  heroPJTAnime(url){
    heroPJT.style.background = `url(${url}) center center / cover`;
    heroPJT.style.animationPlayState = 'running';
    setTimeout(function(){
      heroPJT.style.background = 'none';
      heroPJT.style.animationPlayState = 'paused';
    }, 1000);
  }
  monsterPJTAnime(url){
    monsterPJT.style.background = `url(${url}) center center / cover`;
    monsterPJT.style.animationPlayState = 'running';
    setTimeout(function(){
      monsterPJT.style.background = 'none';
      monsterPJT.style.animationPlayState = 'paused';
    }, 1000);
  }
  getDamageAnime(e){
    if(e == 1){
      heroMoveBox.style.animationName = 'flashing';
      heroMoveBox.style.animationPlayState = 'running';
      setTimeout(function(){
        heroMoveBox.style.animationPlayState = 'paused';
      }, 1200);
    }else{
      monsterMoveBox.style.animationName = 'flashing';
      monsterMoveBox.style.animationPlayState = 'running';
      setTimeout(function(){
        monsterMoveBox.style.animationPlayState = 'paused';
      }, 1200);
    }
  }
  heroBEOn(url){
    if(url != 'none'){
      heroBattleE.style.background = `url(${url}) center center / cover`;
    }
  }
  heroBEOff(){
    heroBattleE.style.background = 'none';
  }

  monsterHitAnime(){
    this.messageOn(`${monster.name} is attacking!`);
    setTimeout(function(){
      monsterMoveBox.style.animationName = 'monsterHit';
      monsterMoveBox.style.animationPlayState = 'running';
    }, 400);
    // this.messageOn(`${monster.name} is attacking!`);
    setTimeout(function(){
      ui.messageOff();
      monsterMoveBox.style.animationPlayState = 'paused';
    }, 1000);
  }
}
// Generate UI instance
const ui = new UI();
ui.makeFieldObject();


// Field ////////////////////////////////////////////////////////////
// Menu //////////////////////
menuBtn.addEventListener('click', runMenu);

function runMenu(){
  if(menuScreen.style.display == 'none' || menuScreen.style.display == ''){
    ui.openMenu();
  }else{
    ui.closeMenu();
  }
}
// Make Item List
menuItems.addEventListener('click', () => {
  ui.itemsOn(menuItemList);
  menuItems.style.opacity = 1;
  menuEquip.style.opacity = 0.5;
});
// Make Equip List
menuEquip.addEventListener('click', () => {
  ui.equipOn(menuItemList, hero);
  menuItems.style.opacity = 0.5;
  menuEquip.style.opacity = 1;
});

// Equip on Menu ///
let menuItemClicked;
menuItemList.addEventListener('click', e => {
  let item = e.target.textContent;
  // Using items on menu
  if(e.target.className == 'items'){
    if(menuItemClickable == 1){
      menuItemClicked = e.target.textContent;
      ui.itemPopOut(e.target);
      menuItemClickable = 2;
    }
  // Close the pop-out
  }else if(e.target.className == 'x-btn field-button' || e.target.className == 'fas fa-times'){
    ui.closeItemPopOut();
    menuItemClickable = 1;
  // Use the items on menu
  }else if(e.target.textContent == 'USE'){
    let url = items.useItem(menuItemClicked, hero);
    ui.menuHeroEOn(url);
    setTimeout(function(){ui.menuHeroEOff()}, 1000);
    ui.itemsOn(menuItemList);
    menuItemClickable = 1;
  // Equip on menu
  }else if(e.target.className == 'equip'){
    qItems.checkHeroEquip(item, hero);
    ui.equipOn(menuItemList, hero);
  }
  ui.reStatusOnMenu();
  ui.reImgOnMenu();
});

// Craft //////////////////////////////////////
craftBtm.addEventListener('click', runCraft);
function runCraft(){
  if(craftScreen.style.display == 'none' || craftScreen.style.display == ''){
    ui.craftOn();
  }else{
    ui.craftOff();
    ui.fieldOn();
  }
}
materialList.addEventListener('click', runMaterial);
function runMaterial(e){
  if(e.target.className == 'items'){
    selectedMaterial = e.target.textContent;
    ui.craftResultOn();
    if(selectedMaterial != '???' && selectedEquipment != '???'){
      selectedResult = crafts.craftPatern(selectedMaterial, selectedEquipment);
      ui.craftResultOn();
      doCraft.style.display = 'block';
    }
  }
}
equipList.addEventListener('click', runEquipment);
function runEquipment(e){
  if(e.target.className == 'equip'){
    if(e.target.style.color != 'red'){
      selectedEquipment = e.target.textContent;
      ui.craftResultOn();
      if(selectedEquipment != '???' && selectedMaterial != '???'){
        selectedResult = crafts.craftPatern(selectedMaterial, selectedEquipment);
        ui.craftResultOn();
        doCraft.style.display = 'block';
      } 
    }
  }
}
doCraft.addEventListener('click', runCraftExecution);
function runCraftExecution(){
  if(selectedResult == 'Stone'){
    items.spendItem(selectedMaterial);
    qItems.spendItem(selectedEquipment);
    items.getItem('Stone');
  }else{
    items.spendItem(selectedMaterial);
    qItems.spendItem(selectedEquipment);
    qItems.getItem(selectedResult);
  }
  ui.craftOn();
}

// Talk people on field /////////////
field.addEventListener('click', runTalk);
function runTalk(e){
  if(e.target.id == 'boss'){

    if(walking == 1){
      let talkable;
      talkable = fo.checkIfNext(hero.xOnField, hero.yOnField, 'boss');
      if(fo.obstaclesPosition[0]['status'] == 'alive'){
        if(talkable == true){
          let position = fs.fieldMessagePosition(hero);
          if(position == 'right'){
            ui.messageRightOnField();
          }else{
            ui.messageLeftOnField();
          }
        }
      }else if(fo.obstaclesPosition[0]['status'] == 'dead'){
      // Stairs
        if(talkable == true){
          fo = fs.goUpStairs(fo.name, fo, fo1, fo2, fo3, fo4, fo5);
          ui.blackFade();
          setTimeout(() => {
            ui.changeFieldUp();
            ui.makeFieldObject();
          }, 700);
        }
      }
  }
  }
}
// Answering the question
yesBox.addEventListener('click', runYes);
function runYes(){
  ui.messageOffOnField();
  monster = fs.setBoss(fo.name);
  hero.setBattlePara();
  startBattle();
}
noBox.addEventListener('click', runNo);
function runNo(){
  ui.messageOffOnField();
}

// Opening the chest
field.addEventListener('click', runChest);
function runChest(e){
  
  let chest = fs.chestCheck(hero.xOnField, hero.yOnField, fo);
  if(chest == e.target.id){
    let item = fs.chestOpen(fo, chest);
    e.target.style.background = 'url(../dist/img/chestOpened.png) center center / cover';
    items.getItem(item);
    // ui & message
  }
}

// Move character function ///////////////////////////////////////
mouseMoveArea.addEventListener('click', runMoveChar);
function runMoveChar(e){
  if(movable == 1){
    movable = 2;
    // let charX = fs.getCharX(char, mouseMoveArea);
    // let charY = fs.getCharY(char, mouseMoveArea);
    let charX = hero.xOnField;
    let charY = hero.yOnField;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    let moveCount;
    // console.log(`charX = ${charX}, charY = ${charY}, mouseX = ${e.offsetX}, mouseY = ${e.offsetY}`);
    let direction = fs.getDirection(mouseX, mouseY, charX, charY);
    moveCount = fs.moveCount(mouseX, mouseY, charX, charY, direction);
    // Change char on field img
    heroOnField.style.background = `url(${hero.setFieldImg(direction)}) center center / cover`;
    // Actually char moving here
    var animation = setInterval(() => {

      // Check if its not next to obstacles
      let charX = hero.xOnField;
      let charY = hero.yOnField;
      if(fo.charStop(charX, charY, direction) == 'stop'){
        clearInterval(animation);
        setTimeout(() => {movable = 1}, 500);
        
      }else{
        // Actually moving here
        hero.moveOnField(direction);
        ui.moveChar(heroOnField, hero.xOnField, hero.yOnField);
      }
      // Run out of count
      moveCount -= 1;
      if(moveCount <= 0){
        clearInterval(animation);
      
        setTimeout(() => {movable = 1}, 500);
      }
      // Downstairs Check //
      if(hero.goDownStairs(fo.name) == 'go down'){
        clearInterval(animation);
        movable = 1;
        fo = fs.goDownStairs(fo.name, fo, fo1, fo2, fo3, fo4, fo5);
        setTimeout(() => {ui.blackFade()}, 500);
        setTimeout(() => {
          ui.changeFieldDown();
          ui.makeFieldObject();
        }, 1200);
      // Encount 
      }else if(fs.encount() == true){
        walking = 0;
        clearInterval(animation);
        monster = fs.encountMonster(fo.name);
        hero.setBattlePara();
        setTimeout(() => { startBattle() }, 1000);
        setTimeout(() => { movable = 1 }, 5000);
        setTimeout(() => { walking = 1 }, 5000);
      }
    }, 350); 
  }
}

// Start Battle against encount monsters
function startBattle(){
  ui.blackFade();
  // UI
  setTimeout(() => {
    ui.battleStart();
    // Enemy's UI
    ui.applyEnemy(monster.name, monster.hp, monster.color);
    ui.messageOn(`${monster.name} ${monster.message}`);
    ui.arrowOn();
  }, 1000);
}

// Events after battle
function eventAfterBattle(){
  if(monster.event == 'stairs'){
    ui.afterBossBattle();
  }
}


// Battle ///////////////////////////////////////////////////////////////////

// Experiment zone////////////////////
// monster = fs.encountMonster(fo.name);
// startBattle();
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
      ui.commandOn();
      break;
  }
}
// Skip arrow //////////// Battle Turn Process //////
skipArrow.addEventListener('click', runNext);
let skipNum = 'battle start';
let guardNum = 0;
function runNext(){
  switch(skipNum){
    case 'battle start' :
      ui.messageOff();
      ui.commandOn();
      guardNum = 0;
      break;
    case 'battle end' :
      hero.setBattlePara();
      ui.backArrowOff();
      ui.battleEnd();
      eventAfterBattle();
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
      if(guardNum == 1){
        hero.guardMp();
        ui.applyHero(hero.hp, hero.mp);
      }
      guardNum = 0;
      break;
    case 'run' :
      ui.battleEnd();
      skipNum = 'battle start';
      break;
    case 'won' :
      ui.messageOn(`Hero beat ${monster.name}!`);
      ui.monsterGrave();
      skipNum = 'get exp';
      break;
    case 'get exp' :
      ui.messageOn(`Hero got ${monster.exp} exp!`);
      hero.recieveExp(monster.exp);
      if(hero.exp >= hero.maxExp){
        hero.levelUp();
        skipNum = 'level up';
        hero.resetExp();
      }else{
        skipNum = 'get item';
      }
      break;
    case 'level up' :
      ui.messageOn('Hero leveled up!');
      skipNum = 'parameter';
      break;
    case 'parameter' :
      ui.messageOff();
      ui.arrowOff();
      levelUpP += 3;
      ui.openLevelUp();
      skipNum = 'get item';
      break;
    case 'get item' :
      let item = monster.itemDrop();
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
// Level up parameter 
levelUpBox.addEventListener('click', runPara);
function runPara(e){
  if(e.target.textContent == '+' && levelUpP != 0){
    switch(e.target.id){
      case 'atk-plus' :
        levelUpP -= 1;
        hero.atk += 1;
        temAtk += 1;
        ui.openLevelUp();
        break;
      case 'def-plus' :
        levelUpP -= 1;
        hero.def += 1;
        temDef += 1;
        ui.openLevelUp();
        break;
      case 'spd-plus' :
        levelUpP -= 1;
        hero.spd += 1;
        temSpd += 1;
        ui.openLevelUp();
        break;
      case 'hp-plus' :
        levelUpP -= 1;
        hero.maxHp += 10;
        hero.hp += 10;
        temHp += 1;
        ui.openLevelUp();
        break;
      case 'mp-plus' :
        levelUpP -= 1;
        hero.maxMp += 3;
        hero.mp += 3;
        temMp += 1;
        ui.openLevelUp();
        break;
    }
  }else if(e.target.textContent == '-'){
    switch(e.target.id){
      case 'atk-minus' :
        if(temAtk != 0){
          levelUpP += 1;
          hero.atk -= 1;
          temAtk -= 1;
          ui.openLevelUp();
        }
        break;
      case 'def-minus' :
        if(temDef != 0){
          levelUpP += 1;
          hero.def -= 1;
          temDef -= 1;
          ui.openLevelUp();
        }
        break;
      case 'spd-minus' :
        if(temSpd != 0){
          levelUpP += 1;
          hero.spd -= 1;
          temSpd -= 1;
          ui.openLevelUp();
        }
        break;
      case 'hp-minus' :
        if(temHp != 0){
          levelUpP += 1;
          hero.maxHp -= 10;
          hero.hp -= 10;
          temHp -= 1;
          ui.openLevelUp();
        }
        break;
      case 'mp-minus' :
        if(temMp != 0){
          levelUpP += 1;
          hero.maxMp -= 3;
          hero.mp -= 3;
          temMp -= 1;
          ui.openLevelUp();
        }
        break;
    }
  }else if(e.target.textContent == 'DONE'){
    temAtk = 0;
    temDef = 0;
    temSpd = 0;
    temHp = 0;
    temMp = 0;
    ui.closeLevelUp();
    runNext();
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
    setTimeout(ui.getDamageAnime.bind(null,0),1000);
    setTimeout(function(){
      ui.applyEnemy(monster.name, monster.hp, monster.color);
      ui.damageMessageOn(monster.name, damage);
    }, 2200);
  }
  battleProcess();
}
// Guard ///
defendCmd.addEventListener('click', runGurad);
function runGurad(){
  heroAction = function guard(){
    ui.commandOff();
    guardNum = 1;
    // (guard anime 0.6s) //
    setTimeout(function(){
      ui.messageOn('Hero is defending himself');
      ui.arrowOn();
    }, 1000);
  }
  battleProcess();
}

// Item Command ////
itemCmd.addEventListener('click', function(){
  ui.itemsOn(itemList);
  battleItemClickable = 1;
});
let battleItemClickable = 1;
let selectedItem;
itemList.addEventListener('click', function(e){
  if(e.target.className == 'items' && battleItemClickable == 1){
    selectedItem = e.target.textContent;
    ui.battleItemPopOut(e.target);
    battleItemClickable = 0;
  }else if(e.target.className == 'x-btn field-button' || e.target.className == 'fas fa-times'){
    ui.battleCloseItemPopOut();
    battleItemClickable = 1;
  }else if(e.target.textContent == 'USE'){
    // Item action ////////////////////////////////////////
    // Drinkable items ///////////////////
    if(items.getType(selectedItem) == 'drink'){
      ui.backArrowOff();
      ui.itemsOff();
      heroAction = function itemTurn(){
        let url = items.useItem(selectedItem, hero);
        ui.heroBEOn(url);
        setTimeout(function(){ui.heroBEOff()}, 1000);
        setTimeout(function(){
          ui.applyHero(hero.hp, hero.mp);
          ui.messageOn(items.getMessage(selectedItem));
          ui.arrowOn();
        }, 1000);
      }
      battleProcess();

    // Throwable items /////////////////
    }else if(items.getType(selectedItem) == 'throw'){
      ui.backArrowOff();
      ui.itemsOff();
      heroAction = function itemTurn(){
        ui.messageOff();
        let url = items.useItem(selectedItem, hero);
        ui.messageOn(items.getMessage(selectedItem));
        ui.heroPJTAnime(url);
        if(hero.throwItem() == 'hit'){
          setTimeout(function(){ui.getDamageAnime(0)}, 1000);
          setTimeout(function(){
            ui.damageMessageOn(monster.name, items.throwItem(selectedItem, hero, monster));
            monster.hp = bs.hpAdjust(monster.hp);
            ui.applyEnemyHp(monster);
          }, 2200);
        }else{
          // If hero missed it
          setTimeout(function(){
            ui.messageOn('Hero missed it!');
            ui.arrowOn();
          }, 1000);
        }
      }
      battleProcess();
    }
  }
});

// Run away ////
runCmd.addEventListener('click', runAway);
function runAway(){
  if(bs.compareSp(hero, monster) == 1){
    ui.commandOff();
    ui.messageOn('Hero escaped successflly');
    ui.arrowOn();
    skipNum = 'run';
  }else{
    ui.commandOff();
    ui.messageOn('Hero failed to escape!!!');
    ui.arrowOn();
    skipNum = 'second monster';
  }
}

// Enemy Turn /////
monsterAction = function enemyTurn(){
  if(monster.hp <= monster.maxHp * 0.2 && monster.action != 1){
    
  }else{
    // Monster normal attack
    ui.attackOff();
    ui.commandOff();
    ui.monsterHitAnime();
    setTimeout(function(){
      ui.getDamageAnime(1);
    }, 1000);
    setTimeout(function(){
      let damage = monster.attack(hero, guardNum);
      hero.hp = bs.hpAdjust(hero.hp);
      ui.applyHero(hero.hp, hero.mp);
      ui.damageMessageOn(hero.name, damage);
    }, 2200);
  }
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

