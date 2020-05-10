export class Caps {
  constructor(){
    this.itemList = [
      {name: 'Legend Cap', def: 5, element: 'fire', img: '../dist/img/legendCap.png'},
    ];
  }

  equipPlus(cap, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == cap){
        hero.def += each['def'];
        hero.element = each['element'];
      }
    });
  }
  equipMinus(cap, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == cap){
        hero.def -= each['def'];
        hero.element = 'normal';
      }
    });
  }
}