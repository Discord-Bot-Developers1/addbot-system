module.exports = {

name: "accept",

aliases: ["approve"],
description: "Accept a bot with ID.",
 usage: "accept <bot id>",
 category: "Staff",
  code:`$onlyIf[$memberExists[$message[1]]==true;{newEmbed:{author:Error Code 1038}{description::x: Hey you, $userTag that bot you were trying to accept is **not here** make sure you add it before trying to accept.}{color:RED}{footer:Error 1038}{timestamp}}]

$giveRoles[your server id;$message[1];members bot role id]

$takeRoles[your server id;$message[1];your unaccpected bot role id]

$author[1;Bot Accepted] 

$addField[1;Staff;$username[$authorID] ([User Profile](https://discord.gg/kkhazwM66M))] 

$addField[1;Bot;$userTag[$message[1]] ($message[1])]

$channelSendMessage[$channelID;Accepted bot.]

$color[1;#589AFE]

$useChannel[your bot log channel id]

$onlyIf[$message[1]!=;Add a botID. Do this (Eg. \`!accept <bot id>)\`.]

$onlyForServers[your server id;]

$onlyForRoles[your staff role id;]`

};
