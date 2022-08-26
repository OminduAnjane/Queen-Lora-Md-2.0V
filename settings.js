//═══════════════════════════════════════════════════════//
//
//                              𝙌𝙐𝙀𝙀𝙉 𝙇𝙊𝙍𝘼 𝙈𝘿 𝙱𝚈 𝘖𝘔𝘐𝘕𝘋𝘜 𝘈𝘕𝘑𝘈𝘕𝘈
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'aaf629b68b', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94760510568']
global.premium = ['+94714689365']
global.ownernomer = '+94714689365'
global.ownername = 'Omindu Anjana'
global.botname = 'Queen Lora Md 2.0v'
global.footer = '👸Queen Lora Md'
global.mywa = 'https://wa.me/94760510568'
global.myschool = 'Mo/Nishshanka National School'
global.wmark = 'Queen Lora Md'
global.ig = 'https://github.com/OMINDUANJANA'
global.region = 'Sri Lanka, Monaragala,Badalkumbura,'
global.sc = 'https://github.com/OMINDUANJANA/Queen-Lora-Md-2.0v'
global.myweb = 'https://youtube.com/channel/UCqoUjPvDdb0kjXNYdvPPpHQ'
global.packname = '𝚀𝚄𝙴𝙴𝙽 𝙻𝙾𝚁𝙰 𝙼𝙳'
global.author = 'Omindu Anjana'
global.sessionName = 'session'
global.prefa = ['','!','.','📔','📑','ℹ️']
global.sp = '⭔'
global.mess = {
    success: 'වැඩේ හරි ✓',
    admin: 'මේ Feature වැඩකරන්නේ admin ට විතරයි!',
    botAdmin: 'ඉස්සෙල්ලා ම bot ව admin කරන්න!',
    owner: 'මේ Feature වැඩකරන්නේ අයිතිකරු ට පමණි.',
    group: 'මේ Feature වැඩකරන්නේ group එකට විතරයි',
    private: 'මේ Features private chat කරන්න විතරයි!',
    bot: 'මේ Feature වැඩකරන්නේ bot ට පමණි.',
    wait: '🔂පොඩ්ඩක් වෙලා ඉන්න...',
    error: 'Error! එකක් ඔයාගේ Api එක කල්ඉකුත් වී ඇත. 🤔!',
    endLimit: 'අද දවසේ බොට් පාවිච්චී කිරිමේ කාලය කල්ඉකුත් වී ඇත., The Limit Will Be Reset Every 12 Hours',
}
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
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
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
