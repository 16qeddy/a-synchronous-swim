const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

let random = function(){
  let result = Math.floor(Math.random()*4);
  return result;
}
console.log(random());

let directions = ['up', 'down', 'left', 'right']
module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  res.end(directions[random()]);
  next(); // invoke next() at the end of a request to help with testing!
};
