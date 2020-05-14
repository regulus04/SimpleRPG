export class Shoes {
  constructor(){
    this.itemList = [
      // {name: 'none', atk: 0, def: 0, spd: 0, img: '../dist/img/legs.png'},
      {name: 'Red Shoes', atk: 1, def: 1, spd: 1, img: '../dist/img/redshoes.png'},
      {name: 'Yellow Shoes', atk: 1, def: 1, spd: 5, img: '../dist/img/yellowS.png'},
      {name: 'Beans Shoes', atk: 5, def: 1, spd: 3, img: '../dist/img/beansS.png'},
      {name: 'Rain Boots', atk: 1, def: 10, spd: 5, img: '../dist/img/rainBoots.png'},
      {name: 'Feather Shoes', atk: 3, def: 3, spd: 15, img: '../dist/img/featherS.png'},
      {name: 'Box Shoes', atk: 10, def: 10, spd: -5, img: '../dist/img/boxS.png'},
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