export class FirstBoss {
  constructor(){
    this.hp = 1;
    this.maxHp = 1;
    this.name = 'The Devil';
    this.atk = 10;
    this.color = '../dist/img/samuraicat.png';
    this.spd = 1;
    this.defE = 'normal';
    this.atkE = 'normal';
    this.exp = 150;
    this.item = 'Shuriken';
    // this.firstMessage = 'Wanna fight me???';
    this.message = 'looks strong!!!';
    this.event = 'stairs';
    this.background = '../dist/img/samuraiicon.png';
    this.grave = '../dist/img/catgrave.png';
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