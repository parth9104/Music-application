const express = require("express");
const app = express();

const cors = require("cors");
 
app.get("/",(req,res)=>{
     return res.json("Hey there....")
})

app.listen(4000, () => console.log("Listening to port 4000"))

/*listen() method creates a listener on the specified port or path.(for browser) */