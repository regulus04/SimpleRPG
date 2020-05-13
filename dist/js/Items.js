export class Items {
  constructor(){
    this.itemList = [
      {name: 'Potion', stock: 3, use: 'both', type: 'drink', description: '30 HP recovery', message: 'Hero is healed a bit'},
      {name: 'Ether', stock: 3, use: 'both', type: 'drink', description: '20 MP recovery', message: 'Hero is healed a bit'},
      {name: 'Stone', stock: 0, use: 'battle', type: 'throw',mdescription: 'You can throw', message: 'Hero threw a stone'},
      {name: 'Shuriken', stock: 3, use: 'battle', type: 'throw', description: 'You can throw', message: 'Hero threw a Shuriken'},
      {name: 'Chocolate', stock: 1, use: 'battle', type: 'drink', description: 'Gain 5 atk temporary', message: 'Hero feels power!!!'},
      {name: 'Whistle', stock: 1, use: 'field', type: 'other', description: 'Use and see what happens'},
      {name: 'Fire Ball', stock: 1, use: 'battle', type: 'throw', description: 'You can throw', message: 'Hero threw a fire ball'},
      {name: 'Mithril', stock: 1, use: 'material', type: 'none', description: 'This is for Craft'},
      {name: 'Bronze', stock: 1, use: 'material', type: 'none', description: 'This is for Craft'},
      {name: 'Orichalcum', stock: 1, use: 'material', type: 'none', description: 'This is for Craft'},
    ];
  }
  useItem(itemName, hero){
    this.spendItem(itemName);
    let url;
    switch(itemName){
      case 'Potion' :
        hero.hp += 30;
        if(hero.hp >= hero.maxHp){
          hero.hp = hero.maxHp
        }
        url = '../dist/img/potion.png';
        break;
      case 'Ether' :
        hero.mp += 20;
        if(hero.mp >= hero.maxMp){
          hero.mp = hero.maxMp
        }
        url = '../dist/img/potion.png';
        break;
      case 'Chocolate' :
        hero.battleAtk += 5;
        url = '../dist/img/potion.png'
    }
    return url;
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

  getUse(itemName){
    let result;
    this.itemList.forEach(function(each){
      if(itemName == each['name']){
        result = each['use'];
      }
    });
    return result;
  }

  getType(itemName){
    let result;
    this.itemList.forEach(function(each){
      if(itemName == each['name']){
        result = each['type'];
      }
    });
    return result;
  }

  getMessage(itemName){
    let result;
    this.itemList.forEach(function(each){
      if(itemName == each['name']){
        result = each['message'];
      }
    });
    return result;
  }

  getDescription(itemName){
    let result;
    this.itemList.forEach(function(each){
      if(itemName == each['name']){
        result = each['description'];
      }
    });
    return result;
  }
}