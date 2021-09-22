require('dotenv').config();
require('./config/database');

const Category = require("./models/category");
const Group = require('./models/group');

(async function() {
    await Category.deleteMany({})
    const categories = await Category.create([
        {name: "DCI"},
        {name: "DCA"},
        {name: "WGI"}
    ]);

    await Group.deleteMany({});
    const groups = await Group.create([
        {name: "Blue Devils", category: categories[0], videoUrl: "https://www.youtube.com/watch?v=FO6d8zDf1Hg&ab_channel=ThatWasLoud"},
        {name: "Santa Clara Vanguard", category: categories[0], videoUrl: "https://www.youtube.com/watch?v=F4_j5W8-L3g&ab_channel=DrumCorpsInternational"},
        {name: "The Cavaliers", category: categories[0], videoUrl: "https://www.youtube.com/watch?v=v3dVWvqTPs8&ab_channel=oddblacksheepx"},
        {name: "The Bluecoats", category: categories[0], videoUrl: "https://www.youtube.com/watch?v=YyzzG5MTMyM&ab_channel=Thepnakhin_"},
        {name: "Carolina Crown", category: categories[0], videoUrl: "https://www.youtube.com/watch?v=4eyC0B7znaU&ab_channel=FloMarching"},
        {name: "The Mandarins", category: categories[0], videoUrl: "https://www.youtube.com/watch?v=bS2sSLR9jFM&ab_channel=DrumCorpsInternational"},
        {name: "Boston Crusaders", category: categories[0], videoUrl: "https://www.youtube.com/watch?v=8pGWyYm0I0c&ab_channel=DrumCorpsInternational"},
        {name: "Phantom Regiment", category: categories[0], videoUrl: "https://www.youtube.com/watch?v=cTU3HF8ptuw&ab_channel=TheBlueGun"},
        {name: "The Cadets", category: categories[0], videoUrl: "https://www.youtube.com/watch?v=ANCg3T2FRh0&ab_channel=TheCadets"},
        {name: "The Academy", category: categories[0], videoUrl: "https://www.youtube.com/watch?v=WY0D9MpIa3s&ab_channel=JustinLe"},
        {name: "Troopers", category: categories[0], videoUrl: "https://www.youtube.com/watch?v=6u2C_WzxMVM&ab_channel=DrumCorpsInternational"},
        {name: "Pacific Crest", category: categories[0], videoUrl: "https://www.youtube.com/watch?v=fCJt3k59-a8&ab_channel=DrumCorpsInternational"},
        {name: "RCC Indoor Percussion", category: categories[2], videoUrl: "https://www.youtube.com/watch?v=ArTgxmE5sco&ab_channel=RCCIndoorPercussion"},
        {name: "Connecticut Hurricanes", category: categories[1], videoUrl: "https://www.youtube.com/watch?v=SnwO9Y_pKkc&ab_channel=brianlathamct44"},
    ]);
    
    console.log(groups);
    process.exit();
})();
