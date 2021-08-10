let inputMessage = document.getElementById('inputBox');

function MessageBox(){
    let chatArea = document.getElementById('chatArea');
    
    this.createMessage = (message, bgcolor,position, alt)=>{
        this.message = message;
        this.bgcolor = bgcolor;
        
        if(inputMessage.value != ""){
           let Box = document.createElement('div');
            Box.setAttribute('id', 'box');
            Box.innerHTML = message;
            Box.style.backgroundColor = bgcolor;
            Box.style.float = position;
            Box.style.clear = alt;
            
            let space = document.createElement('p')
            space.innerHTML = "<br>"
            chatArea.appendChild(Box);
            chatArea.appendChild(space);
            
        }
        

    }
    let myInput = ["hello", "how are you doing", "who created you?", "ok, that's good"];
    let replies = ["Hi, I'm Jarvis", "I'm fine", "Excel","Goodbye"];
    let hiddenDiv = document.getElementById("moreDisplay");
    this.addWords = ()=>{
      hiddenDiv.classList.toggle("show");
      let Input = document.getElementById("Input");
      let Reply = document.getElementById("reply")
      
      this.addInput = ()=>{
        myInput.push(Input.value);
      }
      this.addReply = () =>{
        replies.push(Reply.value);
      }
      
    }
    this.checker = ()=>{
      if(inputMessage.value != ""){
        for (var i = 0; i< myInput.length ;i++){
          if (inputMessage.value.toLowerCase().includes(myInput[i])){
             this.createMessage(replies[i],'white', 'left', 'right');
           }
        }
        let url = inputMessage.value.toLowerCase().split(" ");
        if(inputMessage.value.toLowerCase().includes(`jarvis open`)){
                  this.createMessage('Yes Boss, please wait...','white','left','right');
                  
                  setTimeout(function() {
                    window.open(`https://${url[url.length-1]}`, "_blank");
                  }, 5000);
                }
        if(inputMessage.value.toLowerCase().includes(`jarvis call`)){
              this.createMessage('Yes Boss, please wait...','white','left', 'right');
                  
                  setTimeout(function() {
                    window.open(`javascript: open('tel:${url[url.length-1]}', '_blank');void(0);`);
                  }, 5000);
            }
        if(inputMessage.value.toLowerCase().includes('jarvis mail')){
              this.createMessage('Yes Boss, please wait...','white','left','right');
                  
                  setTimeout(function() {
                    window.open(`javascript: open('mailto:${url[url.length-1]}', '_blank');void(0);`);
                  }, 5000);
          }
      }
       inputMessage.value = "";
    }
}
let user = new MessageBox();
let Jarvis = new MessageBox();
function execute(){
  
  user.createMessage(inputMessage.value,"lightgreen",'right', 'left');
  Jarvis.checker()
}
