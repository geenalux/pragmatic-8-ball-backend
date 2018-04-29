const db = require('../db');
const LiveQuestion = db.models.LiveQuestion;
const LiveResponse = db.models.LiveResponse;

module.exports = io => {

  io.on('connection', socket => {

    console.log(socket.id, ' has made a persistent connection to the server!');

    socket.on('new-liveQuestion', liveQuestion => {
      socket.broadcast.emit('new-liveQuestion', liveQuestion);
    });

    socket.on('new-liveResponse', liveResponse => {
      socket.broadcast.emit('new-liveResponse', liveResponse);
    });

  });

};
