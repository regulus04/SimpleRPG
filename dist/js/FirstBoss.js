import { UI } from "./main.js";
import { BattleSystem } from "./BattleSystem.js";


export class FirstBoss {
  constructor(){
    this.hp = 100;
    this.maxHp = 100;
    this.name = 'Samurai Cat';
    this.atk = 20;
    this.color = './img/samuraicat.png';
    this.spd = 10;
    this.defE = 'normal';
    this.atkE = 'normal';
    this.exp = 150;
    this.item = 'Bronze';
    this.pjt = './img/shuriken.png';
    this.pjt2 = './img/kunai.png';
    this.message = 'looks strong!!!';
    this.event = 'stairs';
    this.background = './img/samuraiicon.png';
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
    ui.messageOn(`Samurai Cat threw Kunai!`);
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
    ui.messageOn(`Samurai Cat is slashing at Hero!`);
    setTimeout(() => {ui.heroBEOn('./img/slash.png')}, 500);
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
    ui.messageOn(`Samurai Cat: "Yami-uchi!!`);
    setTimeout(() => {
      ui.heroBEOn('./img/slash.png');
      ui.battleEBGCOn('black');
    }, 500);
    setTimeout(function(){
      ui.heroBEOff();
      ui.battleEBGOff();
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