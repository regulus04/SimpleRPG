export class Shoes {
  constructor(){
    this.itemList = [
      {name: 'Red Shoes', atk: 1, def: 1, spd: 5, img: '../dist/img/redShoes.png'},
    ];
  }

  equipPlus(shoes, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == shoes){
        hero.atk += each['atk'];
        hero.def += each['def'];
        hero.spd += each['spd'];
      }
    });
  }
  equipMinus(shoes, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == shoes){
        hero.atk -= each['atk'];
        hero.def -= each['def'];
        hero.spd -= each['spd'];
      }
    });
  }
}