class Animal {
    constructor(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }

    setName(name) {
        this.name = name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    toStringAnimal() {
        return "Tên: " + this.getName() + " <br> Cân nặng: " + this.getWeight() + "<br>"
    }
}

let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight("45,6");
document.write(objAnimal1.toStringAnimal());
let objAnimal2 = new Animal("Dog", 34);
objAnimal2.setName("Mouse");
document.write(objAnimal2.toStringAnimal())