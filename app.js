console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];
console.log('Command', command);

switch(command) {
    case 'add':
        var note = notes.addNote(argv.title, argv.body);
        if(note) {
            console.log('Note created!');
            console.log('---');
            console.log(`Title: ${note.title}`);
            console.log(`Body: ${note.body}`);
        } else {
            console.log('Title taken.');
        }
        break;
    case 'list':
        console.log(notes.getAll());
        break;
    case 'read':
        var noteToRead = notes.readNote(argv.title);
        if(noteToRead) {
            console.log('---');
            console.log(`Title: ${noteToRead.title}`);
            console.log(`Body: ${noteToRead.body}`);
        } else {
            console.log('Note not found.');
        }
        break;
    case 'remove':
        var noteRemoved = notes.removeNote(argv.title);
        var message = noteRemoved ? 'Note was removed' : 'Note not found';
        console.log(message);
        break;
    default:
        console.log('Not command found');
}