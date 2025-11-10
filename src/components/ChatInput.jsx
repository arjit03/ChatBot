import { useState } from 'react';
import { getMsgTime } from '../utils/getMsgTime';
import spinning from '../assets/loading-spinner.gif';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ intial_value, update }) {

    const [isLoading, updateLoading] = useState(false);
    const [inputText, setInputText] = useState('');
    function Text(e) {
        setInputText(e.target.value);
    }

    async function sendMessage() {
        if (isLoading || inputText.trim() === '') {
            return;
        }
        const newMsg = [...intial_value, {
            message: inputText,
            sender: "user",
            id: crypto.randomUUID(),
            time: getMsgTime()

        }];
        update(newMsg);
        setInputText('');

        updateLoading(true);
        update([...newMsg, {
            message: <img src={spinning} className="gif " />,
            sender: "robot",
            id: crypto.randomUUID(),
            time: ''

        }])
        const response = await Chatbot.getResponseAsync(inputText);
        update([...newMsg, {
            message: response,
            sender: "robot",
            id: crypto.randomUUID(),
            time: getMsgTime()
        }])
        updateLoading(false);
    }
    function enter(e) {
        e.key === 'Enter' && sendMessage();
        e.key === 'Escape' && setInputText('');
    }
    function clear() {
        update([]);
    }
    return (
        <div className="chatContainer">
            <input onChange={Text} value={inputText} className="inp"
                type="text" size="30" placeholder="Ask something..." onKeyDown={enter} disabled={isLoading}
            />
            <button onClick={sendMessage} className="sub">
                Search
            </button>
            <button onClick={clear} className="clear" >
                Clear
            </button>
        </div>
    );
}