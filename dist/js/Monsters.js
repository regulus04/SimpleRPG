export class Monster {
  constructor(enemyNum){
    switch(enemyNum){
      case 1 :
        this.hp = 10;
        this.name = "Goomba";
        this.atk = 2;
        this.color = "saddlebrown";
        this.exp = 1;
        break;
      case 2 :
        this.hp = 20;
        this.name = "Koopa";
        this.atk = 5;
        this.color = "seagreen";
        this.exp = 3
        break;
      case 3 :
        this.hp = 30;
        this.name = "Patapata";
        this.atk = 10;
        this.color = "crimson";
        this.exp = 5
        break;
      case 4 :
        this.hp = 40;
        this.name = "Bowser";
        this.atk = 20;
        this.color = "green";
        this.exp = 10;
        break;
    }
  }

  attack(hero){
    hero.hp -= this.atk - hero.def;
  }
}

