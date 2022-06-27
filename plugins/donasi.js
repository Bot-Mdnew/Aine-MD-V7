let handler = async m => m.reply(`
╭─「 Dana • Gopay 」
│ •  [0812-5154-9899]
│ •  [0813-5284-8936]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
