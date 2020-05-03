export class Hero {
  constructor() {
    this.lv = 1;
    this.hp = 100;
    this.mp = 20;
    this.maxHp = 100 + this.lv * 20;
    this.maxMp = 20 + this.lv * 5;
    this.exp = 0;
    this.atk = 5;
    this.def = 5;
  }

  recieveExp(exp){
    this.exp += exp;
    if(this.exp >= 100){
      this.levelUp();
      // 
      this.exp = 0;
    }
  }

  levelUp(){
    this.lv += 1;
    this.hp = this.maxHp;
    this.mp = this.maxMp;
    this.atk = 5 + this.lv * 2;
    this.def = 5 + this.lv * 2;
  }

  punch(monster){
    monster.hp -= this.atk;
  }
}