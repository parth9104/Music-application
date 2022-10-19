//  we will create routers here
//  What is server-side routing?
// Image result for what is use of routers in server side auth.js
// Server side routing is not part of React Router but it is still the most common form of handling routes. With server side routing, a user clicks a link that requests a new page or new data from the server (another computer). And then new data or document is served to the user.

const router = require("express").Router();

const user = require("../models/user")
const admin = require("../config/firebase.config.js");

router.get("/login", async function(req, res) {
        // return res.json("Login With google")
        // return res.send(req.headers.authorization)
        if (!req.headers.authorization) {
            //500 means internal server error
            return res.status(500).send({ message: "Invalid Token" });
        }
        const token = req.headers.autherization.split(" ")[1];
        // return res.send(token)
        // above we have token so using try and catch we will decode the token
        try {
            const decodeValue = await admin.auth().verifyIdToken(token);
            if (!decodeValue) {
                return res.status(505).json({ mesage: "Un Authorized" });
            } else {
               // checking user exists or not
               const userExists = await user.findOne({"user_id":decodeValue.user_id})
               if(!userExists){
                return res.send("Need To Cretae");
               }
               else{
                return res.send("need to update");
               }

            }


        }
        catch (error) {
            return res.status(505).json({ message: error });

        }

    })

module.exports = router;