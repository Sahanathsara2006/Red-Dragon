//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `👋 𝙷𝙸.. 𝙸 𝙰𝙼 𝙾𝙽𝙻𝙸𝙽𝙴 𝙽𝙾𝚆

𝘐 𝘢𝘮 𝘨𝘭𝘢𝘥 𝘵𝘩𝘢𝘵 𝘺𝘰𝘶 𝘢𝘳𝘦 𝘢𝘷𝘢𝘪𝘭𝘪𝘯𝘨 𝘮𝘺 𝘴𝘦𝘳𝘷𝘪𝘤𝘦𝘴 👾♥️

𝐇𝐀𝐕𝐄 𝐀 𝐍𝐈𝐂𝐄 𝐃𝐀𝐘 🌎🍃✨

││╴╴╴╴╴╴╴╴╴╴╴╴❬☠❭╴╴╴╴╴╴╴╴╴╴╴╴││` //Costomize Alive Message (type your message in `` )

global.owner = ['+94716025918'] //Owner number in aive msg
global.premium = ['+94716025918'] //Owner Number info
global.ownernomer = '+94716025918' //Owner Number <<<

global.ownername = '𝙎𝘼𝙃𝘼𝙉 𝙎𝘼𝙏𝙃𝙎𝘼𝙍𝘼 👻' //Owner Name
global.botname = '24×7 PUBLIC USER BOT' //Bot Name

global.button = 'Whatsapp Group ✅' //Costomize A Button Name In Alive Message
global.btnurl = 'https://chat.whatsapp.com/LN8keBxlL8H5FKezYgUdIU' //Change Your Button's URL

global.region = 'Sri Lanka, Western Province, Narammala' //Country Region

global.packname = '24×7 BOT' //Bot Pacage Name
global.author = '𝙎𝘼𝙃𝘼𝙉 𝙎𝘼𝙏𝙃𝙎𝘼𝙍𝘼 👻' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴 𝙱𝚈 𝚂𝙰𝙷𝙰𝙽 𝚂𝙰𝚃𝙷𝚂𝙰𝚁𝙰.' //In list menu
global.chatbotpre = 'false'  // Chat bot true/false

global.ig = 'https://t.me/filmhublink' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
