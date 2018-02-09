from PIL import Image
import pytesseract as pyt
from gtts import gTTS
import io
from wand.image import Image as wi

class Audio:
    def __init__(self, filepath):
        self.fp = filepath # specify path to file

    def makemp3(self, words, mp3name):
        """convert text to mp3"""
        tts = gTTS(text=words,lang='en-uk')
        tts.save("%s" %mp3name)
        print("File %s created" % mp3name)
    
    def generate_audio(self):
    # generate savename from filepath
        sn = self.fp[self.fp.rindex('/')+1:self.fp.rindex('.')]

        # load image/ file
        img = wi(filename=self.fp, resolution=300)
        pdfImage = img.convert('jpeg')

        # OCR
        print("Working ...\n")
        imageBlobs = []

        for img in pdfImage.sequence:
            imgPage = wi(image=img)
            imageBlobs.append(imgPage.make_blob('jpeg'))

        recognized_text = []

        for imgBlob in imageBlobs:
            im = Image.open(io.BytesIO(imgBlob))
            text = pyt.image_to_string(im, lang='eng')
            recognized_text.append(text)

        self.makemp3(recognized_text[0], "audio/%s.mp3" %sn)
