export class Weapons {
  constructor(){
    this.itemList = [
      {name: 'Dagger', atk: 5, spd: 3, atkE: 'normal', img: '../dist/img/dagger.png'},
      {name: 'Katana', atk: 10, spd: -3, atkE: 'normal', img: '../dist/img/katana.png'},
      {name: 'Flame Sword', atk: 15, spd: -3, atkE: 'fire', img: '../dist/img/flameSword.png'},

    ];
  }

  equipPlus(weapon, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == weapon){
        hero.atk += each['atk'];
        hero.spd += each['spd'];
        hero.atkE = each['atkE'];
      }
    });
  }
  equipMinus(weapon, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == weapon){
        hero.atk -= each['atk'];
        hero.spd -= each['spd'];
        hero.atkE = 'normal';
      }
    });
  }
}