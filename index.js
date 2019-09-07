

const fs = require('fs')
const discord = require('discord.js');
const bot = new discord.Client();
const prefix = '!';
var config = require("./config.json");



//set nickname and presence
bot.on('ready', () => {
	bot.user.setUsername('ClawBot')
	bot.user.setPresence({game: { name: 'The Claw is Law.', type: 0}})

}); 




bot.on('message',(message) => {
	if(!message.author.bot){

		if(message.author==bot.users.get("187512116205453312") && message.content.startsWith(prefix + "status")){
			var status = message.content.toString()
			status = status.substring(7,status.length)
			console.log(status)
			bot.user.setPresence({ game: { name: status, type: 0 } });
			//message.delete();
		} 
		
		if(message.content.startsWith(prefix + "claw")){
			 fs.readFile('Output.txt', 'utf-8', (err, data) => { 
			    if (err) throw err; 
			    clawData = data; 
			    clawData++
			    message.channel.send( clawData + 'th cold claw(s) cracked open with the bois')
			    fs.writeFile('Output.txt', clawData, (err) =>{
				if (err) throw err;
			})

			   
			}) ;

		}

		if(message.content.includes(prefix + "totalclaw")){
			 fs.readFile('Output.txt', 'utf-8', (err, data) => { 
			    if (err) throw err; 
			    clawData = data; 
				message.channel.send('Total of ' + clawData + ' cold claw(s) cracked open with the bois')


			   
			}) ;

		}





}
});



bot.login(config.admin.token);
