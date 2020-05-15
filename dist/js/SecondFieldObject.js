export class SecondFieldObject {
  constructor(){
    this.name = 'second floor';
    this.background = './img/secondFloorH.png';
    this.battleBG = './img/battleBG2.png';
    this.obstaclesPosition = [
      {name: 'boss', top: 0, left: 250, type: 'boss', status: 'alive', img: './img/purpleicon.png'},
      {name: 'chest-1', top: 100, left: 100, type: 'chest', status: 'closed', treasure: 'Shuriken'},
      {name: 'chest-2', top: 200, left: 200, type: 'chest', status: 'closed', treasure: 'Stone'},
    ];
  }

  charStop(charX, charY, direction){
    let order = 0;
    this.obstaclesPosition.forEach(function(each){
      if(charX >= each['left'] && charX <= each['left'] + 55 && direction == 'left' && charY <= each['top'] + 5 && charY >= each['top'] - 5){
        order = 'stop';
      }else if(charY <= each['top'] && charY >= each['top'] - 55 && direction == 'down' && charX <= each['left'] + 5 && charX >= each['left'] - 5){
        order = 'stop';
      }else if(charX <= each['left'] && charX >= each['left'] - 55 && direction == 'right' && charY <= each['top'] + 5 && charY >= each['top'] - 5){
        order = 'stop';
      }else if(charY >= each['top'] && charY <= each['top'] + 55 && direction == 'up' && charX <= each['left'] + 5 && charX >= each['left'] - 5){
        order = 'stop';
      }
    });
    return order;
  }

  charBump(charX, charY){
    let order;
    this.obstaclesPosition.forEach(function(each){
      if(each['left'] == charX && each['top'] == charY){
        order = 'stop';
      }
    });
    return order;
  }

  checkIfNext(charX, charY, person){
    let talkable = false;
    this.obstaclesPosition.forEach(function(each){
      if(each['name'] == person){
        if(each['top'] == charY && each['left'] - 50 == charX){
          talkable = true;
        }else if(each['top'] + 50 == charY && each['left'] == charX){
          talkable = true;
        }else if(each['top'] == charY && each['left'] + 50 == charX){
          talkable = true;
        }else if(each['top'] - 50 == charY && each['left'] == charX){
          talkable = true;
        }
      }
    });
    return talkable;
  }

  stairCheck(){
    let stairs;
    if(this.name != 'first floor'){
      stairs = 'on stairs';
    }
    return stairs;
  }
}