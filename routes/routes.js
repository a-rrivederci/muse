var fs = require('fs');

module.exports = function(app)
{
    app.get('/', function(req, res){
        res.end("Image Backend API")
    });

    app.post('/upload', function(req, res){
        console.log(req.files.image.originalFilename);
        console.log(req.files.imag.path);

            //Read files
            fs.readFile(req.files.image.path, function(err,data){
                var dirname = "/home/ubuntu/muse/images";
                var newpath = dirname + "/uploads/" + req.files.image.originalFilename;
                //Write Files
                fs.writeFile(newpath, data, function(err){
                    if(err)
                    {
                        res.json({'response': "Error"});
                    }
                    else {
                        res.json({'response': "Saved!"})
                    }
                });
            });
    }); 

    app.get('/uploads/:file', function(req,res){
        file = res.params.file;
        var dirname = "/home/ubuntu/muse/images";
        var img = fs.readFileSync(dirname + "/uploads" + file);
        res.writeHead(200, {'Content-Type' : 'image/jpg'});
        res.end(img, 'binary');

    });
};