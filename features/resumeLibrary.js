module.exports = function(controller) {
    if (controller.adapter.name === 'Web Adapter') {

        var companies = require('./resume.json').work.map(job =>{
           return { title: `${job.company}`,
                    payload: `${job.company}`
                    }
        })
        companies.push({title: 'Main Menu', payload: "Main Menu"})
        controller.hears(['Work history'], 'message', async (bot, message) => {

            await bot.reply(message,{
                 text: 'Which role would you like to hear more about?',
                quick_replies: companies
            });
        });

        require('./resume.json').work.map(job =>{
            controller.hears([`${job.company}`], 'message', async (bot, message) => {
            let keys = Object.keys(job).map(key =>{
                
                if(!["startDate", "endDate", "company", "abbreviation"].includes(key)){
                    return {
                        title: `${key}`,
                        payload: `${job.abbreviation} ${key}`
                    }
                }
            })
            keys.push({ title: "Timeline", payload: `${job.abbreviation} timeline`})
            keys = keys.filter(function( element ) {
                return element !== undefined;
            });
            await bot.reply(message,{
                text: `What would you like to know about my time at ${job.company}?`,
                quick_replies: keys
            });


            keys.forEach(key =>{
                if(!["Timeline", "highlights"].includes(key.title)){
                    controller.hears([`${key.payload}`], 'message', async (bot, message) => {
                        bot.reply(message, `${job[key.title]}`)
                        await bot.reply(message,{
                            text: `Would you like to know more about ${job.company} or go back to job history?`,
                            quick_replies:[
                                {
                                    title: `${job.company}`,
                                    payload: `${job.company}`
                                },
                                {
                                    title: "Work History",
                                    payload: "Work history"
                                }
                            ]
                        })

                    })
                } if (key.title === "highlights"){
                    controller.hears([`${key.payload}`], 'message', async (bot, message) => {
                        job[key.title].forEach(el =>{
                            bot.reply(message, `I ${el}`)
                        })
                        await bot.reply(message,{
                            text: `Would you like to know more about ${job.company} or go back to job history?`,
                            quick_replies:[
                                {
                                    title: `${job.company}`,
                                    payload: `${job.company}`
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

            controller.hears([`${job.abbreviation} timeline`], 'message', async (bot, message) => {
                bot.reply(message, `I worked at ${job.company} from ${job.startDate} to ${job.endDate}`)
                        await bot.reply(message,{
                            text: `Would you like to know more about ${job.company} or go back to job history?`,
                            quick_replies:[
                                {
                                    title: `${job.company}`,
                                    payload: `${job.company}`
                                },
                                {
                                    title: "Work History",
                                    payload: "Work history"
                                }
                            ]
                        })
            
            })






        });


        
        })



    }
}