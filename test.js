

const discord = require('discord.js');
const bot = new discord.Client();
const prefix = '!';
var config = require("./config.json");

var testCount = 10



const fs = require('fs')
fs.writeFile('Output.txt', testCount, (err) =>{
	if (err) throw err;
})

//set nickname and presence
bot.on('ready', () => {
	bot.user.setUsername('ClawBot')
	bot.user.setPresence({game: { name: 'Claw is law', type: 0}})

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
			testCount++
			//message.channel.send('https://i.pinimg.com/originals/fa/10/c0/fa10c0a43a7357659a5fc151591ad85c.png')
			message.channel.send(testCount + 'th cold claw(s) cracked open with the bois')


		}

		if(message.content.includes(prefix + "totalclaw")){
			message.channel.send('Total of ' + testCount + ' cold claw(s) cracked open with the bois')


		}





}
});



bot.login(config.admin.token);
