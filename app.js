console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

const user = os.userInfo();
console.log('Result:', notes.add(5, 4));

console.log(_.isString('Jesus'));
console.log(_.isString(user));
console.log(_.isString(30));

const filteredArray = _.uniq(['Jesus', 1, 'Jesus', 1, 2, 3, 4]);
console.log(filteredArray);

// fs.appendFileSync('greetings.txt', `Hello ${user.username}, you are ${notes.age}!`);