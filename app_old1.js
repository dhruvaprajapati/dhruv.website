const os = require('os');
const notes = require('./notes');
const _ = require('lodash');
const fs = require('fs');

fs.appendFile('test.txt', '\nHellow world');

console.log(`Hello there`, os.userInfo().username, notes.age);
console.log(notes.add(1,22));

console.log(_.isString(notes.add(1,22)));
console.log(_.isString('Dhruv'));
console.log(_.isString(true));

console.log(_.uniq([5,5,5,5,2,2,2,2,2,2,2,3]));
