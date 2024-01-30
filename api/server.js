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
    username: "rishika",
    total: 27,
    list: [
      {
        id: "281209",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281209",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281209",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281209",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281209",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281209",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281209",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281209",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281209",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281209",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
    ],
  },

  {
    username: "rishika23",
    total: 17,
    list: [
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281210",
        date: "7 July, 2023",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
      {
        id: "281211",
        date: "7 July, 2022",
        amount: "1,278.23",
        fee: "22",
      },
    ],
  },
];

const authenticateUser = (req, res, next) => {
  console.log(req.cookies.accessToken);
  const authHeader = req.headers.authorization;
  console.log(authHeader);
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

app.get("/transactions", authenticateUser, (req, res) => {
  res.json(data.find((item) => item.username == req.user.username));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Main Server running on 3000");
});
