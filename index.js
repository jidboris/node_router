const express = require("express");
const app = express()
const PORT = 3300
app
    .route('/404')
    .get((req, res) => { });

 app
 .route('/about')
 .get((req,res)=>{});

 app
 .route('/contact-me')
 .get((req,res)=>{});

app.use(express.static(__dirname))
app.get('/', (req,res) => {res.sendFile(__dirname , "/index.html")

})
app.listen(PORT,err => { 
    if (err) {return("/404.html")}
})