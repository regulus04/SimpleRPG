export class Weapons {
  constructor(){
    this.itemList = [
      // {name: 'none', atk: 0, spd: 0, atkE: 'normal', img: '../dist/img/arms.png'},
      {name: 'Dagger', atk: 5, spd: 3, atkE: 'normal', img: '../dist/img/dagger.png'},
      {name: 'Katana', atk: 8, spd: -3, atkE: 'normal', img: '../dist/img/katana.png'},
      {name: 'Flame Sword', atk: 15, spd: -3, atkE: 'fire', img: '../dist/img/flameSword.png'},
      {name: 'Musashi', atk: 30, spd: 0, atkE: 'normal', img: '../dist/img/musashi.png'},
      {name: 'Mixer', atk: 10, spd: 10, atkE: 'normal', img: '../dist/img/mixer.png'},
      {name: 'Happy Flower', atk: 10, spd: 10, atkE: 'light', img: '../dist/img/happyFlower.png'},
      {name: 'Bloody Sythe', atk: 20, spd: 3, atkE: 'normal', img: '../dist/img/bloodySythe.png'},
      {name: 'Axe', atk: 18, spd: -3, atkE: 'normal', img: '../dist/img/axe.png'},
      {name: 'Jinrai', atk: 20, spd: 5, atkE: 'thunder', img: '../dist/img/jinrai.png'},
      {name: 'Wooden Stick', atk: 20, spd: 1, atkE: 'leaf', img: '../dist/img/woodenStick.png'},
      {name: 'Carp Heads', atk: 20, spd: 10, atkE: 'water', img: '../dist/img/carpHeads.png'},

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