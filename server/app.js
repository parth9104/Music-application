const express = require("express");
const app = express();
require("dotenv/config")

const cors = require('cors');//cross-origin resourcse sharing
const { default: mongoose } = require("mongoose");

//cross origin  (this server with react front end application so for that we will use cors package)

app.use(cors({ origin: true }));
app.get("/", (req, res) => {
    return res.json("HEY there....")
})

//user  (auth.js) authentication route
const userRoute = require("./routes/auth");
const { Header } = require("../client/src/components");
app.use("/api/users/", userRoute);

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });

mongoose.connection
    .once("open", () => console.log("connected"))
    .on("error", (error) => {
        console.log(`ERROR: ${error}`);
    })



app.listen(4000, () => console.log("Listening to port 4000"));