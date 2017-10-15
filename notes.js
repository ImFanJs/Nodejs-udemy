console.log('starting notes.js');

const fs = require('fs');

let notes = [];

const addNote = (title, body) => {
    const note = {
        title,
        body
    };
    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch(e) {
        
    }

    const duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

const getAll = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
        console.log(notes);
    } catch(e) {
        console.log('No notes found')
    }
};

const readNote = (id) => {
    console.log('Reading note with id ', id);
};

const removeNote = (id) => {
    console.log('Removing note with id ', id);
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
}
