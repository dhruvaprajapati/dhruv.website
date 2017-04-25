const fs = require('fs');
let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
};

let saveNote = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body,
  };

  let duplicateNotes = notes.filter((note) => note.title === title);
  /*let duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });*/
  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNote(notes);
    return note;
  } else {
    console.log('Title already found, Please use another title');
  }
};

let getAll = () => {
  return fetchNotes();
};
let getNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title ===title);
  return filteredNotes[0];

};
let removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title!==title);
  saveNote(filteredNotes);
  return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
  console.log('------------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getNote,
  removeNote,
  getAll,
  logNote
};