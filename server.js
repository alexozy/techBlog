// Dependencies
const express =require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');

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

// TODO: adjust this line of code!
// TODO: set up controllers
app.use(require('./controllers'));

// Starts the server to begin listening
// app.listen(PORT, () => {
//     console.log(`Current Port: ${PORT}`);
// })


// the force:false is useful here because it would drop and re-create databases on startup!

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening  ${PORT}`)); 
});
