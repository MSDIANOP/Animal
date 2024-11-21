function Animal(){
    this.type="Animal";
}
Animal.prototype.sound=
function(){
    console.log("Animal sound");
}

function Dog(){
    Animal.call(this);
}

Dog.prototype=
Object.create(Animal.prototype);

Dog.prototype.sound=()=>{
    console.log("Bark");
}
const myDog=new Dog();
myDog.sound();
