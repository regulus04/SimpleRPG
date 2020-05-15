export class ThirdBoss {
  constructor(){
    this.hp = 1;
    this.maxHp = 1;
    this.name = 'Gray Cat';
    this.atk = 10;
    this.color = './img/graycat.png';
    this.spd = 1;
    this.defE = 'normal';
    this.atkE = 'normal';
    this.exp = 150;
    this.item = 'Shuriken';
    // this.firstMessage = 'Wanna fight me???';
    this.message = 'looks gray!!!';
    this.event = 'stairs';
    this.background = './img/grayicon.png';
    this.grave = './img/catgrave.png';
  }

  attack(hero, guardNum){
    let damage;
    if(this.atk - hero.battleDef <= 0){
      damage = 1;
    }else{
      damage = this.atk - hero.battleDef;
    }
    if(guardNum == 1){
      damage = Math.floor(damage / 3);
    }
    hero.hp -= damage;
    return damage;
  }

  itemDrop(){
    return this.item;
  }
}