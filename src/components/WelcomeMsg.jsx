
import './WelcomeMsg.css';

export function WelcomeMsg() {
    return (
        <div className="welcome-container">
            <h1 className="welcomemsg">
                <span className="gradient-text">ChatRex</span><br />
                <span className="tagline gradient-silver">Smart Conversations, Simplified.</span>
            </h1>
        </div>
    );
}

export default WelcomeMsg;

