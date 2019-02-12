const DigitalPal = function(){
    this.hungry = false;
    this.sleepy = false;
    this.bored = false;
    this.age = 0;

    this.feed = function(){
        if(this.hungry){
            console.log(`That was yummy`);
            this.hungry = !this.hungry;
            this.sleepy = true;
        } 
        else{
            console.log(`No thanks, I'm full`);
        }
    }

    this.sleep = function(){
        if(this.sleepy){
            console.log(`ZzzzzzZzZZzzzz....`);
            this.sleepy = !this.sleepy;
            this.bored = true;
            this.increaseAge();
        }
        else{
            console.log(`Noooo! No sleep!`);
        }
    }

    this.play = function(){
        if(this.bored){
            console.log(`Fuck yea lets chase things`);
            this.bored = !this.bored;
            this.hungry = true;
        }
        else{
            console.log(`Nahhhh, lets lay around`);
        }
    }

    this.increaseAge = function(){
        this.age++;
        console.log(`Happy birthday to me! I am ${this.age} years old`);
    }
}

const doggo = new DigitalPal();

doggo.outside = false;

doggo.bark = () =>{console.log(`Woof`)};

doggo.goOutside = function(){
    if(!this.outside){
        console.log(`YES I LOVE THE OUTSIDE`);
        this.outside = true;
    }
    else{
        console.log(`But..we are outside?`);
    }
}

doggo.goInside = function(){
    if(this.outside){
        console.log(`Fine...lets go inside`);
        this.outside = false;
    }
    else{
        console.log(`But...we are inside?`);
    }
}

const cat = new DigitalPal();

cat.houseCondition = 100;

cat.meow = () => {console.log(`Meow bitch`)}

cat.destroyFurnature = function(){
    if(this.houseCondition-10 < 0){
        console.log(`Muwahahaha take that house`);
        this.houseCondition -= 10;
        this.bored = false;
        this.sleepy = true;
    }
    else{
        console.log(`nothing left to destroy`);
    }
    
}

cat.buyNewFurnature = function(){
    this.houseCondition += 50;
    console.log(`Sure you want to waste that money?`);
}

const [node,file,petChoice,action] = process.argv;

switch(petChoice){
    case `dog`:
    
}