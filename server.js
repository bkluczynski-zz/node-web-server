const express = require('express');
const hbs = require('hbs');

const app = express();

const path = require('path');

hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.set('view engine', hbs);
app.use(express.static(path.join(__dirname, '/public')));
hbs.registerHelper('getCurrentYear', () =>
  new Date().getFullYear());

app.get('/', (req, res) => {
  // res.send('Hello Express');
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome to my website',
    currentYear: new Date().getFullYear(),
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear(),
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Wrong endpoint typed',
  });
});

app.listen(3000, () => {
  console.log('server is up on the port 3000');
});
