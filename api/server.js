require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

const {
  transactionsData,
  salesGraph,
  ordersGraph,
  platformGraph,
  categoryGraph,
  inventory,
} = require("./data.js");

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
  res.json(transactionsData.find((item) => item.username == req.user.username));
});
app.get("/sales-analytics", authenticateUser, (req, res) => {
  console.log(req.params.label);
  res.status(200).json(salesGraph);
});
app.get("/orders-analytics", authenticateUser, (req, res) => {
  res.status(200).json(ordersGraph);
});
app.get("/platform-analytics", authenticateUser, (req, res) => {
  res.status(200).json(platformGraph);
});
app.get("/category-analytics", authenticateUser, (req, res) => {
  res.status(200).json(categoryGraph);
});
app.get("/inventory", authenticateUser, (req, res) => {
  const temp = inventory.filter((item) =>
    item?.name?.toLowerCase().includes(req?.query?.q?.toLowerCase())
  );
  res.status(200).json(temp);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Main Server running on 3000");
});
