const { MessageEmbed } = require("discord.js");
const { CHANNELS } = require("../../util/constants");
const { User } = require("../../models/index");

module.exports = async (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#FF0000")
    .setFooter("Nous avons un fuyard....")
    // .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

  client.channels.cache.get(CHANNELS.LOG.id).send(embed);

  await User.deleteOne({ username: member });
  console.log(`${member} supprimé de la db.`);
};


