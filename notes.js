console.log('starting notes.js');

const addNote = (title, body) => {
    console.log('Note', title, body);
};

const getAll = () => {
    console.log('Listing all notes');
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
