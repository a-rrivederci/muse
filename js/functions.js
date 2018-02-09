var multer  = require('multer');
var Tesseract = require('tesseract.js')
var audiofunc = require('./audiofunc')


module.exports = {

    RunTesseract: function (req)
    {
        Tesseract.recognize(req.file.path)
        .then(function(result){
            OCRText = result.text;
            console.log(' ');
            console.log(OCRText);
        })
        .finally(function(OCRText){
            audiofunc.ReceiveAudio(OCRText);
        })
    }
}