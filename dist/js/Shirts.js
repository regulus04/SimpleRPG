export class Shirts {
  constructor(){
    this.itemList = [
      {name: 'Dog T', def: 5, img: './img/dogT.png'},
      {name: 'Rain T', def: 20, img: './img/rainT.png'},
      {name: 'No.1 T', def: 30, img: './img/numberOne.png'},
      {name: 'Border T', def: 10, img: './img/tigerT.png'},
      {name: 'Manteau', def: 40, img: './img/manteau.png'},
      {name: 'Triplet T', def: 13, img: './img/tripletT.png'},
      {name: 'Squid T', def: 15, img: './img/squidT.png'},
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