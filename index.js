const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();

client.on('connected', () => {
    console.log(`Logged in as ${client.user.username}`);
});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return

    message.markSeen();

    if(message.content.toLowerCase().includes('who made you')) return message.chat.sendMessage('I am Built By ⧇am1uth\nhttps://www.instagram.com/am1uth/');
    if(message.content.toLowerCase().includes('who built you')) return message.chat.sendMessage('I am Built By ⧇am1uth\nhttps://www.instagram.com/am1uth/');
    if(message.content.toLowerCase().includes('who are you')) return message.chat.sendMessage('I am Nora Bot!');
    if(message.content.toLowerCase().includes('what is your name')) return message.chat.sendMessage('Iam Nora..🤍\nThank you for asking name😊!');
  });

client.login('norav2bot', 'Free12@Fire');