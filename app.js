const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const passport = require('passport');
require('./config/passport');
const port = process.env.PORT || 5000;


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



app.listen(port, () => console.log(`Server is running on port: ${port}`));
