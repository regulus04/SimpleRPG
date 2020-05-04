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

}