//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
const circleCircumference = circle => 2 * Math.PI * circle.radius;

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  const keyValueArray = [];
  for (var key in obj) {
    if (key.length == 5) keyValueArray.push(key);
    if (obj[key].length == 5) keyValueArray.push(obj[key]);
  }
  return keyValueArray;
}

//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(numbers) {
  const result = [];
  for (let number = 0; number < numbers; number++) {
    result.push(function () {
      return number;
    });
  }
  return result;
}

//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return "Hello " + this.master;
  }
}
