const dogs = {
    raining: true,
    noise: "woof",
    makeNoise: function(){
        console.log(this.noise)
    }
}

const cats = {
    raining: false,
    noise: "meow",
    makeNoise: function(){
        console.log(this.noise);
    }
}

dogs.makeNoise();
cats.makeNoise();