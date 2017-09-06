const discord = require('discord.js');
const bot = new discord.Client();
const prefix = '!';
var config = require("./config.json");


//set nickname and presence
bot.on('ready', () => {
	bot.user.setUsername('EmiliaBot')
	bot.user.setPresence({ game: { name: 'with Hito-chan', type: 0 } });
}); 






bot.on('message',(message) => {
	if(!message.author.bot){
		if (message.content.includes("best") && message.content.includes("waifu")){
			message.reply('__**Emilia**__ is best waifu!')
		}
		if (message.content.startsWith(prefix + "dailyreminder")){
			message.reply('http://i.imgur.com/3Qw331q.png')
		}
		if (message.content.startsWith(prefix + "no")){
			message.reply('https://imgur.com/9CttBYT')
		}
		if (message.content.startsWith(prefix + "sagireee")){
			message.reply('https://imgur.com/6eoGHpP')
		}
		if (message.content.startsWith(prefix + "emote")){
			var emojiName = message.content.substr(message.content.indexOf(":") +1)
			emojiName = emojiName.substr(emojiName.indexOf(':') + 1); 
			emojiName = emojiName.substr(0, emojiName.indexOf('>')); 
			message.channel.send('', {
				file: `https://cdn.discordapp.com/emojis/${emojiName}.png`
			});
			message.delete();

		}
		

	/*var emojiName = msg.content.substr(msg.content.indexOf(':') + 1);
  emojiName = emojiName.substr(emojiName.indexOf(':') + 1); 
  emojiName = emojiName.substr(0, emojiName.indexOf('>')); 
  msg.channel.send('', {
    file: `https://cdn.discordapp.com/emojis/${emojiName}.png`
});*/
}
});

bot.on('message',(message) => {


	function autoreply(){
		if(!message.author.bot && message.author != bot.users.get("187512116205453312")){
			if (message.content.startsWith("Bryan") || message.content.startsWith("bryan") || message.isMemberMentioned(bot.users.get("187512116205453312")) ){
				bryan = bot.users.get("187512116205453312")
				var timeSent = message.createdAt.toString()
				var shortTimeSent = timeSent.substring(0,25)
				if (bryan.presence.status == "idle" || bryan.presence.status =="offline"){
					message.reply('Hitotose is currently away, message was sent to him as a PM!')
					bryan.send("------------AWAY MENTION------------" + "\nMessage: '" + message.content + "' \nFrom: " + message.author + "(" + message.guild + ")\nTime: " + shortTimeSent) 
				}

			}

		}
	}

	function mentioned(){
		if(!message.author.bot){
			if(message.author!=bot.users.get("187512116205453312"))
				if(!message.content.startsWith("Bryan") && !message.content.startsWith("bryan")){
					if (message.content.includes("Bryan") || message.content.includes("bryan") ||message.content.includes("hitotose") || message.content.includes("Hitotose")){
						bryan = bot.users.get("187512116205453312")
						var timeSent = message.createdAt.toString()
						var shortTimeSent = timeSent.substring(0,25)
						bryan.send("------------NEW MENTION------------" + "\nMessage: '" + message.content + "' \nFrom: " + message.author + "(" + message.guild + ")\nTime: " + shortTimeSent) 
					}

				}

			}

		}

		autoreply()
		mentioned()

		if (message.author.bot) return;
		if (message.channel.type !== 'text') return;


		if (!message.content.startsWith(prefix)) return;


		if (message.content.startsWith(prefix + '4d')){
			var val = Math.floor(1000 + Math.random() * 9000);
			message.reply("Emilia has blessed you with this number: __**" + val + "**__!");
			;
		}
	});


bot.login(config.admin.token);
