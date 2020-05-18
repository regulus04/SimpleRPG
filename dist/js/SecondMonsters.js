import { BattleSystem } from "./BattleSystem.js";

export class SecondMonsters {
  constructor(enemyNum){
    switch(enemyNum){
      case 1 :
        this.hp = 30;
        this.maxHp = 30;
        this.name = "GO";
        this.atk = 10;
        this.color = './img/monster/go.png';
        this.spd = 10;
        this.defE = 'thunder';
        this.atkE = 'thunder';
        this.exp = 5;
        this.item = 'Potion';
        this.pjt = './img/cross.png';
        this.rareItem = 'Super Potion';
        break;
      case 2 :
        this.hp = 35;
        this.maxHp = 35;
        this.name = "Tenmusu";
        this.atk = 12;
        this.color = './img/monster/tenmusu.png';
        this.spd = 3;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 7;
        this.item = 'Potion';
        this.pjt = './img/shrimp.png';
        this.rareItem = 'Chocolate';
        break;
      case 3 :
        this.hp = 40;
        this.maxHp = 40;
        this.name = "The Chord";
        this.atk = 15;
        this.color = './img/monster/chord.png';
        this.spd = 7;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 10;
        this.item = 'Ether';
        this.pjt = './img/oneline.png';
        this.rareItem = 'Bronze';
        break;
      case 4 :
        this.hp = 50;
        this.maxHp = 50;
        this.name = "Water Man";
        this.atk = 20;
        this.color = './img/monster/waterman.png';
        this.spd = 5;
        this.defE = 'water';
        this.atkE = 'water';
        this.exp = 17;
        this.item = 'Frog Cap';
        this.pjt = './img/waterball.png';
        this.rareItem = 'Rain T';
        break;
    }
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
    let rareNum = Math.floor(Math.random() * 10 + 1);
    if(rareNum >= 10){
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

