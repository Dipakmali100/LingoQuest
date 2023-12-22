const express = require("express");
const { Users, Performance, LanguageModel } = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/register", async (req, res) => {
  const { firstname, lastname, email, password, language } = req.body;

  const userData = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    language: language,
  };
  try {
    const check = await Users.findOne({ email: email });
    const langData= await LanguageModel.findOne({language: language});
    const performanceData={
      email:email,
      language:language,
      currentChapter:1,
      xp:0,
      chapters:langData.chapters
    }
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await Users.insertMany([userData]);
      await Performance.insertMany([performanceData]);
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await Users.findOne({ email: email });
    if (check.password === password) {
      res.json([
        "exist",
        check.firstname,
        check.lastname,
        check.email,
        check.language,
      ]);
    } else {
      res.json(["notexist"]);
    }
  } catch (e) {
    res.json(["notexist"]);
  }
});

app.post("/dashboard",async (req,res)=>{
  const { email, language } = req.body;
  try {
    const check = await Performance.findOne({ email: email });
    if (check.language === language) {
      res.json(check);
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json(["notexist"]);
  }
});

app.listen(8000, () => {
  console.log("port connected");
});
