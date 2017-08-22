var square = (x) => {
  var result = x * x;
  return result;
};

var square1 = (x) => x * x;
console.log(square(8));
console.log(square1(9));


var user = {
  name: 'Andrew',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHiAlt(1, 2, 3);
