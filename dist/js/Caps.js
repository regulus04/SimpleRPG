export class Caps {
  constructor(){
    this.itemList = [
      {name: 'Legend Cap', def: 40, defE: 'fire', img: './img/legendCap.png'},
      {name: 'Box Cap', def: 5, defE: 'leaf', img: './img/cardboardH.png'},
      {name: 'Happy Head', def: 5, defE: 'light', img: './img/LuckyH.png'},
      {name: 'Carrot Cap', def: 8, defE: 'leaf', img: './img/carrotH.png'},
      {name: 'Angel Head', def: 20, defE: 'light', img: './img/angelH.png'},
      {name: 'Punk Head', def: 10, defE: 'thunder', img: './img/punkT.png'},
      {name: 'Frog Cap', def: 5, defE: 'water', img: './img/frogH.png'},
      {name: 'Crown', def: 30, defE: 'normal', img: './img/crown.png'},
    ];
  }

  equipPlus(cap, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == cap){
        hero.def += each['def'];
        hero.defE = each['defE'];
      }
    });
  }
  equipMinus(cap, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == cap){
        hero.def -= each['def'];
        hero.defE = 'normal';
      }
    });
  }
}