function Bird(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "A brown bird.";
  this.image = "bird.jpeg";
}


function Hedgehog(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "A curled up hedgehog in a field of flowers.";
  this.image = "hedgehog.jpeg";
}

function Bunny(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "A brown bunny in the grass.";
  this.image = "bunny.jpeg";
}


const animal = [Bird, Hedgehog, Bunny];
const names = ["Jimothy","Penelope","Chip"];

function generateRandomIndex(maxIndex) {
  const randomIndex = Math.floor(Math.random()*maxIndex);
  console.log(randomIndex);
}

function generateRandomName() {
  const randomNameIdx = generateRandomIndex(3);
  console.log(randomNameIdx + " " + names[randomNameIdx]);
}

function generateRandomAge() {
  const randomIndex = generateRandomIndex(7);
  this.name = names[randomIndex];
}

function generateRandomAnimal() {
  const randomIdx = generateRandomIndex(3);
  this.animal = animal[randomIdx];
}