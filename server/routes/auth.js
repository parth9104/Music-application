//  we will create routers here
//  What is server-side routing?
// Image result for what is use of routers in server side auth.js
// Server side routing is not part of React Router but it is still the most common form of handling routes. With server side routing, a user clicks a link that requests a new page or new data from the server (another computer). And then new data or document is served to the user.
const router = require("express").Router();

const jwt = require('jsonwebtoken');
const user = require("../models/user");
const admin = require("../config/firebase.config"); //imported admin privilages

// e purpose of async / await is to simplify the syntax necessary to consume promise-based APIs. The behavior of async / await is similar to combining generators and promises. Async functions always return a promise.
router.get("/login", async (req, res) => {
    if (!req.headers.authorization){
        //500 means internal server error
        return res.status(500).send({ message: "Invalid Token" });
    }
        const token = req.headers.authorization.split(" ")[1];
      

    // above we have token so using try and catch we will decode the token
         try{
             const decodeValue = jwt.decode(token)
             if(!decodeValue){
                return res.status(505).json({mesage:"un Authorized"})
             }
             else{
                //checking user exist or not 
                const userExists = await user.findOne({"user_id": decodeValue.user_id})
                if(!userExists){
                        newUserData(decodeValue, req, res)
                }
                else{
                    return res.send("Need to update")
                }
         }}
         catch(error){
            return res.status(505).json({message:error})
         }
    })

    const newUserData = async(decodeValue, req, res) =>{
       const newUser = new user({
           name : decodeValue.name,
           email : decodeValue.email,
           imageURL : decodeValue.picture,
           user_id : decodeValue.user_id,
           email_verified : decodeValue.email_verified,
           role : "member",
           auth_time : decodeValue.auth_time
       })
        try {
            const savedUser = await newUser.save();
            res.status(200).send({ user: savedUser })
        }
        catch (error) {
            res.status(400).send({ success: false, msg: error });
        }

    }
    
    module.exports = router;
    










  //  return res.send(token)
        // const decodeValue = jwt.decode(token)
        // return res.send(decodeValue)
// router.get("/login", async (req, res) => {
//     if (!req.headers.authorization){
//         //500 means internal server error
//         return res.status(500).send({ message: "Invalid Token" });
//     }
//         const token = req.headers.authorization.split(" ")[1];
//         //  return res.send(token)
    
//     // above we have token so using try and catch we will decode the token
//          try{
//              const decodeValue = await admin.auth().verifyIdToken(token);
//              if(!decodeValue){
//                 return res.status(505).json({mesage:"un Authorized"})
//              }
//              else{
//                 return res.status(200).json(decodeValue)
//          }}
//          catch(error){
//             return res.status(505).json({message:error})
//          }
//     })
    
//     module.exports = router;
    
// //    return res.send(token)