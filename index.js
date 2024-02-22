const express = require("express");
const dotenv = require("dotenv");

const connectToDataBase = require("./src/database/mongoose.database");

dotenv.config();
const app = express();

connectToDataBase();

app.get("/task", (req, res) => {
    const tasks = [{ description: "Estudar programação", isCompleted: false }];
    res.status(200).send("Hello world");
});

app.listen(8000, () => console.log("Listening on port 8000!"));
