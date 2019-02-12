function Character(name,profession,gender,age,strength,hp){
    this.name = name
    this.profession = profession
    this.gender = gender
    this.age = age
    this.strength = strength
    this.hp = hp

    this.printStats = function(){
        console.log(`-----------------`);
        console.log(`Name: ${this.name}`);
        console.log(`Profession:  ${this.profession}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Age: ${this.age}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`HP: ${hp}`);
        console.log(`------------------`);
    }

    this.isAlive = function(){
        if(this.hp > 0){
            console.log(`${this.name} has ${this.hp}HP left`);
        }else{
            console.log(`${this.name} is dead`);
        }
    }

    this.attack = function(enemy){
        console.log(`${this.name} attacks ${enemy.name} for ${this.strength} damage`);
        enemy.hp =- this.strength;
    }

    this.levelUp = function(){
        this.age++
    }
}

const character1 = new Character("Bilbo Baggins","Burgler","Male",150,10,100);
const character2 = new Character("Bob","Taxi Driver","Male",49,6,110);

character1.printStats();
character2.printStats();

character1.attack(character2);
character2.printStats();
// character2.isAlive();