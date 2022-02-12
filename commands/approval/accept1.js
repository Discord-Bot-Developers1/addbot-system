module.exports = {

name: "accept",

aliases: ["approve"],
description: "Accept a bot with ID.",
 usage: "accept <bot id>",
 category: "Bot Reviewer",
  code:`$onlyIf[$memberExists[$getServerVar[botID]]==true;{newEmbed:{author:Error 344}{description::x: Hey you, $userTag that bot you were trying to accept is **not here** make sure you add it before trying to accept.}{color:RED}{footer:Error 344}{timestamp}}]

  $changeNickname[$message[1];$getServerVar[botPrefix] | $username[$message[1]]]

$sendDm[{newEmbed:{author:🎉 Accepted 🎉:https://media.discordapp.net/attachments/894178629339213854/932134910590869512/Picsart_22-01-16_11-35-14-110.jpg?width=473&height=473}{description:Your bot <@$message[1]> has been approved on $serverName[765789714384814120] :tada:!}{color:GREEN}{timestamp}};$getServerVar[ownerIDB]]   

$giveRoles[765789714384814120;$message[1];932135313852207124]

$wait[1s]

$giveRoles[765789714384814120;$getServerVar[ownerIDB];933199754052116510]

$takeRoles[765789714384814120;$message[1];932135705390510132]

<@$getServerVar[ownerIDB]>

$author[1;Bot Accepted] 

$addField[1;Reviewer;$username[$authorID] ([DBD profile](https#COLON#//discord.com/users/$authorID))] 

$addField[1;Bot;$userTag[$message[1]] ($message[1])]

$channelSendMessage[$channelID;Accepted bot.]

$wait[1s]

$channelSendMessage[932133521810669639;{newEmbed:{author:A bot has been accepted.}{description:
◻️ **Member:** $usertag[$message[1]] ($message[1]) [<@$message[1]>]

*Note: Do not review the bot again once it's already a accepted.*

**Details:**
◻️ **Member given the role:** Yes
◻️ **Member is kick:** No}{color:BLUE}}]

$color[1;#589AFE]

$useChannel[923178961779965952]

$onlyIf[$message[1]!=;{newEmbed:{author:$userTag:$authorAvatar}{description:Add a botID. Do this (Eg. \`!accept <bot id>)\`.}{footer:Error}{color:WHITE}{timestamp}}

$onlyForServers[765789714384814120;]

$onlyForRoles[787254365684498443;934404587530621049;]`

};