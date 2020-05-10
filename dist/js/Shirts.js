export class Shirts {
  constructor(){
    this.itemList = [
      {name: 'Legend T-shirt', def: 5, img: '../dist/img/potion.png'},
    ];
  }

  equipPlus(shirt, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == shirt){
        hero.def += each['def'];
      }
    });
  }
  equipMinus(shirt, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == shirt){
        hero.def -= each['def'];
      }
    });
  }
}