import { BattleSystem } from "./BattleSystem.js";


export class Monsters {
  constructor(enemyNum){
    switch(enemyNum){
      case 1 :
        this.hp = 10;
        this.maxHp = 10;
        this.name = "Cliper";
        this.atk = 6;
        this.color = './img/clip.png';
        this.spd = 1;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 1;
        this.item = 'Stone';
        this.rareItem = 0;
        this.pjt = './img/stone.png';
        break;
      case 2 :
        this.hp = 20;
        this.maxHp = 20;
        this.name = "Catcher";
        this.atk = 7;
        this.color = './img/catcher.png';
        this.spd = 3;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 3;
        this.item = 'Potion';
        this.rareItem = 0;
        this.pjt = './img/stone.png';
        break;
      case 3 :
        this.hp = 30;
        this.maxHp = 30;
        this.name = 'Tiny King';
        this.atk = 10;
        this.color = './img/tinyking.png';
        this.spd = 7;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 5
        this.item = 'Ether';
        this.rareItem = 0;
        this.pjt = './img/stone.png';
        break;
      case 4 :
        this.hp = 40;
        this.maxHp = 40;
        this.name = "Aubergiknight";
        this.atk = 20;
        this.color = './img/arbergiknight.png';
        this.spd = 6;
        this.defE = 'leaf';
        this.atkE = 'leaf';
        this.exp = 10;
        this.item = 'Shuriken';
        this.rareItem = 0;
        this.pjt = './img/stone.png';
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
    if(guardNum == 1){
      damage = Math.floor(damage / 3);
    }
    damage = bs.elementMonsterAttack(hero, this, damage);
    hero.hp -= damage;
    return damage;
  }

  attack2(hero, guardNum){
    let bs = new BattleSystem;
    let damage;
    if(this.atk - hero.battleDef <= 0){
      damage = 1;
    }else{
      damage = this.atk - hero.battleDef;
    }
    if(guardNum == 1){
      damage = Math.floor(damage / 3);
    }
    damage = bs.elementMonsterAttack(hero, this, damage);
    hero.hp -= damage;
    return damage;
  }

  itemDrop(){
    let rareNum = Math.floor(Math.random() * 30 + 1);
    if(rareNum >= 29){
      return this.rareItem;
    }else{
      let encountNum = Math.floor(Math.random() * 20 + 1);
      if(encountNum >= 15){
        return this.item;
      }else{
        return 0;
      }
    }
  }
}

