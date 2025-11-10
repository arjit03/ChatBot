import { useEffect } from "react";
import { Chatbot } from "supersimpledev";

// Global fallback message
Chatbot.unsuccessfulResponse = "Sorry, I didn't quite understand that.";

// --- Full FAQ dataset ---
const faqDataset = [

    // Greetings
    { question: 'hi', answer: 'Hello there! How can I help you today?' },
    { question: 'hello', answer: 'Hi! How’s it going?' },
    { question: 'hey', answer: 'Hey! What brings you here today?' },
    { question: 'good morning', answer: 'Good morning ☀️ Hope you have a great start to your day!' },
    { question: 'good afternoon', answer: 'Good afternoon 🌞 How’s your day going?' },
    { question: 'good evening', answer: 'Good evening 🌇 How was your day?' },
    { question: 'good night', answer: 'Good night 🌙 Sleep well and recharge!' },

    // Farewells
    { question: 'bye', answer: 'Bye! Thanks for chatting with me 👋' },
    { question: 'goodbye', answer: 'Goodbye! Hope to see you again soon.' },
    { question: 'see you later', answer: 'See you soon!' },
    { question: 'take care', answer: 'Take care and stay safe!' },
    { question: 'see ya', answer: 'See ya! 😊' },

    // Gratitude
    { question: 'thank you', answer: 'You’re welcome! 😊' },
    { question: 'thanks', answer: 'Anytime!' },
    { question: 'appreciate it', answer: 'Glad I could help!' },
    { question: 'thanks a lot', answer: 'Happy to assist! 🙌' },

    // About chatbot and YOU
    { question: 'who are you', answer: 'I’m your friendly chatbot assistant 🤖 created by Arjit Sasan.' },
    { question: 'what is your name', answer: 'I’m called Supersimple Bot — built by Arjit Sasan!' },
    { question: 'who made you', answer: 'I was created by Arjit Sasan 💻 — a passionate MERN stack developer from Roorkee, currently pursuing MCA at Quantum University.' },
    { question: 'who created you', answer: 'My creator is Arjit Sasan 👨‍💻, a skilled MERN stack developer from Uttarakhand, India.' },
    { question: 'tell me about your creator', answer: 'My creator, Arjit Sasan, is a talented MERN stack developer from Roorkee. He loves building creative and user-friendly web projects with MongoDB, Express, React, and Node.js!' },
    { question: 'who is arjit sasan', answer: 'Arjit Sasan is a web developer from Roorkee, Uttarakhand, India. He specializes in the MERN stack (MongoDB, Express, React, Node.js).' },
    { question: 'where are you from', answer: 'I live in the cloud ☁️ — but my creator Arjit Sasan is from Roorkee, Uttarakhand, India.' },
    { question: 'are you human', answer: 'Not quite — but my creator Arjit made me pretty good at chatting like one 😉' },
    {
        question: 'what can you do',
        answer: 'I can chat naturally, tell jokes, give advice, share motivational quotes, generate random numbers, flip coins, roll dice, and answer questions about tech, life, and my creator Arjit Sasan. Basically, I’m here to keep you informed and entertained 🤖✨'
    },
    {
        question: 'what do you do',
        answer: 'I answer questions, share facts, motivate you, tell jokes, and chat with you — all thanks to Arjit Sasan’s coding magic 🔥'
    },

    // Feelings
    { question: 'how are you', answer: 'I’m doing great! How about you?' },
    { question: "i'm bored", answer: 'Want me to tell a joke or a fun fact?' },
    { question: "i'm sad", answer: "I'm here for you 💙 Want to talk about it?" },
    { question: "i'm happy", answer: "That’s awesome! Happiness looks great on you 😄" },
    { question: "i feel lonely", answer: "You’re not alone — I’m here to chat 🤗" },

    // Jokes & fun
    { question: 'tell me a joke', answer: 'Why did the web developer go broke? Because he used up all his cache 😆' },
    { question: 'another joke', answer: 'Parallel lines have so much in common. It’s a shame they’ll never meet.' },
    { question: 'make me laugh', answer: 'Why don’t skeletons fight each other? They don’t have the guts.' },
    { question: 'fun fact', answer: 'Did you know honey never spoils? Archaeologists found 3000-year-old honey still edible!' },
    { question: 'tell me something interesting', answer: 'Did you know? Octopuses have three hearts.' },

    // Motivation & advice
    { question: 'motivate me', answer: 'Believe in yourself — you’ve got this 💪' },
    { question: 'inspire me', answer: '“The secret of getting ahead is getting started.” – Mark Twain' },
    { question: 'give me advice', answer: 'Focus on progress, not perfection.' },
    { question: 'life advice', answer: 'Be kind, stay curious, and keep learning every day.' },
    { question: 'study tips', answer: 'Use the Pomodoro method: 25 minutes focus, 5 minutes break. Works wonders!' },
    { question: 'focus tips', answer: 'Eliminate distractions, take small steps, and celebrate tiny wins 🎯' },

    // Random/dynamic commands
    { question: 'random number', answer: () => Math.floor(Math.random() * 100) + 1 },
    { question: 'flip a coin', answer: () => (Math.random() > 0.5 ? 'Heads 🪙' : 'Tails 🪙') },
    { question: 'roll a dice', answer: () => Math.floor(Math.random() * 6) + 1 },
    { question: 'time', answer: () => new Date().toLocaleTimeString() },
    { question: 'date', answer: () => new Date().toLocaleDateString() },

    // Knowledge
    { question: 'what is ai', answer: 'AI stands for Artificial Intelligence — teaching computers to think and learn 🧠' },
    { question: 'what is machine learning', answer: 'Machine Learning is a branch of AI that enables computers to learn from data 📊' },
    { question: 'what is html', answer: 'HTML stands for HyperText Markup Language — the structure of web pages 🌐' },
    { question: 'what is css', answer: 'CSS stands for Cascading Style Sheets — it makes web pages look stylish 🎨' },
    { question: 'what is javascript', answer: 'JavaScript adds interactivity to web pages ⚡' },
    { question: 'what is react', answer: 'React is a JavaScript library for building dynamic user interfaces ⚛️' },
    { question: 'what is python', answer: 'Python is a beginner-friendly programming language 🐍' },
    { question: 'what is nodejs', answer: 'Node.js allows JavaScript to run on the server 🖥️' },
    { question: 'what is database', answer: 'A database stores and manages data efficiently 💾' },

    // Weather & small talk
    { question: "what's the weather", answer: "I can’t fetch live weather, but I hope it’s sunny ☀️" },
    { question: 'is it raining', answer: 'I’m not sure, but don’t forget your umbrella ☔' },
    { question: 'is it hot', answer: 'Stay cool and hydrated 💧' },
    { question: 'is it cold', answer: 'Stay warm and cozy 🧣' },
    { question: 'what are you doing', answer: 'Just chatting with you 😄' },

    // Quotes
    { question: 'give me a quote', answer: '“The best way to predict the future is to invent it.” – Alan Kay' },
    { question: 'quote of the day', answer: '“Don’t watch the clock; do what it does. Keep going.” ⏰' },
    { question: 'inspirational quote', answer: '“Success is the sum of small efforts, repeated day in and day out.” – R. Collier' },

    // Productivity
    { question: 'how to be productive', answer: 'Plan your day, avoid multitasking, and take short breaks 🧠' },
    { question: 'work tips', answer: 'Prioritize your most important tasks first 🔥' },
    { question: 'how to stop procrastinating', answer: 'Start small — action beats motivation every time!' },

    // Tech small talk
    { question: 'who is elon musk', answer: 'Elon Musk is the CEO of Tesla and SpaceX 🚀' },
    { question: 'what is google', answer: 'Google is a search engine that helps you find anything 🌍' },
    { question: 'what is chatgpt', answer: 'ChatGPT is an AI model developed by OpenAI 🤖' },
    { question: 'what is openai', answer: 'OpenAI is an AI research company that develops advanced AI systems.' },

    // Default fallback
    { question: 'default', answer: 'I’m not sure I understand that 🤔 Could you rephrase?' }
];

