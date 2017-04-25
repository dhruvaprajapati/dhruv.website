const _ = require('lodash');
const fs = require('fs');
const notes = require('./notes');
const yargs = require('yargs');

const titleOptions = {
  describe: 'Title of the note',
  demand: true,
  alias: 't'
};

const bodyOptions =  {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Get a note', {
    title: titleOptions
  })
  .command('remove', 'To remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if(note) {
    console.log('Note Added with title:');
    notes.logNote(note)
  } else {
    console.log('Note title already taken');
  }
} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => {
    notes.logNote(note);
  })
} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  let message = note? `Note found:` : 'Note not found';
  if (note) {
    console.log(message);
    notes.logNote(note);
  } else {
    console.log(message);
  }


} else if (command === 'remove') {
  let result = notes.removeNote(argv.title);
  let message = result? `Note removed: ${argv.title}` : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}


