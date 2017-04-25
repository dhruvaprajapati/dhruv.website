let square = x => x * x;
console.log(square(9));

let user = {
  name : 'Dhruv',
  // Below sayHi() don't work
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi, I am ${this.name} `);
  },
  // This will work
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi, I am ${this.name} `);
  }
};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);