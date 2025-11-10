import { useEffect, useState } from 'react'; // named export. exporting a part of package or module
import { AddResponses } from './components/AddResponses';
import { MessageGenerator } from './components/MessageGenerator';
import { ChatInput } from './components/ChatInput';
import './App.css'

function App() {

  const [intial_value, update] = useState(() => {
    const saved = localStorage.getItem('messages');
    return saved ? JSON.parse(saved) : []
  });
  // saving the chatmessages to local storage until user clicks clear!
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(intial_value)) // saving chat messages to messages : { JSON FORMAT MESSAGES}
  }, [intial_value]);
  // Teaching the chatbot more reponses! using the predefined method in the librarys. loading it once when the component is created!
  AddResponses();

  return (
    <div className="appContainer">
      <MessageGenerator intial_value={intial_value} />
      <ChatInput intial_value={intial_value} update={update} />
    </div>
  );
}
export default App; // use this when exporting only 1 component and use export keyword before a component to export 1 or multiple from a file
// can have one default and multiple named export in a file. but not more than one
