import { UI } from "./main.js";
import { BattleSystem } from "./BattleSystem.js";

export class FifthBoss {
  constructor(){
    this.hp = 650;
    this.maxHp = 650;
    this.name = 'Dark Cat';
    this.atk = 92;
    this.color = './img/darkcat.png';
    this.spd = 54;
    this.defE = 'dark';
    this.atkE = 'dark';
    this.exp = 0;
    this.item = 'none';
    this.pjt = './img/darkball.png';
    this.pjt2 = './img/darkmeteorite.png';
    this.message = 'looks super strong!!!';
    this.event = 'clear';
    this.background = './img/hiddencat.png';
    this.grave = './img/darkcatgrave.png';
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
    ui.messageOn(`Dark Cat: "Dark Meteorite!!"`);
    ui.monsterPJT2Anime('./img/darkmeteorite.png');
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
    ui.messageOn(`Dark Cat is licking Hero!"`);
    setTimeout(() => {ui.heroBEOn('./img/lick.png')}, 500);
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
    ui.messageOn(`Gloomy Cat: "Ultimate Dark Magic!!!`);
    setTimeout(() => {
      ui.battleEBGCOn('black');
      ui.monsterPJTAnime('./img/skullmagic.png');
    }, 500);
    setTimeout(function(){
      ui.battleEBGOff();
      ui.getDamageAnime(1);
      ui.messageOff();
    }, 1500);

    setTimeout(function(){
      let damage = 300;
      
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