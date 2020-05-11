export class Items {
  constructor(){
    this.itemList = [
      {name: 'Potion', stock: 3, use: 'both', description: '30 HP recovery'},
      {name: 'Ether', stock: 3, use: 'both', description: '20 HP recovery'},
      {name: 'Stone', stock: 0, use: 'battle', description: 'You can throw'},
      {name: 'Shuriken', stock: 3, use: 'battle', description: 'You can throw'},
      {name: 'Chocolate', stock: 0, use: 'battle', description: 'Gain 5 atk temporary'},
      {name: 'Whistle', stock: 0, use: 'field', description: 'Use and see what happens'},
      {name: 'Fire Ball', stock: 0, use: 'battle', description: 'You can throw'},
    ];
  }
  useItem(itemName, hero){
    this.spendItem(itemName);
    switch(itemName){
      case 'Potion' :
        hero.hp += 30;
        if(hero.hp >= hero.maxHp){
          hero.hp = hero.maxHp
        }
        break;
      case 'ether' :
        hero.mp += 20;
        if(hero.mp >= hero.maxMp){
          hero.mp = hero.maxMp
        }
        break;
    }
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

  getType(itemName){
    let result;
    this.itemList.forEach(function(each){
      if(itemName == each['name']){
        result = each['use'];
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