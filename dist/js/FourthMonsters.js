import { BattleSystem } from "./BattleSystem.js";

export class FourthMonsters {
  constructor(enemyNum){
    switch(enemyNum){
      case 1 :
        this.hp = 70;
        this.maxHp = 70;
        this.name = "Eele";
        this.atk = 35;
        this.color = './img/monster/ele.png';
        this.spd = 17;
        this.defE = 'thunder';
        this.atkE = 'thunder';
        this.exp = 10;
        this.item = 'Thunder Ball';
        this.pjt = './img/thunderball.png';
        this.rareItem = 'Mythril';
        break;
      case 2 :
        this.hp = 80;
        this.maxHp = 80;
        this.name = "Match Kun";
        this.atk = 40;
        this.color = './img/monster/matchkun.png';
        this.spd = 30;
        this.defE = 'fire';
        this.atkE = 'fire';
        this.exp = 15;
        this.item = 'Potion';
        this.pjt = './img/match.png';
        this.rareItem = 'Flame Sword';
        break;
      case 3 :
        this.hp = 85;
        this.maxHp = 85;
        this.name = "Arms Pot";
        this.atk = 52;
        this.color = './img/monster/plant.png';
        this.spd = 25;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 22;
        this.item = 'Axe';
        this.pjt = './img/sword.png';
        this.rareItem = 0;
        break;
      case 4 :
        this.hp = 100;
        this.maxHp = 100;
        this.name = "Fish Man";
        this.atk = 47;
        this.color = './img/monster/fishman.png';
        this.spd = 29;
        this.defE = 'water';
        this.atkE = 'water';
        this.exp = 26;
        this.item = 'Mixer';
        this.pjt = './img/fish.png';
        this.rareItem = 'Water Ball';
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

