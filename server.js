const express = require('express');
const hbs = require('hbs');
const port = process.env.port || 4040;
let app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view-engine', hbs);
// middleware
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome to my website :-)',
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    welcomeMessage: 'About Page',
  });
});

app.get('/me', (req, res) => {
  res.json({
    name: 'Dhruv Prajapati',
    email: 'dhruvkumar.prajapati@gmail.com',
    age: 28,
  })
});

app.get('/bad', (req, res) => {
  res.json({
    status: '404',
    errorMessage: 'Unable to fulfill the request'
  })
});


app.listen(port, () => {
  console.log(`Server is listing on ${4040}`);
});
