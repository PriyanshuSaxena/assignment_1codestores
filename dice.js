
class Dice{
    constructor(){
        this.number = 0;
    }

    roll(){
        let n = Math.floor((Math.random() * 6) + 1);
        this.number = n;
        return n;
    }
}

function rollon(){
let dice1 =  new Dice();
let dice2 =  new Dice();
let dice3 =  new Dice();
let dice4 =  new Dice();
let dice5 =  new Dice();

let sum =  dice1.roll() + dice2.roll() + dice3.roll() + dice4.roll() + dice5.roll();
console.log(sum);
return sum;
}

