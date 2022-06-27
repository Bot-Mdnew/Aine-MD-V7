let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6289654360447@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & JADIBOT •*
        
1.```🤖Jasa Sewa Bot By DaniBoTz🤖```
 *_🟪LIST SEWA BOT_*

```📍1Minggu:3K```
```📍1Bulan:5K```
```📍Permanen:10K```
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
*FITUR BOT*
```🤖 Hentai 18+
🤖 Antilink
🤖 Hidetag
🤖 Menu Game
🤖 Sticker
🤖 Fitur 100+```
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
*Kelebihan Bot* 🫥
```➡️ On 24 Jam
➡️ Bukan Wibusoft
➡️ Anti Delay```
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
*LIST HARGA JADI BOT🤖:*
```30K ➡️ PERMANEN
20K ➡️ PERBULAN
10K ➡️ PERMINGGU```
*KEUNTUNGAN🤑:*
```BISA JADI JUAL SEWA BOT
ON 24JAM
DLL
DIJAMIN BALMOD🤑🤑```
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
```MINAT = LANGSUNG HUBUNGI OWNER BOT!!```











wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6281251549899@s.whatsapp.net`
  },
  footerText: 'https://aiinne.github.io',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
