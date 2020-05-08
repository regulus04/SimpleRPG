export class SecondMonsters {
  constructor(enemyNum){
    switch(enemyNum){
      case 1 :
        this.hp = 10;
        this.name = "Fish";
        this.atk = 6;
        this.color = "pink";
        this.spd = 1;
        this.exp = 1;
        this.item = 'Stone';
        break;
      case 2 :
        this.hp = 20;
        this.name = "Calamari";
        this.atk = 7;
        this.color = "wheat";
        this.spd = 3;
        this.exp = 3;
        this.item = 'Potion';
        break;
      case 3 :
        this.hp = 30;
        this.name = "Cat";
        this.atk = 10;
        this.color = "purple";
        this.spd = 7;
        this.exp = 5
        this.item = 'Ether';
        break;
      case 4 :
        this.hp = 40;
        this.name = "King";
        this.atk = 20;
        this.color = "gray";
        this.spd = 6;
        this.exp = 10;
        this.item = 'Shuriken';
        break;
    }
    this.message = 'sprang out!!!';
    this.event = 'none';
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
    let encountNum = Math.floor(Math.random() * 20 + 1);
    if(encountNum >= 10){
      return this.item;
    }else{
      return 0;
    }
  }
}

