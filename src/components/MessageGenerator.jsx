import { useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { WelcomeMsg } from './WelcomeMsg';
import './MessageGenerator.css';

export function MessageGenerator({ intial_value }) {
    const msgContainerElem = useRef(null);


    //scroll feature
    useEffect(() => {
        const element = msgContainerElem.current;
        if (element) {
            element.scrollTop = element.scrollHeight;
        }
    }, [intial_value])


    return (
        <div className='msgContainer' ref={msgContainerElem}>
            {intial_value.length === 0 ? <WelcomeMsg /> : (
                intial_value.map((msg) => {
                    return (
                        <div key={msg.id} className="Chats">
                            <ChatMessage message={msg.message} sender={msg.sender} key={msg.id} time={msg.time} />

                        </div>
                    )
                }))}
        </div>
    )
}