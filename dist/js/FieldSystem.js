import { SecondFieldObject } from "./SecondFieldObject.js";
import { FirstBoss } from "./FirstBoss.js";
import { SecondBoss } from "./SecondBoss.js";
import { ThirdBoss } from "./ThirdBoss.js";
import { FourthBoss } from "./FourthBoss.js";
import { FifthBoss } from "./FifthBoss.js";
import { Monsters } from "./Monsters.js";
import { SecondMonsters } from "./SecondMonsters.js";
import { ThirdMonsters } from "./ThirdMonsters.js";
import { FourthMonsters } from "./FourthMonsters.js";
import { FifthMonsters } from "./FifthMonsters.js";
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

  goUpStairs(foName, fo, fo1, fo2, fo3, fo4, fo5){
    let floor;
    switch(foName){
      case 'first floor' :
        fo1 = fo;
        floor = fo2;
        break;
      case 'second floor' :
        fo2 = fo;
        floor = fo3;
        break;
      case 'third floor' :
        fo3 = fo;
        floor = fo4;
        break;
      case 'fourth floor' :
        fo4 = fo;
        floor = fo5;
        break;
    }
    return floor;
  }
  goDownStairs(foName, fo, fo1, fo2, fo3, fo4, fo5){
    let floor;
    switch(foName){
      case 'second floor' :
        fo2 = fo;
        floor = fo1;
        break;
      case 'third floor' :
        fo3 = fo;
        floor = fo2;
        break;
      case 'fourth floor' :
        fo4 = fo;
        floor = fo3;
        break;
      case 'fifth floor' :
        fo5 = fo;
        floor = fo4;
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

  chestCheck(charX, charY, fo){
    let chest;
    fo.obstaclesPosition.forEach(function(each){
      if(each['type'] == 'chest' && each['status'] == 'closed'){
        if((each['top'] == charY && each['left'] - 50 == charX) ||
           (each['top'] + 50 == charY && each['left'] == charX) ||
           (each['top'] == charY && each['left'] + 50 == charX) ||
           (each['top'] - 50 == charY && each['left'] == charX)){
              chest = each['name'];
           }
      }
    });
    return chest;
  }

  chestOpen(fo, chestName){
    let content;
    fo.obstaclesPosition.forEach(function(each){
      if(each['name'] == chestName){
        each['status'] = 'opened';
        content = each['treasure'];
      }
    });
    return content;
  }
}