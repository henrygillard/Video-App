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
        {name: "Blue Devils", category: categories[0]},
        {name: "Santa Clara Vanguard", category: categories[0]},
        {name: "The Cavaliers", category: categories[0]},
        {name: "The Bluecoats", category: categories[0]},
        {name: "Carolina Crown", category: categories[0]},
        {name: "The Mandarins", category: categories[0]},
        {name: "Boston Crusaders", category: categories[0]},
        {name: "Phantom Regiment", category: categories[0]},
        {name: "The Cadets", category: categories[0]},
        {name: "The Academy", category: categories[0]},
        {name: "Troopers", category: categories[0]},
        {name: "Pacific Crest", category: categories[0]},
        {name: "RCC Indoor Percussion", category: categories[1]},
        {name: "Connecticut Hurricanes", category: categories[2]},
    ]);
    
    console.log(groups);
    process.exit();
})();
