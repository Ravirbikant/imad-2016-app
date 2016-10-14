var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleOne:{
    title: 'Article One | Ravi Kant Jha',
    heading: 'Article One',
    date: 'Oct 13, 2016',
    content: `
             <p>
                This is the first article and in the next step I will allign this web-page to my home page. `
                
},
    articleTwo:{
    title: 'Article Two | Ravi Kant Jha',
    heading: 'Article Two',
    date: 'Oct 13, 2016',
    content: `
             <p>
                This is the second article and in the next step I will allign this web-page to my home page. `
               },
    articleThree:{
    title: 'Article Three | Ravi Kant Jha',
    heading: 'Article Three',
    date: 'Oct 13, 2016',
    content: `
             <p>
                This is the third article and in the next step I will allign this web-page to my home page. `
               },
};

function createtemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmltemplate =`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            <p>
             ${content}
        </div>
        </div>
    </body>
    </html>
`;
    return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res) {
  res.send(createtemplate(articleOne));
});

app.get('/article-two', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
