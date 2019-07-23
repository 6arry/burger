const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: false}))

app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));

app.set('view engine','handlebars');

var port = 3000;
app.listen(port);