const aoijs =  require("aoi.js");

const bot = new aoijs.Bot({

  token: "your bot token",

  prefix: "!",

    intents: "all",
    suppressAllErrors: {
        errorMessage: ["{newEmbed:{title:Error Code 503}{description::x: Something went wrong. Please try again later!}{footer:Error Code 503}{color:RED}{timestamp}}"]

    }
});

bot.onMessage();

const fs = require("fs");

const folders = fs.readdirSync("./commands/");

for (const files of folders) {

  const folder = fs

    .readdirSync(`./commands/${files}/`)

    .filter(file => file.endsWith(".js"));

  for (const commands of folder) {

    const command = require(`./commands/${files}/${commands}`);

    bot.command({

      name: command.name,

      aliases: command.aliases,

      description: command.description,

      usage: command.usage,

      code: command.code

    });

  }

}

bot.command({

  name: "addbot",

  aliases: ["add-bot"],
description: "Add a bot with id and prefix.",
 usage: "addbot <bot id> <prefix>",
 category: "Simple commands",
  code:`
<@&staff role id>

$author[1;New bot!;$authorAvatar]

$description[1;
**Bot Name:** \`$usertag[$message[1]]\`

 **Bot ID:** \`$message[1]\`

**Bot Prefix:** \`$message[2]\`

**Bot Invite:** https://discord.com/oauth2/authorize?client_id=$message[1]&permissions=0&scope=bot%20applications.commands&disable_guild_select=true&guild_id=your server id]

$color[1;RANDOM]

$useChannel[bot added channel id]

$channelSendMessage[addbot channel id;{newEmbed:{author:$usertag:$authorAvatar}{description:
Prefix: \`$message[2]\`

ID: \`$message[1]\`

Name: \`$userTag[$message[1]]\` Submitted bot.}{color:BLUE}{timestamp}}]

$onlyIf[$memberExists[$message[1]]!=true;:x: This bot is already here! You can use it in testing channels or It's being review by Staff.]

$argsCheck[>1;Missing argument... **Usage:** \`<prefix>addbot <CLIENT ID> <BOT PREFIX>\`]

$onlyForChannels[addbot channel id;:x: Go to <#addbot channel id> to add your bot.]

$suppressErrors[Missing argument... **Usage:** \`<prefix>addbot <CLIENT ID> <BOT PREFIX>\`]

$onlyForServers[your server guild id;]`

  });
console.log(`
      [===========================================]
              Addbot system with deny, approve
                   Developed by Zedge#9417

                    Achievements =)
      [===========================================]
      `)
