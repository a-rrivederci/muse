var express = require('express');
var app = express();
var fs = require("fs");
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var multer  = require('multer');
var PythonShell = require('python-shell');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//var cryptFile = sendFileName();


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/',function(req,res){
    res.send("Hello The application is running!")
    
})

app.get('/file_load', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
})


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        var ext = require('path').extname(file.originalname);
        ext = ext.length>1 ? ext : "." + require('mime').extension(file.mimetype);
        require('crypto').pseudoRandomBytes(16, function (err, raw) {
            cb(null, (err ? undefined : raw.toString('hex') ) + ext);
        });
    }
});

var upload = multer({ storage: storage });

app.post('/file_upload', upload.single('Image'), function (req, res) {
    
    console.log(req.file);
    res.send(req.file);
    res.send(req.file);
    req.file.f
    RunPython(req,res);
    
});

function RunPython(req,res)
{
    var cryptFile = req.file.path;
    var cryptFileName = req.file.filename;
    //req.file.filename;
    console.log(' ');
    console.log(cryptFile);
    console.log(' ');
    //Executing the Python Script
    
    var options = {
        mode: 'text',
        pythonPath: '/usr/bin/python3',
        pythonOptions: ['-u'],
        scriptPath: '/home/ubuntu/muse/src',
        args: ['/home/ubuntu/muse-server' + cryptFile]
    }
    
    PythonShell.run('main.py', options, function(err,results)
    {
        if(err) 
            console.log(err);
        else
            console.log(results);
            sendAudio(cryptFileName);
    })
}

function sendAudio(cryptFileName)
{
    var cryptFileName1 = cryptFileName.replace('.jpg', '.mp3')
    app.get('/retrive', function(req,res){
        res.download('./audio/' + cryptFileName1);
    });
}

app.listen(port);
console.log('The server is running on: ' + port);