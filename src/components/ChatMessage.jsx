import robot from '../assets/robot.jpg';
import user from '../assets/user.png';
import './ChatMessage.css';


export function ChatMessage({ message, sender, time }) {
    return (
        <>
            <div className={sender === 'robot' ? 'robot' : 'user'}>
                {sender === 'robot' && <img src={robot} />}
                <span className={sender === 'robot' ? 'rbtMsg' : 'usrMsg'}>
                    {message}
                    <span className='Time'>
                        Sent at {time}
                    </span>
                </span>
                {sender === 'user' && <img src={user} />}
            </div>

        </>
    )
}
