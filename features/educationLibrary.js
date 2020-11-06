module.exports = function(controller) {
    var schools = require('./resume.json').education.map(school =>{
           return { title: `${school.Institution}`,
                    payload: `${school.Institution}`
                    }
        })
        schools.push({
                        title: 'Main Menu',
                        payload: 'Main Menu',
                    })
    if (controller.adapter.name === 'Web Adapter') {
      controller.hears(['Education'], 'message', async (bot, message) => {

            await bot.reply(message,{
                 text: 'Which educational experience would you like to hear more about?',
                quick_replies: schools
            });
      });



      
    require('./resume.json').education.map(school =>{
         let keys = Object.keys(school).map(key =>{
                if(!["startDate", "endDate", "Institution"].includes(key)){
                    return {
                        title: `${key}`,
                        payload: `${school.Institution} ${key}`
                    }
                }
            })
            keys.push({ title: "Timeline", payload: `${school.Institution} timeline`})
            keys = keys.filter(function( element ) {
                return element !== undefined;
            });
        controller.hears([`^${school.Institution}$`], 'message', async (bot, message) => {
           
            await bot.reply(message,{
                text: `What would you like to know about my time at ${school.Institution}?`,
                quick_replies: keys
            });

        })


        keys.forEach(key =>{
                if(!["Timeline"].includes(key.title)){
                    controller.hears([`${key.payload}`], 'message', async (bot, message) => {
                        bot.reply(message, `${school[key.title]}`)
                        await bot.reply(message,{
                            text: `Would you like to know more about ${school.Institution} or go back to job history?`,
                            quick_replies:[
                                {
                                    title: `${school.Institution}`,
                                    payload: `${school.Institution}`
                                },
                                {
                                    title: "Work History",
                                    payload: "Work history"
                                }
                            ]
                        })

                    })
                } 
            })

            controller.hears([`${school.Institution} timeline`], 'message', async (bot, message) => {
                bot.reply(message, `I went to ${school.Institution} from ${school.startDate} to ${school.endDate}`)
                        await bot.reply(message,{
                            text: `Would you like to know more about ${school.Institution} or go back to job history?`,
                            quick_replies:[
                                {
                                    title: `${school.Institution}`,
                                    payload: `${school.Institution}`
                                },
                                {
                                    title: "Work History",
                                    payload: "Work history"
                                }
                            ]
                        })
            
            })



    })

    



    }
}