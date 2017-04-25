const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body'
};
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);
let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log('Title:', note.title);



/*
let obj = {
  name: 'Dhruv'
};

let stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

console.log('calling reverse');

let personSting =  '{"name":"Dhruv", "age": 28}';

console.log(typeof personSting);
console.log(JSON.parse(personSting).name);*/
