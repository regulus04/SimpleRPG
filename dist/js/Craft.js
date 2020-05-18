export class Craft {

  craftPatern(material, equip){
    let result;
    switch(material){
      // Bronze /////////////////////
      case 'Bronze' :
        switch(equip){
          case 'Wooden Stick' :
            result = 'Katana';
            break;
          case 'Katana' :
            result = 'Wooden Stick';
            break;
          // Caps
          case 'Carrot Cap' :
            result = 'Box Cap';
            break;
          case 'Box Cap' :
            result = 'Carrot Cap';
            break;
          // Shoes
          case 'Red Shoes' :
            result = 'Yellow Shoes'
            break;
          case 'Yellow Shoes' :
            result = 'Red Shoes';
            break;
          // Shirt
          case 'No.1 T':
            result = 'Dog T'
            break;
          case 'Dog T':
            result = 'No.1 T';
            break;
          default :
            result = 'Stone';
        }
        break;
      // Mithril ////////////////////
      case 'Mithril' :
        switch(equip){
          case 'Dagger' :
            result = 'Jinrai';
            break;
          case 'Axe' :
            result = 'Bloody Sythe';
            break;
          case 'Katana' :
            result = 'Flame Sword';
            break;
          case 'Jinrai' :
            result = 'Dagger';
            break;
          case 'Bloody Sythe' :
            result = 'Axe';
            break;
          case 'Flame Sword' :
            result = 'Katana';
            break;
          // Caps 
          case 'Carrot Cap' :
            result = 'Happy Head';
            break;
          case 'Happy Head' :
            result = 'Carrot Cap';
            break;
          case 'Box Cap' :
            result = 'Punk Head';
            break;
          case 'Punk Head' :
            result = 'Box Cap';
            break;
          case 'Happy Head' :
            result = 'Angel Head';
            break;
          case 'Angel Head' :
            result = 'Happy Head';
            break;
          // Shoes
          case 'Yellow Shoes' :
            result = 'Box Shoes';
            break;
          case 'Box Shoes' :
            result = 'Yellow Shoes';
            break;
          // Shirt 
          case 'Rain T' :
            result = 'Squid T';
            break;
          case 'Squid T' :
            result = 'Manteau';
            break;
          case 'Border T' :
            result = 'Triplet T';
            break;
          case 'Triplet T' :
            result = 'Border T';
            break;
          default :
            result = 'Stone';
        }
        break;
      // Orichalcum //////////////////
      case 'Orichalcum' :
        switch(equip){
          // Weapons
          case 'Dagger' :
            result = 'Carp Heads';
            break;
          case 'Carp Heads' :
            result = 'Dagger';
            break;
          case 'Wooden Stick' :
            result = 'Happy Flower';
            break;
          case 'Happy Flower' :
            result = 'Wooden Stick';
            break;
          case 'Katana' :
            result = 'Musashi';
            break;
          case 'Musashi' :
            result = 'Katana';
            break;
          // Caps
          case 'Punk Head' :
            result = 'Crown';
            break;
          case 'Crown' :
            result = 'Punk Head';
            break;
          case 'Angel Head' :
            result = 'Legend Cap';
            break;
          case 'Legend Cap' :
            result = 'Angel Head';
            break;
          // Shoes
          case 'Beans Shoes' :
            result = 'Rain Boots';
            break;
          case 'Rain Boots' :
            result = 'Beans Shoes';
            break;
          // Shirts
          case 'Squid T' :
            result = 'Manteau';
            break;
          case 'Triplet T' :
            result = 'Manteau';
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