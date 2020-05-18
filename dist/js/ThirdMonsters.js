import { BattleSystem } from "./BattleSystem.js";

export class ThirdMonsters {
  constructor(enemyNum){
    switch(enemyNum){
      case 1 :
        this.hp = 60;
        this.maxHp = 60;
        this.name = "Farefalle Bird";
        this.atk = 29;
        this.color = './img/monster/farfallebird.png';
        this.spd = 15;
        this.defE = 'normal';
        this.atkE = 'normal';
        this.exp = 7;
        this.item = 'Super Potion';
        this.pjt = './img/farfalle.png';
        this.rareItem = 'Chocolate';
        break;
      case 2 :
        this.hp = 50;
        this.maxHp = 50;
        this.name = "Rocker";
        this.atk = 36;
        this.color = './img/monster/guitar.png';
        this.spd = 30;
        this.defE = 'thunder';
        this.atkE = 'thunder';
        this.exp = 10;
        this.item = 'Punk Head';
        this.pjt = './img/notes.png';
        this.rareItem = 'Mithril';
        break;
      case 3 :
        this.hp = 60;
        this.maxHp = 60;
        this.name = "Kakigorier";
        this.atk = 38;
        this.color = './img/monster/kakigori.png';
        this.spd = 7;
        this.defE = 'ice';
        this.atkE = 'ice';
        this.exp = 13;
        this.item = 'Ice Ball';
        this.pjt = './img/iceball.png';
        this.rareItem = 'Ether';
        break;
      case 4 :
        this.hp = 60;
        this.maxHp = 60;
        this.name = "Dark Dia";
        this.atk = 46;
        this.color = './img/monster/darkdia.png';
        this.spd = 20;
        this.defE = 'dark';
        this.atkE = 'dark';
        this.exp = 18;
        this.item = 'Shuriken';
        this.pjt = './img/darkball.png';
        this.rareItem = 'Thunder Ball';
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

