const {bot,Client} = require('discord.js');
const client = new Client();

function notification(){
    setInterval(() =>{
        return true;
    },1800); 
}


client.on("ready", () =>{
console.log("ok");

client.on("message", message =>{
    if(message.content=="!*start"){
        setInterval(function(){
            message.channel.send(`Claim your honey gain shit now at: https://dashboard.honeygain.com`);

        }, 86400000)
    }
})
})
client.login("ODcyNDA4MTIwMzY0Nzg1NzU0.YQpbYA.SKw551Knm99sGbaXvnRD4thDbPw");