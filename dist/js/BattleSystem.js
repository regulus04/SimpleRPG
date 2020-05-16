export class BattleSystem {

  hpAdjust(hp){
    if(hp <= 0){
      hp = 0;
      return 0;
    }else{
      return hp;
    }
  }

  compareSp(hero, monster){
    if(hero.spd >= monster.spd){
      return 1;
    }else{
      return 2;
    }
  }
  // hero atkE (fire light thunder leaf water ice)
  // hero defE (fire light thunder leaf water ice)
  elementHeroAttack(hero, monster, damage){
    if(hero.atkE == 'fire'){
      switch(monster.defE){
        case 'leaf' :
          damage = Math.floor(damage * 1.5);
          break;
        case 'water' :
          damage = Math.floor(damage / 2);
          break;
        case 'fire' :
          damage = Math.floor(damage * 0.8);
          break;
        case 'ice' :
          damage = damage * 2;
          break;
      }
    }else if(hero.atkE == 'light'){
      switch(monster.defE){
        case 'dark' :
          damage = damage * 2;
          break;
      }
    }else if(hero.atkE == 'thunder'){
      switch(monster.defE){
        case 'water' :
          damage = damage * 2;
          break;
        case 'ice' :
          damage = Math.floor(damage / 2);
      }
    }else if(hero.atkE == 'leaf'){
      switch(monster.defE){
        case 'fire' :
          damage = Math.floor(damage / 2);
          break;
        case 'water' :
          damage = Math.floor(damage * 1.5);
          break;
      }
    }else if(hero.atkE == 'water'){
      switch(monster.defE){
        case 'fire' :
          damage = damage * 2;
          break;
        case 'ice' :
          damage = Math.floor(damage * 1.5);
          break;
        case 'thunder' :
          damage = Math.floor(damage / 2);
          break;
        case 'leaf' :
          damage = Math.floor(damage * 0.75);
          break;
      }
    }else if(hero.atkE == 'ice'){
      switch(monster.defE){
        case 'thunder' :
          damage = Math.floor(damage * 1.5);
          break;
        case 'fire' :
          damge = Math.floor(damage / 2);
          break;
      }
    }
    return damage;
  }

  elementMonsterAttack(hero, monster, damage){
    if(monster.atkE == 'fire'){
      switch(hero.defE){
        case 'leaf' :
          damage = Math.floor(damage * 1.5);
          break;
        case 'water' :
          damage = Math.floor(damage / 2);
          break;
        case 'fire' :
          damage = Math.floor(damage * 0.8);
          break;
        case 'ice' :
          damage = damage * 2;
          break;
      }
    }else if(monster.atkE == 'dark'){
      switch(hero.defE){
        case 'light' :
          damage = damage * 2;
          break;
      }
    }else if(monster.atkE == 'thunder'){
      switch(hero.defE){
        case 'water' :
          damage = damage * 2;
          break;
        case 'ice' :
          damage = Math.floor(damage / 2);
      }
    }else if(monster.atkE == 'leaf'){
      switch(hero.defE){
        case 'fire' :
          damage = Math.floor(damage / 2);
          break;
        case 'water' :
          damage = Math.floor(damage * 1.5);
          break;
      }
    }else if(monster.atkE == 'water'){
      switch(hero.defE){
        case 'fire' :
          damage = damage * 2;
          break;
        case 'ice' :
          damage = Math.floor(damage * 1.5);
          break;
        case 'thunder' :
          damage = Math.floor(damage / 2);
          break;
        case 'leaf' :
          damage = Math.floor(damage * 0.75);
          break;
      }
    }else if(monster.atkE == 'ice'){
      switch(hero.defE){
        case 'thunder' :
          damage = Math.floor(damage * 1.5);
          break;
        case 'fire' :
          damge = Math.floor(damage / 2);
          break;
      }
    }
    return damage;
  }

}