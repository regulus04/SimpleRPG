export class Caps {
  constructor(){
    this.itemList = [
      {name: 'Legend Cap', def: 40, defE: 'fire', img: '../dist/img/legendCap.png'},
      {name: 'Box Cap', def: 5, defE: 'leaf', img: '../dist/img/cardboardH.png'},
      {name: 'Happy Head', def: 5, defE: 'light', img: '../dist/img/LuckyH.png'},
      {name: 'Carrot Cap', def: 8, defE: 'leaf', img: '../dist/img/carrotH.png'},
      {name: 'Angel Head', def: 20, defE: 'light', img: '../dist/img/angelH.png'},
      {name: 'Punk Head', def: 10, defE: 'thunder', img: '../dist/img/punkT.png'},
      {name: 'Frog Cap', def: 5, defE: 'water', img: '../dist/img/frogH.png'},
      {name: 'Crown', def: 30, defE: 'normal', img: '../dist/img/crown.png'},
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