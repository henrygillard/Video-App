require('dotenv').config();
require('./config/database');

const Category = require("./models/category");

(async function() {
    await Category.deleteMany({})
    const category = await Category.create(
        {name: "DCI"},
        {name: "WGI"},
        {name: "DCA"},
    )

    console.log(category);
    process.exit();
})();
