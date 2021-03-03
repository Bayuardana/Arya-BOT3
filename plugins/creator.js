let handler = function (m) {
  // this.sendContact(m.chat, '6281908786197', 'Rara', m)
  this.sendContact(m.chat, '6287780597451', 'BayuArdana', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
