import { BattleSystem } from "./BattleSystem.js";

export class FifthMonsters {
  constructor(enemyNum){
    switch(enemyNum){
      case 1 :
        this.hp = 120;
        this.maxHp = 120;
        this.name = "Yanky";
        this.atk = 52;
        this.color = './img/monster/gang.png';
        this.spd = 29;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 25;
        this.item = 'No.1 T';
        this.pjt = './img/colm.png';
        this.rareItem = 'Super Potion';
        break;
      case 2 :
        this.hp = 160;
        this.maxHp = 160;
        this.name = "Dark Hero";
        this.atk = 62;
        this.color = './img/monster/darkhero.png';
        this.spd = 39;
        this.defE = 'dark';
        this.atkE = 'dark';
        this.exp = 35;
        this.item = 'Super Potion';
        this.pjt = './img/darkball.png';
        this.rareItem = 'Mithril';
        break;
      case 3 :
        this.hp = 190;
        this.maxHp = 190;
        this.name = "Rainbow Bird";
        this.atk = 71;
        this.color = './img/monster/rainbow.png';
        this.spd = 45;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 38;
        this.item = 'Feather Shoes';
        this.pjt = './img/feather.png';
        this.rareItem = 'Orichalcum';
        break;
      case 4 :
        this.hp = 250;
        this.maxHp = 250;
        this.name = "Fiery Dino";
        this.atk = 75;
        this.color = './img/monster/dinosor.png';
        this.spd = 33;
        this.defE = 'fire';
        this.atkE = 'fire';
        this.exp = 45;
        this.item = 'Fire Ball';
        this.pjt = './img/fireball.png';
        this.rareItem = 'Orichalcum';
        break;
    }
    this.action = 1;
    this.message = 'sprang out!!!';
    this.event = 'none';
    this.grave = './img/grave.png';
  }

  attack(hero, guardNum){
    let bs = new BattleSystem;
    let damage;
    if(this.atk - hero.battleDef <= 0){
      damage = 1;
    }else{
      damage = this.atk - hero.battleDef;
    }
    damage = Math.floor(Math.random() * (damage * 1.1 + 1 - damage * 0.9) + Math.floor(damage * 0.9));
    if(guardNum == 1){
      damage = Math.floor(damage / 3);
    }
    damage = bs.elementMonsterAttack(hero, this, damage);
    hero.hp -= damage;
    return damage;
  }

  attack2(hero, guardNum){
    let bs = new BattleSystem;
    let damage = this.atk - hero.battleDef;
    damage = Math.floor(Math.random() * (damage * 1.3 + 1 - damage * 0.7) + Math.floor(damage * 0.7));
    if(damage <= 0){
      damage = 1;
    }
    
    if(guardNum == 1){
      damage = Math.floor(damage / 3);
    }
    damage = bs.elementMonsterAttack(hero, this, damage);
    hero.hp -= damage;
    return damage;
  }


  itemDrop(){
    let rareNum = Math.floor(Math.random() * 5 + 1);
    if(rareNum >= 5){
      return this.rareItem;
    }else{
      let encountNum = Math.floor(Math.random() * 5 + 1);
      if(encountNum >= 4){
        return this.item;
      }else{
        return 0;
      }
    }
  }
}

