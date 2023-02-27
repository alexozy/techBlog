// Dependencies
const express =require('express');

// Import express-handlebars

const exphbs = require('express-handlebars');
// instance of handlebars 
const hbs = exphbs.create({});
const path = require('path');

// Set up Express APP
const app = express();
const PORT = process.env.PORT || 3001;

// Set Up Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/dish-routes'));

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on' + PORT);
})