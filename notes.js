console.log('starting notes.js');

const fs = require('fs');

let notes = [];

const fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    const note = {
        title,
        body
    };

    const notes = fetchNotes();

    const duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAll = () => {
    return fetchNotes();
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
