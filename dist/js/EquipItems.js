import { Weapons } from "./Weapons.js";
import { Shoes } from "./Shoes.js";
import { Caps } from "./Caps.js";
import { Shirts } from "./Shirts.js";

export class EquipItems {
  constructor(){
    this.itemList = [

      {name: 'Dagger', stock: 0, type: 'weapon'},
      {name: 'Katana', stock: 0, type: 'weapon'},
      {name: 'Musashi', stock: 0, type: 'weapon'},
      {name: 'Mixer', stock: 0, type: 'weapon'},
      {name: 'Happy Flower', stock: 0, type: 'weapon'},
      {name: 'Flame Sword', stock: 0, type: 'weapon'},
      {name: 'Bloody Sythe', stock: 0, type: 'weapon'},
      {name: 'Axe', stock: 0, type: 'weapon'},
      {name: 'Jinrai', stock: 0, type: 'weapon'},
      {name: 'Wooden Stick', stock: 0, type: 'weapon'},
      {name: 'Carp Heads', stock: 0, type: 'weapon'},
      
      {name: 'Legend Cap', stock: 0, type: 'cap'},
      {name: 'Box Cap', stock: 0, type: 'cap'},
      {name: 'Happy Head', stock: 0, type: 'cap'},
      {name: 'Carrot Cap', stock: 0, type: 'cap'},
      {name: 'Angel Head', stock: 0, type: 'cap'},
      {name: 'Punk Head', stock: 0, type: 'cap'},
      {name: 'Frog Cap', stock: 0, type: 'cap'},
      {name: 'Crown', stock: 0, type: 'cap'},

      {name: 'Red Shoes', stock: 0, type: 'shoes'},
      {name: 'Yellow Shoes', stock: 0, type: 'shoes'},
      {name: 'Beans Shoes', stock: 0, type: 'shoes'},
      {name: 'Rain Boots', stock: 0, type: 'shoes'},
      {name: 'Feather Shoes', stock: 0, type: 'shoes'},
      {name: 'Box Shoes', stock: 0, type: 'shoes'},

      {name: 'Dog T', stock: 0, type: 'shirt'},
      {name: 'Rain T', stock: 0, type: 'shirt'},
      {name: 'No.1 T', stock: 0, type: 'shirt'},
      {name: 'Border T', stock: 0, type: 'shirt'},
      {name: 'Manteau', stock: 0, type: 'shirt'},
      {name: 'Triplet T', stock: 0, type: 'shirt'},
      {name: 'Squid T', stock: 0, type: 'shirt'},
      
    ];
  }
  spendItem(itemName){
    this.itemList.forEach(function(item){
      if(itemName == item['name']){
        item['stock'] -= 1;
      }
    });
  }
  getItem(itemName){
    this.itemList.forEach(function(item){
      if(itemName == item['name']){
        item['stock'] += 1;
      }
    });
  }
  
  type(itemName){
    let result;
    this.itemList.forEach(function(each){
      if(itemName == each['name']){
        if(each['type'] == 'weapon'){
          result = 'weapon';
        }else if(each['type'] == 'shoes'){
          result = 'shoes';
        }else if(each['type'] == 'cap'){
          result = 'cap';
        }else if(each['type'] == 'shirt'){
          result = 'shirt';
        }
      }
    });
    return result;
  }

