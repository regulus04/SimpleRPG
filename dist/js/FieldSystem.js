export class FieldSystem {
  encount(){
    let encountNum = Math.floor(Math.random() * 20 + 1);

    if(encountNum == 20){
      return true;
    }else{
      return false;
    }
  }
}