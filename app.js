const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const passport = require('passport');
require('./config/passport')(passport);
const port = process.env.PORT || 5000;
const toilets = require("./routes/api/toilets");
const comments = require('./routes/api/comments');

const path = require("path");


if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}


mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
  // res.send('feebo');
  res.json({hi: 'feebo'});
});

app.use("/api/users", users);


app.use("/api/toilets", toilets);
app.use("/api/comments", comments);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
