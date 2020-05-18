import { UI } from "./main.js";
import { BattleSystem } from "./BattleSystem.js";

export class ThirdBoss {
  constructor(){
    this.hp = 350;
    this.maxHp = 350;
    this.name = 'Gray Cat';
    this.atk = 47;
    this.color = './img/graycat.png';
    this.spd = 30;
    this.defE = 'ice';
    this.atkE = 'ice';
    this.exp = 200;
    this.item = 'Mythril';
    this.pjt = './img/iceball.png';
    this.pjt2 = './img/star.png';
    this.message = 'looks gray!!!';
    this.event = 'stairs';
    this.background = './img/grayicon.png';
    this.grave = './img/catgrave.png';
    this.action = 2;
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

  attack3(hero, monster, guardNum){
    let ui = new UI;
    let bs = new BattleSystem;
    // Monster throwing attack
    ui.attackOff();
    ui.commandOff();
    ui.messageOn(`Gray Cat: "Shooting Star!!"`);
    ui.monsterPJTAnime(monster.pjt2);
    setTimeout(function(){
      ui.getDamageAnime(1);
      ui.messageOff();
    }, 1000);
    setTimeout(function(){
      let damage = monster.atk - hero.battleDef;
      damage = Math.floor(Math.random() * (damage * 1.5 + 1 - damage * 0.9) + Math.floor(damage * 0.9));
      if(damage <= 0){
        damage = 1;
      }
      if(guardNum == 1){
        damage = Math.floor(damage / 3);
      }
      damage = bs.elementMonsterAttack(hero, monster, damage);
      hero.hp -= damage;
    
      hero.hp = bs.hpAdjust(hero.hp);
      ui.applyHero(hero.hp, hero.mp);
      ui.damageMessageOn(hero.name, damage);
    }, 2200);
  }

  attack4(hero, monster, guardNum){
    let ui = new UI;
    let bs = new BattleSystem;
    // Monster throwing attack
    ui.attackOff();
    ui.commandOff();
    ui.messageOn(`Gray Cat: "Ice!!!!!!"`);
    setTimeout(() => {ui.heroBEOn('./img/ice.png')}, 500);
    setTimeout(function(){
      ui.heroBEOff();
      ui.getDamageAnime(1);
      ui.messageOff();
    }, 1000);

    setTimeout(function(){
      let damage = Math.floor((monster.atk - hero.battleDef) * 1.5);
      
      if(damage <= 0){
        damage = 1;
      }
      if(guardNum == 1){
        damage = Math.floor(damage / 3);
      }
      damage = bs.elementMonsterAttack(hero, monster, damage);
      hero.hp -= damage;
    
      hero.hp = bs.hpAdjust(hero.hp);
      ui.applyHero(hero.hp, hero.mp);
      ui.damageMessageOn(hero.name, damage);
    }, 2200);
  }

  attack5(hero, monster, guardNum){
    let ui = new UI;
    let bs = new BattleSystem;
    // Monster throwing attack
    ui.attackOff();
    ui.commandOff();
    ui.messageOn(`Purple Cat: "Star Dust!!!`);
    setTimeout(() => {
      ui.battleEFGOn('./img/stardust.png');
    }, 500);
    setTimeout(function(){
      ui.battleEFGOff();
      ui.getDamageAnime(1);
      ui.messageOff();
    }, 1500);

    setTimeout(function(){
      let damage = Math.floor((monster.atk - hero.battleDef) * 3);
      
      if(damage <= 0){
        damage = 1;
      }
      if(guardNum == 1){
        damage = Math.floor(damage / 3);
      }
      hero.hp -= damage;
    
      hero.hp = bs.hpAdjust(hero.hp);
      ui.applyHero(hero.hp, hero.mp);
      ui.damageMessageOn(hero.name, damage);
    }, 2700);
  }


  itemDrop(){
    return this.item;
  }
}