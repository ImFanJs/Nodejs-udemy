console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

const user = os.userInfo();
console.log('Result:', notes.add(5, 4));

// fs.appendFileSync('greetings.txt', `Hello ${user.username}, you are ${notes.age}!`);