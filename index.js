const discord = require('discord.js');
//const commando = require('discord.js-commando');
const bot = new discord.Client();
//const sql = require('sqlite');
/*bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('upvote', 'Upvote');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
*/
//sql.open('./score.sqlite');
//sql.open('./karma.sqlite');
const prefix = '.';
var config = require("./config.json");


bot.on('ready', () => {
	bot.user.setUsername('EmiliaBot')
	//console.log("test1")
	bot.user.setPresence({ game: { name: 'with Hitotose', type: 0 } });
	//console.log("test2")
}); 



/**bot.on('messageReactionAdd',(messageReaction) =>{
	console.log(messageReaction.users.author);
	console.log(messageReaction.message.author)
	if (messageReaction.emoji.id == '296219856829808641' ){
		if (messageReaction.users !== messageReaction.message.author){
			sql.get(`SELECT * FROM karma WHERE userId ='${messageReaction.message.author.id}'`).then(row => {
				if (!row) {
					sql.run('INSERT INTO karma (userId, karma) VALUES (?, ?)', [messageReaction.message.author.id, 1]);
				} else {
					sql.run(`UPDATE karma SET karma= ${row.karma + 1} WHERE userId = ${messageReaction.message.author.id}`);
				} 
			}).catch(() => {
				console.error;
				sql.run('CREATE TABLE IF NOT EXISTS karma (userId TEXT, karma INTEGER)').then (() => {f4eac6
					sql.run('INSERT INTO karma (userId, karma) VALUES (?, ?)', [messageReaction.message.author.id, 1, 0]);
				});
			})
		}
	};	
}); **/



bot.on('message',(message) => {
    if(!message.author.bot){
        if (message.content.includes("best") && message.content.includes("waifu")){
            message.reply('__**Emilia**__ is best waifu!')
        }
    }
});

bot.on('message',(message) => {



	

	function autoreply(){
		if(!message.author.bot && message.author != bot.users.get("187512116205453312")){
			//console.log(message.author.id)
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

	   //max id: 152424821924298752
	   autoreply()
	   mentioned()










	   if (message.author.bot) return;
	   if (message.channel.type !== 'text') return;
	/*sql.get(`SELECT * FROM scores WHERE userId ='${message.author.id}'`).then(row => {
		if (!row) {
			sql.run('INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)', [message.author.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
			if (curLevel > row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
				message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
			}
			sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
		}
	}).catch(() => {
		console.error;
		sql.run('CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)').then(() => {
			sql.run('INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)', [message.author.id, 1, 0]);
		});
	}); */

	if (!message.content.startsWith(prefix)) return;

	/*if (message.content.startsWith(prefix + 'level')) {
		sql.get(`SELECT * FROM scores WHERE userId ='${message.author.id}'`).then(row => {
			if (!row) return message.reply('Your current level is 0');
			message.reply(`Your current level is ${row.level}`);
		});
	} else

	if (message.content.startsWith(prefix + 'points')) {
		sql.get(`SELECT * FROM scores WHERE userId ='${message.author.id}'`).then(row => {
			if (!row) return message.reply('sadly you do not have any points yet!');
			message.reply(`you currently have ${row.points} points!`);
		});
	} else 
	if (message.content.startsWith(prefix + 'karma')){
		sql.get(`SELECT * FROM karma WHERE userId = '${message.author.id}'`).then(row =>{
			if (!row) return message.reply("You have no karma yet");
			message.reply(`you currently have ${row.karma} karma`);
		});
	}*/

	if (message.content.startsWith(prefix + '4d')){
		var val = Math.floor(1000 + Math.random() * 9000);
		message.reply("Emilia has blessed you with this number: __**" + val + "**__!");
		;
	}
});


bot.login(config.admin.token);
//client ID = 297016624123346955