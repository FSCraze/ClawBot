const commando = require('discord.js-commando');

class UpvoteCommand extends commando.Command {
	constructor(client){
		super(client, {
			name: 'upvote',
			group: 'upvote',
			memberName: 'upvote',
			description: 'Whenever a user uses an upvote emote, display this message.'
		});

	}

	async run(message, args){
	if (message.MessageReactions == ':upvote:'){
		message.reply('UPVOTE');
	}
}
	
}

module.exports = UpvoteCommand;
