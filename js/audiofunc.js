var functions = require('./functions')
var path = require('path');
var gTTS = require('gtts');

module.exports = {
    ReceiveAudio : function(OCRText)
    {
        var des = path.resolve('./audio/' + 'Text.mp3')
        var gtts = new gTTS(OCRText.text,'en');
        gtts.save(des,function(err,result){
            if(err){ console.log(err) }
            else {
                console.log('Download to ' + des + ' ...');
                console.log('Done!');
            }})
    }
}