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
    this.exp = 99;
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
    this.maxHp += 20;
    this.maxMp += 5;
    this.hp = this.maxHp;
    this.mp = this.maxMp;
    this.atk += 5;
    this.def += 5;
    this.spd += 5;
    this.maxExp += 50;
  }

  punch(monster){
    monster.hp -= this.battleAtk;
    return this.battleAtk;
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
        img = '../dist/img/heroUp.png';
        break;
      case 'down':
        img = '../dist/img/heroDown.png';
        break;
      case 'left':
        img = '../dist/img/heroLeft.png';
        break;
      case 'right':
        img = '../dist/img/heroRight.png';
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
}