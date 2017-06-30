const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const router = require('./routers/router');
const logger = require('morgan')


app.use(express.static(path.join(__dirname, "public")));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', router);

app.listen(80, function() {
  console.log('serverr is running at port 80');
})
