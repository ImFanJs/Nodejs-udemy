console.log('starting notes.js');

var fs = require('fs');

var notes = [];

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var note = {
        title,
        body
    };
    var notes = fetchNotes();
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var readNote = (title) => {
    var notes = fetchNotes();
    var notesFiltered = notes.filter((note) => note.title === title);
    return notesFiltered[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var notesFiltered = notes.filter((note) => note.title !== title);
    saveNotes(notesFiltered);

    return notes.length !== notesFiltered.length;
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
}
