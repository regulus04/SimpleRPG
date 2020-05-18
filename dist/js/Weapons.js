export class Weapons {
  constructor(){
    this.itemList = [
      {name: 'Dagger', atk: 10, spd: 3, atkE: 'normal', img: './img/dagger.png'},
      {name: 'Katana', atk: 13, spd: -3, atkE: 'normal', img: './img/katana.png'},
      {name: 'Flame Sword', atk: 18, spd: -3, atkE: 'fire', img: './img/flameSword.png'},
      {name: 'Musashi', atk: 32, spd: 3, atkE: 'normal', img: './img/musashi.png'},
      {name: 'Mixer', atk: 10, spd: 10, atkE: 'normal', img: './img/mixer.png'},
      {name: 'Happy Flower', atk: 45, spd: 10, atkE: 'light', img: './img/happyFlower.png'},
      {name: 'Bloody Sythe', atk: 35, spd: -2, atkE: 'normal', img: './img/bloodySythe.png'},
      {name: 'Axe', atk: 24, spd: -5, atkE: 'normal', img: './img/axe.png'},
      {name: 'Jinrai', atk: 20, spd: 5, atkE: 'thunder', img: './img/jinrai.png'},
      {name: 'Wooden Stick', atk: 5, spd: 1, atkE: 'leaf', img: './img/woodenStick.png'},
      {name: 'Carp Heads', atk: 35, spd: 5, atkE: 'water', img: './img/carpHeads.png'},
    ];
  }

  equipPlus(weapon, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == weapon){
        hero.atk += each['atk'];
        hero.spd += each['spd'];
        hero.atkE = each['atkE'];
      }
    });
  }
  equipMinus(weapon, hero){
    this.itemList.forEach(function(each){
      if(each['name'] == weapon){
        hero.atk -= each['atk'];
        hero.spd -= each['spd'];
        hero.atkE = 'normal';
      }
    });
  }
}