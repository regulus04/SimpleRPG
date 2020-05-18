export class Shoes {
  constructor(){
    this.itemList = [
      // {name: 'none', atk: 0, def: 0, spd: 0, img: './img/legs.png'},
      {name: 'Red Shoes', atk: 1, def: 1, spd: 1, img: './img/redshoes.png'},
      {name: 'Yellow Shoes', atk: 2, def: 3, spd: 2, img: './img/yellowS.png'},
      {name: 'Beans Shoes', atk: 7, def: 7, spd: 5, img: './img/beansS.png'},
      {name: 'Rain Boots', atk: 10, def: 10, spd: 5, img: './img/rainBoots.png'},
      {name: 'Feather Shoes', atk: 15, def: 15, spd: 15, img: './img/featherS.png'},
      {name: 'Box Shoes', atk: 3, def: 10, spd: -5, img: './img/boxS.png'},
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