module.exports = {

  name: "decline",

  aliases: ["disapprove"],
description: "Decline a bot with reason and ID.",
 usage: "decline <bot id> <reason>",
 category: "Bot Reviewer",
  code: `
$channelSendMessage[your bot log channel id;{newEmbed:{author:Bot Declined}{field:Bot:$userTag[$message[1]] ($message[1])}{field:Staff:$username[$authorID] ([DBD profile](https://discord.gg/kkhazwM66M))}{field:Reason:$message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10] $message[11] $message[12] $message[13] $message[14] $message[15] $message[16] $message[17] $message[18] $message[19] $message[20] $message[21] $message[22] $message[23] $message[24] $message[25] $message[26] $message[27] $message[28] $message[29] $message[30] $message[31] $message[32] $message[33] $message[34] $message[35] $message[36] $message[37] $message[38] $message[39] $message[40] $message[41] $message[42] $message[43] $message[44] $message[45]}{color:#589AFE}}]

$wait[1s]

$kick[$message[1];your server id;Bot is declined by: $usertag[$authorID] ($authorID)]

$channelSendMessage[$channelID;Declined Bot and kicked the bot.]

$onlyIf[$memberExists[$message[1]]==true;{newEmbed:{author:Error Code 1038}{description:❌ Hey you, $userTag that bot you were trying to decline is **not here** make sure you add it before trying to decline.}{color:RED}{footer:Error 1038}{timestamp}}]

$onlyIf[$message[2]!=;Add a botID & reason. Do this (Eg. \`!decline 822042673451630614 Help command is not working.\`).]

$suppressErrors[Error, contact Zedge#9417 for this.]

$onlyForServers[your server id;]

$onlyForRoles[your staff role id;]`

};
