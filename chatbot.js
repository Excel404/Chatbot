let inputMessage = document.getElementById('inputBox');
function MessageBox(){
    let chatArea = document.getElementById('chatArea');
    
    this.createMessage = (message, bgcolor,position)=>{
        this.message = message;
        this.bgcolor = bgcolor;
        
        if(inputMessage.value != ""){
           let Box = document.createElement('div');
            Box.setAttribute('id', 'box');
            Box.innerHTML = message;
            Box.style.backgroundColor = bgcolor;
            Box.style.float = position;
            let space = document.createElement('span')
            space.innerHTML = "<br>"
            chatArea.appendChild(Box);
            chatArea.appendChild(space);
            chatArea.appendChild(space);
            console.log(inputMessage.value.toLowerCase());
        }

    }
    let myInput = ["Hello", "How are you doing", "Who created you?", "Ok, that's good"];
    let replies = ["Hi, I'm Jarvis", "I'm fine", "Excel","Goodbye"];
    let hiddenDiv = document.getElementById("moreDisplay");
    this.addWords = ()=>{
      hiddenDiv.removeAttribute("hidden");
    }
    this.close = ()=>{
      hiddenDiv.hidden= true;
      console.log("working");
    }
    this.checker = ()=>{
        
        for (var i = 0; i< myInput.length ;i++){
            if(inputMessage.value != ""){
                if (myInput[i].toLowerCase().includes(inputMessage.value)){
                    this.createMessage(replies[i],'white', 'left');
                }
            }

        }
    }


}
let user = new MessageBox();
let Jarvis = new MessageBox();
function execute(){
    console.log('check');
    user.createMessage(inputMessage.value,"lightgreen","right");
    Jarvis.checker()
}

console.log(user);
