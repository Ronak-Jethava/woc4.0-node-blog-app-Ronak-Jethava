const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configuring Express handlebars
var exphbs  = require('express-handlebars');

var hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.static('static'));

require(path.join(__dirname, '/routes/blog'))(app);

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`)
})




