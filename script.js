async function sendMessage(){

let input = document.getElementById("userInput").value

let chatbox = document.getElementById("chatbox")

chatbox.innerHTML += `<div class="user">${input}</div>`

chatbox.innerHTML += `<div class="ai">Thinking...</div>`

const response = await fetch("/api/chat",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

message:input

})

})

const data = await response.json()

chatbox.innerHTML += `<div class="ai">${data.reply}</div>`

document.getElementById("userInput").value=""

}

function loginGoogle(){

alert("Google login coming soon")

}

function loginApple(){

alert("Apple login coming soon")

}
