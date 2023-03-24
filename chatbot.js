let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerElement = document.getElementById('chatContainer');
let userInputElement = document.getElementById('userInput');
let sendMsgButton = document.getElementById('sendMsgBtn');


function getReplyFromChatbot() {

    let noOfChatbotMsgs = chatbotMsgList.length;
    let randomMsgFromchatBot = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];


    let chatfromContainer = document.createElement('div');
    chatfromContainer.classList.add('msg-from-chatbot-container');
    chatContainerElement.appendChild(chatfromContainer);

    let spanFromMsg = document.createElement('span');
    spanFromMsg.textContent = randomMsgFromchatBot;
    spanFromMsg.classList.add('msg-from-chatbot');
    chatfromContainer.appendChild(spanFromMsg);


}


sendMsgButton.onclick = function() {
    let userInput = userInputElement.value;

    let chatSendContainer = document.createElement('div');
    chatSendContainer.classList.add('msg-to-chatbot-container');
    chatContainerElement.appendChild(chatSendContainer);

    let spanSendMsg = document.createElement('span');
    spanSendMsg.classList.add('msg-to-chatbot');
    chatSendContainer.appendChild(spanSendMsg);

    spanSendMsg.textContent = userInput;

    userInputElement.value = "";

    getReplyFromChatbot();
};
