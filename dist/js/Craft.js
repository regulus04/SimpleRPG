export class Craft {

  craftPatern(material, equip){
    let result;
    switch(material){
      // Bronze /////////////////////
      case 'Bronze' :
        switch(equip){
          case 'Katana' :
            result = 'Flame Sword';
            break;
          default :
            result = 'Stone';
        }
        break;
      // Mithril ////////////////////
      case 'Mithril' :
        switch(equip){
          case 'Dagger' :
            result = 'Katana';
            break;
          default :
            result = 'Stone';
        }
        break;
      // Orichalcum //////////////////
      case 'Orichalcum' :
        switch(equip){
          case 'Dagger' :
            result = 'Flame Sword';
            break;
          default :
            result = 'Stone';
        }
        break;
        
      default :
        result = 'Stone';
    }
    return result;
  }
}