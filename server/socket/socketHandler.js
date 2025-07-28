
function socketHandler(io) {
  io.on('connection', socket => {
    socket.on('join-room', ({ roomId, userId }) => {
      socket.join(roomId);
      socket.to(roomId).emit('user-connected', userId);

      socket.on('disconnect', () => {
        socket.to(roomId).emit('user-disconnected', userId);
      });

      socket.on('send-message', message => {
        socket.to(roomId).emit('receive-message', message);
      });
    });
  });
}

module.exports = socketHandler;
