export class Shirts {
  constructor(){
    this.itemList = [
      {name: 'Dog T', def: 5, img: '../dist/img/dogT.png'},
      {name: 'Rain T', def: 20, img: '../dist/img/rainT.png'},
      {name: 'No.1 T', def: 30, img: '../dist/img/numberOne.png'},
      {name: 'Border T', def: 10, img: '../dist/img/tigerT.png'},
      {name: 'Manteau', def: 40, img: '../dist/img/manteau.png'},
      {name: 'Triplet T', def: 13, img: '../dist/img/tripletT.png'},
      {name: 'Squid T', def: 15, img: '../dist/img/squidT.png'},
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