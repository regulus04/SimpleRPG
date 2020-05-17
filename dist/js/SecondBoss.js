import { UI } from "./main.js";
import { BattleSystem } from "./BattleSystem.js";

export class SecondBoss {
  constructor(){
    this.hp = 100;
    this.maxHp = 100;
    this.name = 'Purple Cat';
    this.atk = 10;
    this.color = './img/purplecat.png';
    this.spd = 1;
    this.defE = 'normal';
    this.atkE = 'normal';
    this.exp = 150;
    this.item = 'Shuriken';
    this.pjt = './img/sonic.png';
    this.pjt2 = './img/sonic2.png';
    this.message = 'looks purple!!!';
    this.event = 'stairs';
    this.background = './img/purpleicon.png';
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
    damage = Math.floor(Math.random() * damage + Math.floor(damage * 0.3)) + Math.floor(damage * 0.7);
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
    ui.messageOn(`Purple Cat: "Cat Slash!"`);
    ui.monsterPJTAnime(monster.pjt2);
    setTimeout(function(){
      ui.getDamageAnime(1);
      ui.messageOff();
    }, 1000);
    setTimeout(function(){
      let damage = monster.atk - hero.battleDef;
      damage = Math.floor(Math.random() * damage + Math.floor(damage * 0.5)) + Math.floor(damage * 0.9);
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
    ui.messageOn(`Purple Cat: "Cat Crow!"`);
    setTimeout(() => {ui.heroBEOn('./img/scratch.png')}, 500);
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
    ui.messageOn(`Purple Cat: "Dark Rain!!`);
    setTimeout(() => {
      ui.battleEFGOn('./img/darkrain.png');
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
      damage = bs.elementMonsterAttack(hero, monster, damage);
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