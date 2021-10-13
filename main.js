function bird(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A brown bird.";
    this.image = "bird.jpeg";
  }


  function hedgehog(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A curled up hedgehog in a field of flowers.";
    this.image = "hedgehog.jpeg";
  }

  function bunny(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A brown bunny in the grass.";
    this.image = "bunny.jpeg";
  }


  const animal = [bird, hedgehog, bunny];
  const names = ["Jimothy","Trevor","Penelope","Chip"];

  function generateRandomIndex(maxIndex) {
    console.log(Math.floor(Math.random()*maxIndex);)
}