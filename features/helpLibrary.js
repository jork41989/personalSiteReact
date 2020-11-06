module.exports = function(controller) {

  controller.hears(['Help'], 'message', async (bot, message) => {
    bot.reply(message, "Hey friend, looks like you need some help!")
    await bot.reply(message,{
                 text: 'Try one of these',
                 quick_replies: [
                    {
                        title: 'Main Menu',
                        payload: 'Main Menu',
                    },
                    {
                        title: 'Work History',
                        payload: 'Work History'
                    },
                    {
                        title: 'numa numa',
                        payload: 'numa numa'
                    }
                    
                 ]
    })
  })

}