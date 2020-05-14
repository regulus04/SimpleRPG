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
      {name: 'Thunder Ball', stock: 1, use: 'battle', type: 'throw', description: 'You can throw', message: 'Hero threw a fire ball'},
      {name: 'Ice Ball', stock: 1, use: 'battle', type: 'throw', description: 'You can throw', message: 'Hero threw a fire ball'},
      {name: 'Mithril', stock: 1, use: 'material', type: 'none', description: 'This is for Craft', img: '../dist/img/mithril.png'},
      {name: 'Bronze', stock: 1, use: 'material', type: 'none', description: 'This is for Craft', img: '../dist/img/bronze.png'},
      {name: 'Orichalcum', stock: 1, use: 'material', type: 'none', description: 'This is for Craft', img: '../dist/img/orichalcum.png'},
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
        url = '../dist/img/healEffect.png';
        break;
      case 'Ether' :
        hero.mp += 20;
        if(hero.mp >= hero.maxMp){
          hero.mp = hero.maxMp
        }
        url = '../dist/img/healEffect.png';
        break;
      case 'Chocolate' :
        hero.battleAtk += 5;
        url = '../dist/img/powerup.png'
        break;
      case 'Stone' :
        url = '../dist/img/stone.png';
        break;
      case 'Shuriken' :
        url = '../dist/img/shuriken.png';
        break;
      case 'Fire Ball' :
        url = '../dist/img/fireball.png';
        break;
      case 'Thunder Ball' :
        url = '../dist/img/thunderball.png';
        break;
      case 'Ice Ball' :
        url = '../dist/img/iceball.png';
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
        console.log(Math.floor(hero.battleAtk * 1.5));
        break;
      case 'Fire Ball' :
        if(monster.defE == 'ice'){
          damage = Math.floor(hero.battleAtk * 2);
          monster.hp -= damage;
        }else if(monster.defE == 'water'){
          damage = Math.floor(hero.battleAtk * 0.2);
        }else{
          damage = Math.floor(hero.battleAtk * 0.8);
        }
        break;
      case 'Thunder Ball' :
        if(monster.defE == 'water'){
          damage = Math.floor(hero.battleAtk * 2);
          monster.hp -= damage;
        }else if(monster.defE == 'plastic'){
          damage = Math.floor(hero.battleAtk * 0.2);
        }else{
          damage = Math.floor(hero.battleAtk * 0.8);
        }
        break;
      case 'Ice Ball' :
        if(monster.defE == 'leaf'){
          damage = Math.floor(hero.battleAtk * 2);
          monster.hp -= damage;
        }else if(monster.defE == 'fire'){
          damage = Math.floor(hero.battleAtk * 0.2);
        }else{
          damage = Math.floor(hero.battleAtk * 0.8);
        }
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
}