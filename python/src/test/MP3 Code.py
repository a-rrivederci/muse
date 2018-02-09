from gtts import gTTS

def makemp3(words, mp3name):
    tts = gTTS(text=words,lang='en-uk')
    tts.save("%s.mp3" %mp3name)
    print("File %s.mp3 created" % mp3name)

text = "What is up bra?"

makemp3(text, "testmp3")


