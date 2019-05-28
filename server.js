const express = require('express');
const app = express();
const Router = express.Router();
const PORT = process.env.PORT || 4000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //Allows anyone to access rest-api via client-side
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept, Authorization'); //Allowed methods to access
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next();
})

app.get('/metadata', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=' + yourkey;
    res.redirect(uri)
})

app.get('/article', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=' + yourkey;
    res.redirect(uri)
})

app.get('/list', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=' + yourkey;
    res.redirect(uri)
})

app.get('/email', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=' + yourkey;
    res.redirect(uri)
})

app.get('/shared', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=' + yourkey;
    res.redirect(uri)
})

app.get('/viewed', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=' + yourkey;
    res.redirect(uri)
})

app.get('/reviews', (req, res) => {
    const yourkey = 'CZzmHmsadvOuRfK7qU5YRGBR4XdWk1PF';
    const uri = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=' + yourkey;
    res.redirect(uri)
})

app.use((req, res, next) => {
    const error = new Error('Not Found!')
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

app.use('/nyt', Router);
app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
})