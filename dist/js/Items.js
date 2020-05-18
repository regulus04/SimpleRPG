export class Items {
  constructor(){
    this.itemList = [
      {name: 'Potion', stock: 10, use: 'both', type: 'drink', description: '30 HP recovery', message: 'Hero is healed a bit'},
      {name: 'Super Potion', stock: 0, use: 'both', type: 'drink', description: '50 HP recovery', message: 'Hero is healed a bit'},
      {name: 'Ether', stock: 3, use: 'both', type: 'drink', description: '20 MP recovery', message: 'Hero is healed a bit'},
      {name: 'Stone', stock: 3, use: 'battle', type: 'throw', description: 'You can throw', message: 'Hero threw a stone'},
      {name: 'Shuriken', stock: 0, use: 'battle', type: 'throw', description: 'You can throw', message: 'Hero threw a Shuriken'},
      {name: 'Chocolate', stock: 0, use: 'battle', type: 'drink', description: 'Gain 5 atk temporary', message: 'Hero feels power!!!'},
      {name: 'Whistle', stock: 0, use: 'field', type: 'other', description: 'Use and see what happens'},
      {name: 'Fire Ball', stock: 0, use: 'battle', type: 'throw', description: 'You can throw', message: 'Hero threw a fire ball'},
      {name: 'Thunder Ball', stock: 0, use: 'battle', type: 'throw', description: 'You can throw', message: 'Hero threw a fire ball'},
      {name: 'Ice Ball', stock: 0, use: 'battle', type: 'throw', description: 'You can throw', message: 'Hero threw a fire ball'},
      {name: 'Leaf Ball', stock: 0, use: 'battle', type: 'throw', description: 'You can throw', message: 'Hero threw a leaf ball'},
      {name: 'Mithril', stock: 0, use: 'material', type: 'none', description: 'This is for Craft', img: './img/mythril.png'},
      {name: 'Bronze', stock: 0, use: 'material', type: 'none', description: 'This is for Craft', img: './img/bronze.png'},
      {name: 'Orichalcum', stock: 0, use: 'material', type: 'none', description: 'This is for Craft', img: './img/orichalcum.png'},
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
        url = './img/healEffect.png';
        break;
      case 'Super Potion' :
        hero.hp += 50;
        if(hero.hp >= hero.maxHp){
          hero.hp = hero.maxHp
        }
        url = './img/healEffect.png';
        break;
      case 'Ether' :
        hero.mp += 20;
        if(hero.mp >= hero.maxMp){
          hero.mp = hero.maxMp
        }
        url = './img/healEffect.png';
        break;
      case 'Chocolate' :
        hero.battleAtk += 5;
        url = './img/powerup.png'
        break;
      case 'Stone' :
        url = './img/stone.png';
        break;
      case 'Shuriken' :
        url = './img/shuriken.png';
        break;
      case 'Fire Ball' :
        url = './img/fireball.png';
        break;
      case 'Thunder Ball' :
        url = './img/thunderball.png';
        break;
      case 'Ice Ball' :
        url = './img/iceball.png';
        break;
      case 'Leaf Ball' :
        url = './img/leafball.png';
        break;
    }
    return url;
  }

  throwItem(itemName, hero, monster){
    let damage;
    switch(itemName){
      case 'Stone' :
        if(monster.defE == 'dark'){
          damage = Math.floor(hero.battleAtk * 2);
          monster.hp -= damage;
        }else{
          damage = Math.floor(hero.battleAtk * 0.8);
          monster.hp -= damage;
        }
        break;
      case 'Shuriken' :
        damage = Math.floor(hero.battleAtk * 1.5);
        monster.hp -= damage;
        break;
      case 'Fire Ball' :
        if(monster.defE == 'ice'){
          damage = Math.floor(hero.battleAtk * 2);
        }else if(monster.defE == 'water'){
          damage = Math.floor(hero.battleAtk * 0.2);
        }else if(monster.defE == 'leaf'){
          damage = Math.floor(hero.battleAtk * 1.5);
        }else{
          damage = Math.floor(hero.battleAtk * 0.8);
        }
        monster.hp -= damage;
        break;
      case 'Thunder Ball' :
        if(monster.defE == 'water'){
          damage = Math.floor(hero.battleAtk * 2);
          monster.hp -= damage;
        }else if(monster.defE == 'ice'){
          damage = Math.floor(hero.battleAtk * 0.5);
        }else{
          damage = Math.floor(hero.battleAtk * 0.8);
        }
        monster.hp -= damage;
        break;
      case 'Ice Ball' :
        if(monster.defE == 'thunder'){
          damage = Math.floor(hero.battleAtk * 2);
          monster.hp -= damage;
        }else if(monster.defE == 'fire'){
          damage = Math.floor(hero.battleAtk * 0.2);
        }else{
          damage = Math.floor(hero.battleAtk * 0.8);
        }
        monster.hp -= damage;
        break;
      case 'Leaf Ball' :
        if(monster.defE == 'water'){
          damage = Math.floor(hero.battleAtk * 2);
          monster.hp -= damage;
        }else if(monster.defE == 'fire'){
          damage = Math.floor(hero.battleAtk * 0.2);
        }else{
          damage = Math.floor(hero.battleAtk * 0.8);
        }
        monster.hp -= damage;
        break;
    }
    return damage;
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
  getImg(itemName){
    let img;
    this.itemList.forEach(function(each){
      if(itemName == each['name']){
        img = each['img'];
      }
    });
    return img;
  }
}