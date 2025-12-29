console.log("Script connected successfully!");

const chatButton = document.getElementById('chat-icon');
const chatWindow = document.getElementById('chat-box');
const closeChat = document.getElementById('close-chat');
const sendButton = document.getElementById('send-btn');
const inputField = document.getElementById('user-input');
const chatArea = document.getElementById('chat-body');

if (chatButton) {
    chatButton.addEventListener('click', function() {
        if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
            chatWindow.style.display = "block";
        } else {
            chatWindow.style.display = "none";
        }
    });
}
if (closeChat) {
    closeChat.addEventListener('click', function() {
        chatWindow.style.display = "none";
    });
}


function sendMessage() {
    const text = inputField.value;
    if (text.trim() === "") return;

    addMessageToChat(text, 'user-message');
    inputField.value = "";

    setTimeout(function() {
        const botReply = getBotReply(text);
        addMessageToChat(botReply, 'bot-message');
    }, 500);
}

if (sendButton) sendButton.addEventListener('click', sendMessage);
if (inputField) {
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') sendMessage();
    });
}

function addMessageToChat(message, className) {
    const div = document.createElement('div');
    div.classList.add(className);
    div.innerText = message;
    chatArea.appendChild(div);
    chatArea.scrollTop = chatArea.scrollHeight;
}


function getBotReply(msg) {
    let text = msg.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Hello! How can I help you today?";
    } 
    else if (text.includes("book") || text.includes("appointment")) {
        return "Please click the 'Book Appointment' button in the menu.";
    }
    else if (text.includes("emergency")) {
        return "Call 108 immediately for an ambulance!";
    }
    else if (text.includes("address") || text.includes("location") || text.includes("where")) {
        return "We are at Main Square, Pune.";
    }
    else if (text.includes("time") || text.includes("open") || text.includes("timings")) {
        return "We are open 24/7.";
    }
    else {
        return "I didn't understand. Please call us at +91-98765-43210.";
    }
}

window.handleOption = function(option) {
    let msg = "";

    if (option === 'book') msg = "I want to book an appointment";
    if (option === 'emergency') msg = "It is an emergency!";
    
    if (option === 'address') msg = "What is the address?"; 
    
    if (option === 'Time') msg = "What is the opening time?";

    addMessageToChat(msg, 'user-message');

    setTimeout(function() {
        const reply = getBotReply(msg);
        addMessageToChat(reply, 'bot-message');
    }, 500);
}
const modal = document.getElementById('appointment-modal');
const closeX = modal.querySelector('.close-modal');
const allBookBtns = document.querySelectorAll('.open-modal-btn');

if (modal) {
    allBookBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = "block";
        });
    });

    if (closeX) {
        closeX.addEventListener('click', function() {
            modal.style.display = "none";
        });
    }

    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    const form = modal.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you! Your appointment request is sent. We will call you soon.");
            modal.style.display = "none";
        });
    }
}

const docCard = document.getElementById('card-doctor');
const docModal = document.getElementById('modal-doctor');
const closeDoc = document.querySelector('.close-doc');

if (docCard) {
    docCard.addEventListener('click', function() { docModal.style.display = "block"; });
    closeDoc.addEventListener('click', function() { docModal.style.display = "none"; });
    window.addEventListener('click', function(e) { if (e.target == docModal) docModal.style.display = "none"; });
}
const emgCard = document.getElementById('card-emergency');
const emgModal = document.getElementById('modal-emergency');
const closeEmg = document.querySelector('.close-emg');

if (emgCard) {
    emgCard.addEventListener('click', function() { emgModal.style.display = "block"; });
    closeEmg.addEventListener('click', function() { emgModal.style.display = "none"; });
    window.addEventListener('click', function(e) { if (e.target == emgModal) emgModal.style.display = "none"; });
}

const hourCard = document.getElementById('card-hours');
const hourModal = document.getElementById('modal-hours');
const closeHour = document.querySelector('.close-hour');

if (hourCard) {
    hourCard.addEventListener('click', function() { hourModal.style.display = "block"; });
    closeHour.addEventListener('click', function() { hourModal.style.display = "none"; });
    window.addEventListener('click', function(e) { if (e.target == hourModal) hourModal.style.display = "none"; });
}
const loginModal = document.getElementById('login-modal');
const closeLogin = document.querySelector('.close-login');
const loginBtns = document.querySelectorAll('.open-login-btn');

if (loginModal) {
    loginBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = "block";
        });
    });

    if (closeLogin) {
        closeLogin.addEventListener('click', function() {
            loginModal.style.display = "none";
        });
    }

    window.addEventListener('click', function(e) {
        if (e.target == loginModal) {
            loginModal.style.display = "none";
        }
    });

    const loginForm = loginModal.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Login Successful! Welcome back.");
            loginModal.style.display = "none";
        });
    }
}