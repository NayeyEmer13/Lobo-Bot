import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const vn = './media/bot.mp3';
  const chat = global.db.data.chats[m.chat];
  //const s = seconds: '4556'
  // const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '𝑇ℎ𝑒 𝑀𝑦𝑠𝑡𝑖𝑐 - 𝐵𝑜𝑡', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'}}}
  // const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: {"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}}
  if (/^bot$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);
    await m.reply(`*𝐇𝐨𝐥𝐚 𝐬𝐨𝐲 𝐥𝐨𝐛𝐨-𝐛𝐨𝐭-𝐦𝐝 , ¿𝐭𝐞 𝐡𝐚 𝐠𝐮𝐬𝐭𝐚𝐝𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐲 𝐪𝐮𝐢𝐬𝐢𝐞𝐫𝐚𝐬 𝐚𝐝𝐪𝐮𝐢𝐫𝐢𝐫𝐥𝐨 𝐜𝐨𝐦𝐮𝐧𝐢́𝐜𝐚𝐭𝐞 𝐜𝐨𝐧 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 wa.me/51907913096?*`);
    conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
    // conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', seconds: '4556', ptt: true, sendEphemeral: true, quoted: m })
  }
  return !0;
};
export default handler;
