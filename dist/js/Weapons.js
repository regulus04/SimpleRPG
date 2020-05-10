export class Weapons {
  constructor(){
    this.itemList = [
      {name: 'Dagger', atk: 5, spd: 3, img: '../dist/img/dagger.png'},
      {name: 'Katana', atk: 10, spd: -3, img: '../dist/img/katana.png'},
    ];
  }

  equipPlus(weapon, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == weapon){
        hero.atk += each['atk'];
        hero.spd += each['spd'];
      }
    });
  }
  equipMinus(weapon, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == weapon){
        hero.atk -= each['atk'];
        hero.spd -= each['spd'];
      }
    });
  }
}