  getImg(itemName){
    let url;
    this.itemList.forEach(function(each){
      if(each['type'] == 'weapon'){
        let weapon = new Weapons;
        weapon.itemList.forEach((each) => {
          if(each['name'] == itemName){
            url = each['img'];
          }
        });
      }else if(each['type'] == 'shoes'){
        let shoes = new Shoes;
        shoes.itemList.forEach((each) => {
          if(each['name'] == itemName){
            url = each['img'];
          }
        });
      }else if(each['type'] == 'cap'){
        let caps = new Caps;
        caps.itemList.forEach((each) => {
          if(each['name'] == itemName){
            url = each['img'];
          }
        });
      }else if(each['type'] == 'shirt'){
        let shirts = new Shirts;
        shirts.itemList.forEach((each) => {
          if(each['name'] == itemName){
            url = each['img'];
          }
        });
      }
    });
    return url;
  }
  // This doesnt work in other prototypes
  equipPlus(item, hero, weapons, shoes, caps){
    weapons.itemList.forEach(function(each){
      if(each['name'] == item){
        hero.atk += each['atk'];
        hero.spd += each['spd'];
      }
    });
    shoes.itemList.forEach(function(each){
      if(each['name'] == item){
        hero.atk += each['atk'];
        hero.def += each['def'];
        hero.spd += each['spd'];
      }
    });
    caps.itemList.forEach(function(each){
      if(each['name'] == item){
        hero.def += each['def'];
        hero.defE = each['defE'];
      }
    });
    shirts.itemList.forEach(function(each){
      if(each['name'] == item){
        hero.def += each['def'];
      }
    });
  }
  equipMinus(item, hero, weapons, shoes, caps, shirts){
    weapons.itemList.forEach(function(each){
      if(each['name'] == item){
        hero.atk -= each['atk'];
        hero.spd -= each['spd'];
      }
    });
    shoes.itemList.forEach(function(each){
      if(each['name'] == item){
        hero.atk -= each['atk'];
        hero.def -= each['def'];
        hero.spd -= each['spd'];
      }
    });
    caps.itemList.forEach(function(each){
      if(each['name'] == item){
        hero.def -= each['def'];
        hero.defE = 'normal';
      }
    });
    shirts.itemList.forEach(function(each){
      if(each['name'] == item){
        hero.def -= each['def'];
      }
    });
  }

  checkHeroEquip(item, hero){
    this.itemList.forEach(function(each){
      if(item == each['name']){
        if(each['type'] == 'weapon'){
          let heroWeapon = hero.weapon;
          let weapons = new Weapons;
          if(heroWeapon == 'none'){
            hero.equipWeapon(item);
            weapons.equipPlus(item, hero);
          }else{
            if(item == heroWeapon){
              hero.unequipWeapon();
              weapons.equipMinus(heroWeapon, hero);
            }else{
              weapons.equipMinus(heroWeapon, hero);
              hero.equipWeapon(item);
              weapons.equipPlus(item, hero);
            }
          }
        }else if(each['type'] == 'shoes'){
          let heroShoes = hero.shoes;
          let shoes = new Shoes;
          if(heroShoes == 'none'){
            hero.equipShoes(item);
            shoes.equipPlus(item, hero);
          }else{
            if(item == heroShoes){
              hero.unequipShoes();
              shoes.equipMinus(heroShoes, hero);
            }else{
              shoes.equipMinus(heroShoes, hero);
              hero.equipShoes(item);
              shoes.equipPlus(item, hero);
            }
          }
        }else if(each['type'] == 'cap'){
          let heroCaps = hero.head;
          let caps = new Caps;
          if(heroCaps == 'none'){
            hero.equipHead(item);
            caps.equipPlus(item, hero);
          }else{
            if(item == heroCaps){
              hero.unequipHead(item);
              caps.equipMinus(heroCaps, hero);
            }else{
              caps.equipMinus(heroCaps, hero);
              hero.equipHead(item);
              caps.equipPlus(item, hero);
            }
          }
        }else if(each['type'] == 'shirt'){
          let heroShirt = hero.shirt;
          let shirts = new Shirts;
          if(heroShirt == 'none'){
            hero.equipShirt(item);
            shirts.equipPlus(item, hero);
          }else{
            if(item == heroShirt){
              hero.unequipShirt(item);
              shirts.equipMinus(heroShirt, hero);
            }else{
              shirts.equipMinus(heroShirt, hero);
              hero.equipShirt(item);
              shirts.equipPlus(item, hero);
            }
          }
        }
      }
    });
  }
  
}