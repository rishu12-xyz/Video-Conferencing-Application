
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

function Room() {
  const { roomId } = useParams();
  const socketRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    socketRef.current = io('/');

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    });

    socketRef.current.emit('join-room', { roomId, userId: socketRef.current.id });

    return () => socketRef.current.disconnect();
  }, [roomId]);

  return (
    <div>
      <h2>Room: {roomId}</h2>
      <video ref={videoRef} autoPlay muted style={{ width: "400px" }} />
    </div>
  );
}

export default Room;
