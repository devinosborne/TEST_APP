const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// create connection
const db = mysql.createConnection({
  host: "backend.csh7bpyqjw88.us-east-1.rds.amazonaws.com",
  user: "DOZBORNE",
  password: "Devin3627",
  database: "mydbnew",
  port: 3306,
});

// connect
db.connect((err) => {
  if (err) {
    console.error("Database connection failed");
    return;
  }
  console.log("mysql connected ");
});

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.get("/getposts", (req, res) => {
  let sql = "SELECT * FROM stores";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

app.get("/createpoststable", (req, res) => {
  let sql =
    "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send({ express: "Hello From Express" });
  });
});

app.listen("3001", () => {
  console.log("server started on port 3001");
});
