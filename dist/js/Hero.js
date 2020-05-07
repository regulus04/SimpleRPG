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
    this.exp = 99;
    this.maxExp = 100;
    this.xOnField = 250;
    this.yOnField = 500;
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
    if(this.exp >= this.maxExp){
      this.levelUp();
    }
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
    monster.hp -= this.atk;
    return this.atk;
  }
}