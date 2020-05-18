import { BattleSystem } from "./BattleSystem.js";
import { UI } from "./main.js";

export class Hero {
  constructor() {
    this.name = 'Hero';
    this.lv = 1;
    this.hp = 100;
    this.mp = 20;
    this.maxHp = 100;
    this.maxMp = 20;
    this.atk = 5;
    this.def = 5;
    this.spd = 5;
    this.battleAtk = 0;
    this.battleDef = 0;
    this.battleSpd = 0;
    this.defE = 'normal';
    this.atkE = 'normal';
    this.exp = 0;
    this.maxExp = 100;
    this.xOnField = 250;
    this.yOnField = 500;
    this.head = 'none';
    this.weapon = 'none';
    this.shoes = 'none';
    this.shirt = 'none';
  }

  setBattlePara(){
    this.battleAtk = this.atk;
    this.battleDef = this.def;
    this.battleSpd = this.spd;
  }
  
  guardMp(){
    this.mp += 10;
    if(this.mp > this.maxMp){
      this.mp = this.maxMp;
    }
  }

  getXOnField(char, field){
    this.xOnField = char.getBoundingClientRect().x - field.getBoundingClientRect().x;
  }
  getYOnField(char, field){
    this.yOnField = char.getBoundingClientRect().y - field.getBoundingClientRect().y;
  }

  moveOnField(direction){
    switch(direction){
      case 'up' :
        this.yOnField -= 50;
        break;
      case 'down' :
        this.yOnField += 50;
        break;
      case 'left' :
        this.xOnField -= 50;
        break;
      case 'right' :
        this.xOnField += 50;
        break;
    }
  }

  recieveExp(monsterExp){
    this.exp += monsterExp;
    // if(this.exp >= this.maxExp){
    //   this.levelUp();
    // }
  }

  resetExp(){
    this.exp -= 100 + (this.lv - 2) * 50;
  }

  levelUp(){
    this.lv += 1;
    this.maxHp += 10;
    this.maxMp += 3;
    this.hp = this.maxHp;
    this.mp = this.maxMp;
    this.atk += 3;
    this.def += 3;
    this.spd += 3;
    this.maxExp += 50;
  }

  punch(monster){
    let bs = new BattleSystem;
    let hero = this;
    let damage = this.battleAtk;
    damage = Math.floor(Math.random() * (damage * 1.1 + 1 - damage * 0.9) + Math.floor(damage * 0.9));
    damage = bs.elementHeroAttack(hero, monster, damage)
    monster.hp -= damage;
    return damage;
  }

  magic(monster){
    let bs = new BattleSystem;
    let ui = new UI;
    let hero = this;
    let damage = hero.maxMp;
    hero.mp -= Math.floor(hero.maxMp / 4);

    let magicNum = Math.floor(Math.random() * 5 + 1);
    switch(magicNum){
      case 1 :
        setTimeout(() => {ui.monsterBEOn('./img/fire.png')}, 500);
        damage = bs.elementHeroMagic('fire', monster, damage);
        break;
      case 2 :
        setTimeout(() => {ui.monsterBEOn('./img/leaf.png')}, 500);
        damage = bs.elementHeroMagic('leaf', monster, damage);
        break;
      case 3 :
        setTimeout(() => {ui.monsterBEOn('./img/ice.png')}, 500);
        damage = bs.elementHeroMagic('ice', monster, damage);
        break;
      case 4 :
        setTimeout(() => {ui.monsterBEOn('./img/thunder.png')}, 500);
        damage = bs.elementHeroMagic('thunder', monster, damage);
        break;
      case 5 :
        setTimeout(() => {ui.monsterBEOn('./img/water.png')}, 500);
        damage = bs.elementHeroMagic('water', monster, damage);
        break;
    }

    monster.hp -= damage;

    return damage;
  }

  beam(monster){
    let ui = new UI;
    let hero = this;
    // Hero spend MP
    hero.mp -= 5;

    let damage = hero.battleAtk;
    damage = Math.floor(Math.random() * (damage * 1.5 + 1 - damage * 0.5) + Math.floor(damage * 0.5));

    ui.heroPJTAnime('./img/beam.png');
    monster.hp -= damage;

    return damage;
  }

  explosion(monster){
    let hero = this;
    // Hero spend MP
    hero.mp = 0;
    hero.hp = 1;

    let damage = hero.battleAtk;
    damage = Math.floor(Math.random() * (damage * 3 + 1 - damage * 0.5) + Math.floor(damage * 0.5));

    monster.hp -= damage;

    return damage;
  }



  throwItem(){
    let result;
    if(Math.floor(Math.random() * 10 + 1) > 3){
      result = 'hit';
    }else{
      result = 'missed'
    }
    return result;
  }
  resetPosition(){
    this.xOnField = 250;
    this.yOnField = 500;
  }
  resetPositionToUp(){
    this.xOnField = 250;
    this.yOnField = 50;
  }
  goDownStairs(foName){
    let action;
    if(this.xOnField == 250 && this.yOnField == 500 && foName != 'first floor'){
      action = 'go down';
    }
    return action;
  }
  setFieldImg(direction){
    let img;
    switch(direction){
      case 'up':
        img = './img/heroUp.png';
        break;
      case 'down':
        img = './img/heroDown.png';
        break;
      case 'left':
        img = './img/heroLeft.png';
        break;
      case 'right':
        img = './img/heroRight.png';
        break;
    }
    return img;
  }
  equipWeapon(item){
    this.weapon = item;
  }
  equipShoes(item){
    this.shoes = item;
  }
  equipHead(item){
    this.head = item;
  }
  equipShirt(item){
    this.shirt = item;
  }
  unequipWeapon(){
    this.weapon = 'none';
  }
  unequipShoes(){
    this.shoes = 'none';
  }
  unequipHead(){
    this.head = 'none';
  }
  unequipShirt(){
    this.shirt = 'none';
  }

  loadSavaData(sd){
    this.lv = sd.lv;
    this.hp = sd.hp;
    this.mp = sd.mp;
    this.maxHp = sd.maxHp;
    this.maxMp = sd.maxMp;
    this.atk = sd.atk;
    this.def = sd.def;
    this.spd = sd.spd;
    this.defE = sd.defE;
    this.atkE = sd.atkE;
    this.exp = sd.exp;
    this.maxExp = sd.maxExp;
    this.xOnField = sd.xOnField;
    this.yOnField = sd.yOnField;
    this.head = sd.head;
    this.weapon = sd.weapon;
    this.shoes = sd.shoes;
    this.shirt = sd.shirt;
  }
}