require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: true,
    methods: ["GET", "PUT", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
// app.use(cors({ origin: "http://localhost:3001" }));

const data = [
  {
    name: "test1",
  },
  {
    name: "rishika2",
  },
  {
    name: "test1",
  },
  {
    name: "rishika",
  },
];

const authenticateUser = (req, res, next) => {
  console.log(req.cookies.accessToken);
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  //console.log(token);

  if (token == null) res.status(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, user) => {
    if (err) res.status(403);
    req.user = user;
    next();
  });

  //in the jwt.verify, we have sent a callback fucntion with err and user, here user is the payload data
  //obtained from the token given inside jwt.verify
};

app.get("/", authenticateUser, (req, res) => {
  res.json(data.filter((item) => item.name == req.user.username));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Main Server running on 3000");
});
