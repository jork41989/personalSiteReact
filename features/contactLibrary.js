module.exports = function(controller) {

     var resume = require('./resume.json').basics
     let contactInfo = Object.keys(resume.contactDetails).map(detail => {
         if(detail === "profiles"){
             return {
                 'title': 'Social Profiles',
                 'payload': 'Where can I find your social profiles?'
             }

         } else {
             return {
             'title': `${detail}`,
             'payload': `What is your ${detail}`
            }
         }
         
     });

    let contactPings = Object.keys(resume.contactDetails).map(detail => {
        let val = resume.contactDetails[detail]
        let socials = resume.contactDetails.profiles.map(profile => {
            return {
                'title': `${profile.network}`,
                'payload': `Where can I find you on ${profile.network}`
            }
        })
        if(detail === 'profiles'){
            return controller.hears(`Where can I find your social profiles?`, 'message', async(bot, message) =>{
                await bot.reply(message,{
                    text: 'Check out my profiles here',
                    quick_replies: socials
                })
            })
        } else {
            return controller.hears([`What is your ${detail}?`, `^${detail}$`], 'message', async(bot, message) =>{
                    bot.reply(message, `My ${detail} is ${val}`)
                    await bot.reply(message,{
                                text: 'Would you like more contact info or the main menu?',
                                quick_replies: [
                                    {
                                        title: 'Main Menu',
                                        payload: 'Main Menu',
                                    },
                                    {
                                        title: 'More Contact Info',
                                        payload: 'Conact Info',
                                    }
                                ]
                            });
            })
        }
    })


    resume.contactDetails.profiles.map(profile =>{
        return controller.hears(`Where can I find you on ${profile.network}`, 'message', async(bot, message) =>{
                bot.reply(message, `My ${profile.network} profile can be found at <${profile.url}>`)
                await bot.reply(message,{
                                text: 'Would you like more contact info or the main menu?',
                                quick_replies: [
                                    {
                                        title: 'Main Menu',
                                        payload: 'Main Menu',
                                    },
                                    {
                                        title: 'More Contact Info',
                                        payload: 'Conact Info',
                                    }
                                ]
                            });
            })

    })


    if(controller.adapter.name === 'Web Adapter'){
        controller.hears('Conact Info', 'message', async (bot, message) => {
            await bot.reply(message,{
                text: 'What type of contact information would you like?',
                quick_replies: contactInfo
            });
        });
        {contactPings}
    }
}
