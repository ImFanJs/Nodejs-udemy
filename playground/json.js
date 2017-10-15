const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'This is my note!'
}
console.log(originalNote);
let originalNoteString = JSON.stringify(originalNote);
console.log(typeof originalNoteString);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);