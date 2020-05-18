import { BattleSystem } from "./BattleSystem.js";

export class FourthMonsters {
  constructor(enemyNum){
    switch(enemyNum){
      case 1 :
        this.hp = 10;
        this.maxHp = 10;
        this.name = "Eele";
        this.atk = 6;
        this.color = './img/monster/ele.png';
        this.spd = 1;
        this.defE = 'thunder';
        this.atkE = 'thunder';
        this.exp = 1;
        this.item = 'Stone';
        this.pjt = './img/thunderball.png';
        this.rareItem = 0;
        break;
      case 2 :
        this.hp = 20;
        this.maxHp = 20;
        this.name = "Match Kun";
        this.atk = 7;
        this.color = './img/monster/matchkun.png';
        this.spd = 3;
        this.defE = 'fire';
        this.atkE = 'fire';
        this.exp = 3;
        this.item = 'Potion';
        this.pjt = './img/match.png';
        this.rareItem = 0;
        break;
      case 3 :
        this.hp = 30;
        this.maxHp = 30;
        this.name = "Arms Pot";
        this.atk = 10;
        this.color = './img/monster/plant.png';
        this.spd = 7;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 5
        this.item = 'Axe';
        this.pjt = './img/sword.png';
        this.rareItem = 0;
        break;
      case 4 :
        this.hp = 40;
        this.maxHp = 40;
        this.name = "Fish Man";
        this.atk = 20;
        this.color = './img/monster/fishman.png';
        this.spd = 6;
        this.defE = 'water';
        this.atkE = 'water';
        this.exp = 10;
        this.item = 'Mixer';
        this.pjt = './img/fish.png';
        this.rareItem = 0;
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