// --- Tokenize & compare ---
function tokenize(text = '') {
    return text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
}

function getSimilarity(a = '', b = '') {
    const A = tokenize(a);
    const B = tokenize(b);
    if (!A.length || !B.length) return 0;
    const intersection = A.filter(w => B.includes(w)).length;
    const union = new Set([...A, ...B]).size || 1;
    return intersection / union;
}

function getBestMatch(query) {
    let best = null, bestScore = 0;
    for (const item of faqDataset) {
        const score = getSimilarity(query, item.question);
        if (score > bestScore) { best = item; bestScore = score; }
    }
    return bestScore > 0.25 && best ?
        (typeof best.answer === 'function' ? best.answer() : best.answer) : null;
}

// --- Registering chatbot responses ---
export function AddResponses() {
    useEffect(() => {
        const responses = {};

        for (const item of faqDataset) {
            const key = (item.question || '').toLowerCase().trim();
            if (!(key in responses)) responses[key] = item.answer;
        }

        responses['default'] = (query) => {
            const exact = responses[query?.toLowerCase()?.trim()];
            if (exact) return typeof exact === 'function' ? exact() : exact;
            const best = getBestMatch(query);
            return best ?? Chatbot.unsuccessfulResponse;
        };

        Chatbot.addResponses(responses);
        console.log('Chatbot responses loaded:', Object.keys(responses).length);
    }, []);

    return null;
}

export default AddResponses;
