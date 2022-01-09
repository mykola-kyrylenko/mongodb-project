//iTWBjRHOaLiCO5AC


//mongodb+srv://Nikolay:iTWBjRHOaLiCO5AC@cluster0.tjzj0.mongodb.net/test

const DB_HOST = "mongodb+srv://Nikolay:iTWBjRHOaLiCO5AC@cluster0.tjzj0.mongodb.net/online_shop?retryWrites=true&w=majority";

const mongoose = require("mongoose");

mongoose.connect(DB_HOST)
    .then(() => console.log("Database connect"))
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });