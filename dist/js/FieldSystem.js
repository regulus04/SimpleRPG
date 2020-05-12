import { SecondFieldObject } from "./SecondFieldObject.js";
import { FirstBoss } from "./FirstBoss.js";
import { SecondBoss } from "./SecondBoss.js";
import { Monsters } from "./Monsters.js";
import { SecondMonsters } from "./SecondMonsters.js";
import { FieldObject } from "./FieldObject.js";

export class FieldSystem {
  getCharX(char, field){
    return char.getBoundingClientRect().x - field.getBoundingClientRect().x;
  }
  getCharY(char, field){
    return char.getBoundingClientRect().y - field.getBoundingClientRect().y;
  }

  getDirection(mouseX, mouseY, charX, charY){
    let direction;
    if(mouseX > charX && mouseX < charX +50 && mouseY > charY && mouseY < charY + 50){
      direction = 'stop';
    }else if(mouseX >= charX && mouseX <= charX + 50){
      if(mouseY > charY){
        direction = 'down';
      }else{
        direction = 'up';
      }
    }else if(mouseY >= charY && mouseY <= charY + 50){
      if(mouseX > charX){
        direction = 'right';
      }else{
        direction = 'left';
      }
    }else{
        // right down area
        if(mouseX > charX && mouseY > charY){
          if(mouseX - charX > mouseY - charY){
            direction = 'right';
          }else{
            direction = 'down';
          }
        // right up area
        }else if(mouseX > charX && mouseY < charY){
          if(mouseX - (charX + 50) > charY - mouseY){
            direction = 'right';
          }else{
            direction = 'up';
          }
        // left down area
        }else if(mouseX < charX && mouseY > charY){
          if(charX - mouseX > mouseY - (charY + 50)){
            direction = 'left';
          }else{
            direction = 'down';
          }
        // left up area
        }else if(mouseX < charX && mouseY < charY){
          if(charX - mouseX > charY - mouseY){
            direction = 'left';
          }else{
            direction = 'up';
          }
        }
      }
      return direction;
    }

    moveCount(mouseX, mouseY, charX, charY, direction){
      let moveCount;
      switch(direction){
        case 'up' :
          moveCount = Math.floor((charY - mouseY) / 50) + 1;
          break;
        case 'down' :
          moveCount = Math.floor((mouseY - charY - 50) / 50) + 1;
          break;
        case 'left' :
          moveCount = Math.floor((charX - mouseX) / 50) + 1;
          break;
        case 'right' :
          moveCount = Math.floor((mouseX - charX - 50) / 50) + 1;
      }
      return moveCount;
    }
  encount(){
    let encountNum = Math.floor(Math.random() * 20 + 1);

    if(encountNum == 20){
      return true;
    }else{
      return false;
    }
  }
  encountMonster(floorName){
    let monster
    let enemyNum;
    enemyNum = Math.floor(Math.random() * 4) + 1;
    // Load Monster's data
    if(floorName == 'first floor'){
      monster = new Monsters(enemyNum);
    }else if(floorName == 'second floor'){
      monster = new SecondMonsters(enemyNum);
    }
    return monster;
  }

  fieldMessagePosition(char){
    let position;
    if(char.xOnField == 200){
      position = 'right';
    }else{
      position = 'left';
    }
    return position;
  }

  goUpStairs(foName){
    let floor;
    if(foName == 'first floor'){
      floor = new SecondFieldObject;
    }
    return floor;
  }
  goDownStairs(foName){
    let floor;
    if(foName == 'second floor'){
      floor = new FieldObject;
    }
    return floor;
  }
  setBoss(foName){
    let boss;
    if(foName == 'first floor'){
      boss = new FirstBoss;
    }else if(foName == 'second floor'){
      boss = new SecondBoss;
    }
    return boss;
  }

}