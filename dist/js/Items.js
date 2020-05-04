export class Items {
  constructor(){
    this.itemList = [
      {name: 'Potion', stock: 3},
      {name: 'Ether', stock: 3},
      {name: 'Stone', stock: 0},
      {name: 'Shuriken', stock: 3},
      {name: 'Chocolate', stock: 0},
      {name: 'Whistle', stock: 0},
      {name: 'Fire Ball', stock: 0},
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
}