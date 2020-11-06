module.exports = function(controller) {
  
  if (controller.adapter.name === 'Web Adapter') {

    controller.hears(['nyan cat'], 'message', (bot, message) => {
      bot.reply(message, {
          files: [
              {
                  url: 'https://media.giphy.com/media/Rm9RzjSAfXm4o/giphy.gif',
                  image: true
              }
          ]
      })
    })

    controller.hears(['numa numa'], 'message', (bot, message) => {
      bot.reply(message, {
          files: [
              {
                  url: 'https://media.giphy.com/media/kh8ePQvhzWL5e/giphy.gif',
                  image: true
              }
          ]
      })
    })


    controller.hears(['Rick Roll'], 'message', async (bot, message) => {
      await bot.reply(message, {type: 'typing'})
      setTimeout( async function(){
        await bot.changeContext(message.reference);
        await bot.reply(message, "Never gonna give you up")}, 1000
      )
      await bot.reply(message, { type: "typing" });
      setTimeout( async function(){
        await bot.changeContext(message.reference);
        await bot.reply(message, "Never gonna let you down")}, 1600
      )
      await bot.reply(message, { type: "typing" });
      setTimeout( async function(){
                  await bot.reply(message, {
                      files: [
                          {
                              url: 'https://media.giphy.com/media/g7GKcSzwQfugw/giphy.gif',
                              image: true
                          }
                      ]
                  })
            }, 2000)
   
    
    })
    

  }
}