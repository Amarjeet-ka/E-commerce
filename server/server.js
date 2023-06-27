const express = require('express');
const app = express();
const ejs = require("ejs");
const cors = require('cors');
const bodyParser = require("body-parser");
const connectdatabase = require('./config/database.js');
const apiRouter = require('./routes/gridimage.js');
const apiRouter2 = require('./routes/top_collection.js');
const messageRoutes = require('./routes/messageRoutes');
// Calling database connection
connectdatabase;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(req, res) {
  res.render("index");
});

app.use('/api', apiRouter);
app.use('/api', apiRouter2);
app.use('/api3/', messageRoutes);

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('\x1b[35m%s\x1b[0m', `Server running on port ${port}`);
});
