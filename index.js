import { createServer } from 'node:http'
import fs from "fs"
import http from "http"
import express from "express"
import { renderFile } from 'ejs';
import cors from "cors"
import { writeFile } from 'node:fs';
const app = express()
const port = 3000

app.set('views', 'views');
app.engine('html', renderFile);
app.set('view engine', 'html');
app.use(express.json());
app.use(cors())


    app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './views', contentType: 'text/html' });
    //res.sendFile('app.js', { root: './public/javascripts', contentType: 'text/javascript' });
});
    app.post('/', (req, res) => {
        console.log("post received")
    console.log(req.body);
    let id =req.headers.id
    console.log(id);
    writeFile("data/participant"+id+".txt",JSON.stringify(req.body),function(err){
        if (err) throw err;
        console.log("saved");
    });
    res.send('ok');
});



app.use(express.static('./public'));

/** init server */

app.listen(port, () => {
    console.log(`Server is listening on port number: ${port}`);
});

/** init routes */