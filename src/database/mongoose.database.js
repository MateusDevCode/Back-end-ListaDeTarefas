const mongoose = require("mongoose");

const connectToDataBase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}
            @fsctaskmanagercluster.ypslji9.mongodb.net/`
        );
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = connectToDataBase;
