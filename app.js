console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];
console.log('Command', command);
console.log(argv);

switch(command) {
    case 'add':
        notes.addNote(argv.title, argv.body);
        break;
    case 'list':
        notes.getAll();
        break;
    case 'read':
        notes.readNote(argv.id);
        break;
    case 'remove':
        notes.removeNote(argv.id);
        break;
    default:
        console.log('Not command found');
}