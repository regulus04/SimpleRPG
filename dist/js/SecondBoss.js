export class SecondBoss {
  constructor(){
    this.hp = 1;
    this.name = 'Fire Devil';
    this.atk = 10;
    this.color = "crimson";
    this.spd = 1;
    this.exp = 150;
    this.item = 'Shuriken';
    // this.firstMessage = 'Wanna fight me???';
    this.message = 'looks strong!!!';
    this.event = 'stairs';
    this.background = '../dist/img/shuriken.png';
  }

  attack(hero){
    let damage;
    if(this.atk - hero.def <= 0){
      damage = 1;
    }else{
      damage = this.atk - hero.def;
    }
    hero.hp -= damage;
    return damage;
  }

  itemDrop(){
    return this.item;
  }
}