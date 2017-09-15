const discord = require('discord.js');
const bot = new discord.Client();
const prefix = '!';
var config = require("./config.json");






//set nickname and presence
bot.on('ready', () => {
	bot.user.setUsername('Emilia')
	!stbot.user.setPresence({ game: { name: 'with Hito-chan 💕', type: 0 } });
}); 



bot.on('message',(message) => {
	if(!message.author.bot){
		if (message.content.includes("best") && message.content.includes("waifu")){
			message.channel.send('__**Emilia**__ is best waifu!')
		}
		if (message.content.startsWith(prefix + "dailyreminder")){
			message.channel.send('http://i.imgur.com/3Qw331q.png')
			message.delete();

		}
		if (message.content.startsWith(prefix + "no")){
			message.channel.send('https://imgur.com/9CttBYT')
			message.delete();

		}
		if (message.content.startsWith(prefix + "sagireee")){
			message.channel.send('https://imgur.com/6eoGHpP')
			message.delete();

		}
		if (message.content.startsWith(prefix + "happydance")){
			message.channel.send('https://cdn.discordapp.com/attachments/280009528966250498/355924324479139840/tumblr_mgsfx75YKo1rf785do1_500.gif')
			message.delete();

		}

		if (message.content.startsWith(prefix + "woop1")){
			message.channel.send('https://cdn.discordapp.com/attachments/280009528966250498/355922606735491073/rika.gif')
			message.delete();

		}
		if (message.content.startsWith(prefix + "woop2")){
			message.channel.send('https://cdn.discordapp.com/attachments/280009528966250498/355922579351142400/Us7qZ.gif')

			message.delete();

		}
		if (message.content.startsWith(prefix + "emote")){
			var emojiName = message.content.substr(message.content.indexOf(":") +1)
			emojiName = emojiName.substr(emojiName.indexOf(':') + 1); 
			emojiName = emojiName.substr(0, emojiName.indexOf('>')); 
			var author = message.author.username;
			message.channel.send(author + ": "+ '', {
				file: `https://cdn.discordapp.com/emojis/${emojiName}.png`
			});
			message.delete();

		}

		if(message.author==bot.users.get("187512116205453312") && message.content.startsWith(prefix + "status")){
			var status = message.content.toString()
			status = status.substring(7,status.length)
			console.log(status)
			bot.user.setPresence({ game: { name: status, type: 0 } });
			//message.delete();
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
