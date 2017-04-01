const Discord = require('discord.js');
const commando = require('discord.js-commando');
const bot = new commando.Client();
const sql = require('sqlite');
bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('upvote', 'Upvote');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

sql.open('./score.sqlite');
sql.open('./karma.sqlite');
const prefix = '.';





bot.on('messageReactionAdd',(messageReaction) =>{
	
	if (messageReaction.emoji.id == '296219856829808641'){
		console.log(messageReaction.message.author.id)
		//var message_id = messageReaction.MessageID; 
		sql.get(`SELECT * FROM karma WHERE userId ='${messageReaction.message.author.id}'`).then(row => {
			if (!row) {
				sql.run('INSERT INTO karma (userId, karma) VALUES (?, ?)', [messageReaction.message.author.id, 1]);
			} else {
				sql.run(`UPDATE karma SET karma= ${row.karma + 1} WHERE userId = ${messageReaction.message.author.id}`);
			} 
		}).catch(() => {
			console.error;
			sql.run('CREATE TABLE IF NOT EXISTS karma (userId TEXT, karma INTEGER)').then (() => {
				sql.run('INSERT INTO karma (userId, karma) VALUES (?, ?)', [messageReaction.message.author.id, 1, 0]);
			});
		})
	};	
});

bot.on('message',(message) => {

	

	
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
	} else */
	if (message.content.startsWith(prefix + 'karma')){
		sql.get(`SELECT * FROM karma WHERE userId = '${message.author.id}'`).then(row =>{
			if (!row) return message.reply("You have no karma yet");
			message.reply(`you currently have ${row.karma} karma`);
		});
	}
});
bot.login('Mjk3MDE2NjI0MTIzMzQ2OTU1.C76qYQ.SQWpFlOBDSKZ3P3dfYg7pVumzg8');
//client ID = 297016624123346955