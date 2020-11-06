


module.exports = function(controller) {
    var resume = require('./resume.json')

   controller.on('connected', function(bot, message) {
    
      bot.reply(message,`Welcome, my name is ${resume.basics.name} and I am open to work`);
      bot.reply(message, "....")
      bot.reply(message, "Well I am Jordan's avatar")
      bot.reply(message,{
                text: 'Ask me some questions',
                quick_replies: [
                    {
                        title: 'Contact Info',
                        payload: 'Conact Info',
                    },
                    {
                        title: 'Work History',
                        payload: 'Work History',
                    },
                    {
                        title: 'Education',
                        payload: 'Education',
                    },
                    {
                        title: 'Tech Stack',
                        payload: 'Tech Stack',
                    },
                ]
            });
    });

  controller.hears(['Main Menu'], 'message', async (bot, message) => {
    bot.reply(message,{
                text: 'Ask me some questions',
                quick_replies: [
                    {
                        title: 'Contact Info',
                        payload: 'Conact Info',
                    },
                    {
                        title: 'Work History',
                        payload: 'Work History',
                    },
                    {
                        title: 'Education',
                        payload: 'Education',
                    },
                ]
            });
  })

  controller.hears(['^hi$'], 'message', (bot, message) => {
      bot.reply(message, {
          files: [
              {
                  url: 'https://media.giphy.com/media/yoJC2A59OCZHs1LXvW/giphy.gif',
                  image: true
              }
          ]
      })
  })

}