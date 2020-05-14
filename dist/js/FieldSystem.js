import { SecondFieldObject } from "./SecondFieldObject.js";
import { FirstBoss } from "./FirstBoss.js";
import { SecondBoss } from "./SecondBoss.js";
import { ThirdBoss } from "./ThirdBoss.js";
import { FourthBoss } from "./FourthBoss.js";
import { FifthBoss } from "./FifthBoss.js";
import { Monsters } from "./Monsters.js";
import { SecondMonsters } from "./SecondMonsters.js";
import { FieldObject } from "./FieldObject.js";
import { ThirdFieldObject } from "./thirdFieldObject.js";
import { FourthFieldObject } from "./FourthFieldObject.js";
import { FifthFieldObject } from "./FifthFieldObject.js";

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
    switch(floorName){
      case 'first floor' :
        monster = new Monsters(enemyNum);
        break;
      case 'second floor' :
        monster = new SecondMonsters(enemyNum);
        break;
      case 'third floor' :
        monster = new ThirdMonsters(enemyNum);
        break;
      case 'fourth floor' :
        monster = new FourthMonsters(enemyNum);
        break;
      case 'fifth floor' :
        monster = new FifthMonsters(enemyNum);
        break;
      
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
    switch(foName){
      case 'first floor' :
        floor = new SecondFieldObject;
        break;
      case 'second floor' :
        floor = new ThirdFieldObject;
        break;
      case 'third floor' :
        floor = new FourthFieldObject;
        break;
      case 'fourth floor' :
        floor = new FifthFieldObject;
        break;
    }
    return floor;
  }
  goDownStairs(foName){
    let floor;
    switch(foName){
      case 'second floor' :
        floor = new FieldObject;
        break;
      case 'third floor' :
        floor = new SecondFieldObject;
        break;
      case 'fourth floor' :
        floor = new ThirdFieldObject;
        break;
      case 'fifth floor' :
        floor = new FourthFieldObject;
        break;
    }
    return floor;
  }
  setBoss(foName){
    let boss;
    switch(foName){
      case 'first floor' :
        boss = new FirstBoss;
        break;
      case 'second floor' :
        boss = new SecondBoss;
        break;
      case 'third floor' :
        boss = new ThirdBoss;
        break;
      case 'fourth floor' :
        boss = new FourthBoss;
        break;
      case 'fifth floor' :
        boss = new FifthBoss;
        break;

    }
    return boss;
  }

}