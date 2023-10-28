import { useEffect, useRef, useState } from 'react';
import TextEditor from '../components/TextEditor/TextEditor';

const App = () => {
  const wsRef = useRef<WebSocket | null>(null);
  const [markup, setMarkup] = useState('');

  useEffect(() => {
    // Create a WebSocket connection
    wsRef.current = new WebSocket('ws://localhost:3333');

    // Events
    wsRef.current.onopen = () => {
      console.log('Connected to the WebSocket');
    };

    wsRef.current.onmessage = (event) => {
      console.log(`Received: ${event.data}`);
      setMarkup(JSON.parse(event.data));
    };

    wsRef.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Don't forget to clean up
    return () => {
      wsRef.current?.close();
    };
  }, []);

  const click = () => {
    console.log(wsRef.current);
    if (wsRef.current) {
      console.log('send');

      wsRef.current.send('Hello from client');
    }
  };

  return (
    <div>
      <button onClick={click}>Send Message</button>
      <h1>WebSocket Test</h1>
      <TextEditor code={markup} />
    </div>
  );
};

export default App;
