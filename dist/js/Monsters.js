export class Monsters {
  constructor(enemyNum){
    switch(enemyNum){
      case 1 :
        this.hp = 10;
        this.name = "Goomba";
        this.atk = 6;
        this.color = "saddlebrown";
        this.spd = 1;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 1;
        this.item = 'Stone';
        this.rareItem = 0;
        break;
      case 2 :
        this.hp = 20;
        this.name = "Koopa";
        this.atk = 7;
        this.color = "seagreen";
        this.spd = 3;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 3;
        this.item = 'Potion';
        this.rareItem = 0;
        break;
      case 3 :
        this.hp = 30;
        this.name = "Patapata";
        this.atk = 10;
        this.color = "crimson";
        this.spd = 7;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 5
        this.item = 'Ether';
        this.rareItem = 0;
        break;
      case 4 :
        this.hp = 40;
        this.name = "Bowser";
        this.atk = 20;
        this.color = "green";
        this.spd = 6;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 10;
        this.item = 'Shuriken';
        this.rareItem = 0;
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
    let rareNum = Math.floor(Math.random() * 30 + 1);
    if(rareNum >= 29){
      return this.rareItem;
    }else{
      let encountNum = Math.floor(Math.random() * 20 + 1);
      if(encountNum >= 10){
        return this.item;
      }else{
        return 0;
      }
    }
  }
}

