module.exports = {

  name: "decline",

  aliases: ["disapprove"],
description: "Decline a bot with reason and ID.",
 usage: "decline <bot id> <reason>",
 category: "Bot Reviewer",
  code: `

 $sendDm[{newEmbed:{author::x: Declined :x::https://media.discordapp.net/attachments/894178629339213854/932134910590869512/Picsart_22-01-16_11-35-14-110.jpg?width=473&height=473}{description:Your bot <@$message[1]> has been declined on $serverName[765789714384814120]. 

Reason: $message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10] $message[11] $message[12] $message[13] $message[14] $message[15] $message[16] $message[17] $message[18] $message[19] $message[20] $message[21] $message[22] $message[23] $message[24] $message[25] $message[26] $message[27] $message[28] $message[29] $message[30] $message[31] $message[32] $message[33] $message[34] $message[35] $message[36] $message[37] $message[38] $message[39] $message[40] $message[41] $message[42] $message[43] $message[44] $message[45]}{color:RED}{timestamp}};$getServerVar[ownerIDB]]

$channelSendMessage[923178961779965952;<@$getServerVar[ownerIDB]>{newEmbed:{author:Bot Declined}{field:Bot:$userTag[$message[1]] ($message[1])}{field:Reviewer:$username[$authorID] ([DBD profile](https#COLON#//discord.com/users/$authorID))}{field:Reason:$message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10] $message[11] $message[12] $message[13] $message[14] $message[15] $message[16] $message[17] $message[18] $message[19] $message[20] $message[21] $message[22] $message[23] $message[24] $message[25] $message[26] $message[27] $message[28] $message[29] $message[30] $message[31] $message[32] $message[33] $message[34] $message[35] $message[36] $message[37] $message[38] $message[39] $message[40] $message[41] $message[42] $message[43] $message[44] $message[45]}{color:#589AFE}}]

$wait[1s]

$kick[$message[1];765789714384814120;Bot is declined by: $usertag[$authorID] ($authorID)]

$channelSendMessage[$channelID;Declined Bot and kicked the bot.]

$wait[1s]

$channelSendMessage[932133521810669639;{newEmbed:{author:A bot has been declined.}{description:
◻️ **Member:** $usertag[$message[1]] ($message[1]) [<@$message[1]>]

*Note: You can always review the bot again once it's already a kick and decline.*

**Details:**
◻️ **Member given the role:** No
◻️ **Member is kick:** Yes}{color:BLUE}}

$onlyIf[$memberExists[$message[1]]==true;{newEmbed:{author:Error 344}{description::x: Hey you, $userTag that bot you were trying to decline is **not here** make sure you add it before trying to decline.}{color:RED}{footer:Error 344}{timestamp}}]

$onlyIf[$message[2]!=;{newEmbed:{author:$userTag:$authorAvatar}{description:Add a botID & reason. Do this (Eg. \`!decline 822042673451630614 Help command is not working.)\`.}{footer:Error}{color:WHITE}{timestamp}}]

$suppressErrors[{newEmbed:{author:$userTag:$authorAvatar}{description:Add a botID & reason. Do this (Eg. \`!decline 822042673451630614 Help command is not working.)\`.}{footer:Error}{color:WHITE}{timestamp}}]

$onlyForServers[765789714384814120;]

$onlyForRoles[787254365684498443;934404587530621049;]`

};