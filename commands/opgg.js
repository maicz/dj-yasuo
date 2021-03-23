module.exports = {
    name: 'opgg',
    description: 'Shows op.gg stats for players in the server.',
    execute(message, args){
        message.reply(
            'Here yo go kids -> '+
            'https://eune.op.gg/multi/query=Giyu%20Tom%C3%ADoka%20%2C%C3%89velyne%20%2CDavid0815%20'
        )
    }
}