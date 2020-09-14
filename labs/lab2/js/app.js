
class Instrument {

    constructor(loudness, family, verb){
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
    }

     brrr(){
        console.log(this.family + " goes " + this.verb + " at " + this.loudness);
    }

}

class Woodwind extends Instrument{
    constructor(){
        super("3000 Hz","Woodwind","brrrrr")
    }
}

class Percussion extends Instrument{
    constructor(){
        super("5000000000 Hz","Percussion","bang")
    }
}
class Strings extends Instrument{
    constructor(){
        super("2000 Hz","Strings","vrmmmmmmm")
    }
}

let thing = [];
thing [0] = new Woodwind();
thing [1] = new Percussion();
thing [2] = new Strings();

thing.forEach((borgar) => {
    borgar.brrr();
});


