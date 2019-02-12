function Programmer(name,title,age,language){
    this.name = name
    this.title = title
    this.age = age
    this.language = language

    this.printTheDeets = function(){
        console.log(`---------------`);
        console.log(`Name: ${this.name}`)
        console.log(`Title: ${this.title}`)
        console.log(`Age: ${this.age}`)
        console.log(`Languages: ${this.language}`)
        console.log(`---------------`)
    }
}

const mike = new Programmer("Mike","Pixel Padiwan",29,["Javascript","Python"]);

mike.printTheDeets();