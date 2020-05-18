import { BattleSystem } from "./BattleSystem.js";


export class Monsters {
  constructor(enemyNum){
    switch(enemyNum){
      case 1 :
        this.hp = 10;
        this.maxHp = 10;
        this.name = "Cliper";
        this.atk = 7;
        this.color = './img/monster/clip.png';
        this.spd = 1;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 1;
        this.item = 'Stone';
        this.rareItem = 'Ice Ball';
        this.pjt = './img/clips.png';
        break;
      case 2 :
        this.hp = 20;
        this.maxHp = 20;
        this.name = "Catcher";
        this.atk = 7;
        this.color = './img/monster/catcher.png';
        this.spd = 3;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 3;
        this.item = 'Potion';
        this.rareItem = 'Thunder Ball';
        this.pjt = './img/ear.png';
        break;
      case 3 :
        this.hp = 30;
        this.maxHp = 30;
        this.name = 'Tiny King';
        this.atk = 10;
        this.color = './img/monster/tinyking.png';
        this.spd = 7;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 5
        this.item = 'Ether';
        this.rareItem = 'Shuriken';
        this.pjt = './img/flure.png';
        break;
      case 4 :
        this.hp = 40;
        this.maxHp = 40;
        this.name = "Aubergiknight";
        this.atk = 15;
        this.color = './img/monster/arbergiknight.png';
        this.spd = 6;
        this.defE = 'leaf';
        this.atkE = 'leaf';
        this.exp = 10;
        this.item = 'Carrot Cap';
        this.rareItem = 'Leaf Ball';
        this.pjt = './img/chopsticks.png';
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
      let encountNum = Math.floor(Math.random() * 3 + 1);
      if(encountNum >= 3){
        return this.item;
      }else{
        return 0;
      }
    }
  }
}

