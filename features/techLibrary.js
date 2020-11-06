module.exports = function(controller) {

  if(controller.adapter.name === 'Web Adapter'){
    let tech = require('./resume.json').skills.map(el =>{
      return {
        title: `${el.name}`,
        payload: `${el.name} experience`
      }

    })
    tech.push({
                        title: 'Main Menu',
                        payload: 'Main Menu',
                    })
    controller.hears('Tech Stack', 'message', async (bot, message) => {
      await bot.reply(message,{
                                  text: 'Which skill would you like to learn about?',
                                  quick_replies: tech
      })
    })

    require('./resume.json').skills.forEach(el =>{
      controller.hears([`^${el.name} experience$`], 'message', async (bot, message) => {
        bot.reply(message, `I have been using ${el.name} for ${el.level}`)
        await bot.reply(message,{
                                  text: 'Would you like to learn about more skills?',
                                  quick_replies: [{
                                    title: "Tech Stack",
                                    payload: "Tech Stack"
                                  },{
                                    title: 'Main Menu',
                                    payload: 'Main Menu',
                                  }]
        })


      })

    })


  }


}