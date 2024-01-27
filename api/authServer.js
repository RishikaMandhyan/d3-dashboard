require('dotenv').config()
const cookieParser = require('cookie-parser')
const express= require('express')
const jwt= require('jsonwebtoken')
const bcrypt= require('bcrypt')

const app= express()
app.use(express.json());
app.use(cookieParser());

let rTokens=[]; //temporary db
let users= []; //temporary db

app.post('/signup', async (req, res)=>{
    try{

        //first we will check if this user email already exists in db, if so
        //we will ask user to login instead
        //if email is unique, we can proceed further

        const password= req.body.password;
        const email=req.body.email;
      
        const hashedPassword= await bcrypt.hash(password, 1);
        users.push({username: req.body.username, password: hashedPassword});
        res.status(201).json(users);  //here also we have to send the access and refresh tokens
    }
    catch {
       return res.status(500);
    }

})

app.post('/login', async (req, res)=>{
    const username= req.body.username;
    const password= req.body.password;
    const flag= users.find(item=> item.username=== username) //db
    if(flag==null) return res.status(404).json('Cannot find user');
//flag is userinfo from db
    try{
        if( await bcrypt.compare(password, flag.password))
        {
            const user={username: username, password: password}

            const accessToken= jwt.sign(user, process.env.ACCESS_TOKEN_KEY, { expiresIn: "60s"});
            const refreshToken= jwt.sign(user, process.env.REFRESH_TOKEN_KEY, { expiresIn: "30d"});
        
            rTokens.push(refreshToken);
        
            res.cookie('accessToken', accessToken, {httpOnly: true,})
            res.cookie('refreshToken', refreshToken, {httpOnly: true,})
            res.json(
                {accessToken : accessToken, refreshToken
            : refreshToken});
        }else {
            res.status(401).json("Password Incorrect")
        }
    }
    catch {
       return res.status(500);
    }


})

//this route is called when we are sending a refresh token and need another access token
app.post('/token', (req, res)=>{
    const refreshToken= req.cookies.refreshToken;
    console.log(refreshToken);
    if(!refreshToken) return res.status(401);
    
    if(!rTokens.includes(refreshToken)) res.status(403);  //from db

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, user)=>{

        //console.log(user); //this user will contain username passowrd the data we used as payload
        //and some more info like iat(issued at) and exp (expiry) which we dont want to use as payload
        //when we get our access token

        if(err) res.status(403);
        const accessToken= jwt.sign({username: user.username, password: user.password}, process.env.ACCESS_TOKEN_KEY, { expiresIn: "15d"});
        res.cookie('accessToken', accessToken, {httpOnly: true,})
        res.status(200).json("new access token generated from refresh token")
    })
})

app.delete('/logout', (req, res)=>{
    const refreshToken= req.cookies.refreshToken;
    if(!refreshToken) return res.status(401);
    rTokens= rTokens.filter(item => item!== refreshToken) //deleting from db

    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.json('Cookies cleared');
})

app.listen(4000, ()=>{
    console.log("Auth Server running on 4000")});

