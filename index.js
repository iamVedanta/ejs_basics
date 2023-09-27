import express from "express";
import ejs from "ejs";
import urlFilePath from "path";
import { dirname } from "path";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.set("view engine", "ejs");

const body = app.use(bodyParser.urlencoded({ extended: true }));

function getday(day) {
  if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
    return "C'mon! Get to work!";
  } else if (day == 6 || day == 0) {
    return "Chill! Its a weekend";
  }
}

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  var numb = req.body["num"];
  var ans = getday(numb);
  res.render("ans", { ans: ans });
});

app.listen(port, () => {
  console.log(`Listening at port ${port}.`);
});
