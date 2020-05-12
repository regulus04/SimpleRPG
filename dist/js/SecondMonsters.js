export class SecondMonsters {
  constructor(enemyNum){
    switch(enemyNum){
      case 1 :
        this.hp = 10;
        this.maxHp = 10;
        this.name = "Fish";
        this.atk = 6;
        this.color = "pink";
        this.spd = 1;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 1;
        this.item = 'Stone';
        this.rareItem = 0;
        break;
      case 2 :
        this.hp = 20;
        this.maxHp = 20;
        this.name = "Calamari";
        this.atk = 7;
        this.color = "wheat";
        this.spd = 3;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 3;
        this.item = 'Potion';
        this.rareItem = 0;
        break;
      case 3 :
        this.hp = 30;
        this.maxHp = 30;
        this.name = "Cat";
        this.atk = 10;
        this.color = "purple";
        this.spd = 7;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 5
        this.item = 'Ether';
        this.rareItem = 0;
        break;
      case 4 :
        this.hp = 40;
        this.maxHp = 40;
        this.name = "King";
        this.atk = 20;
        this.color = "gray";
        this.spd = 6;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 10;
        this.item = 'Shuriken';
        this.rareItem = 'Flame Sword';
        break;
    }
    this.message = 'sprang out!!!';
    this.event = 'none';
  }

  attack(hero){
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

