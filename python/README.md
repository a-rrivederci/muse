# Muse :scroll: [![Build Status](https://travis-ci.org/attackle/muse.svg?branch=master)](https://travis-ci.org/attackle/muse)
Muse text-to-speech reader

# TODO
 - [ ] Test with multiple images
 - [ ] Implement acurracy test
 - [ ] Implement speed test
 - [ ] Improve computational time
 - [ ] Get OCR up to 85% accurate

# Dependencies
 - [Python 3.5](https://www.python.org/downloads/) and above
 - [Pillow](https://pillow.readthedocs.io/en/4.3.x/) fork of Python Imaging Library PIL
 - [Pytesseract](https://pypi.python.org/pypi/pytesseract)
 - [Google Text to Speech](https://pypi.python.org/pypi/gTTS)
 - [Wand](http://docs.wand-py.org/en/0.4.4/)
 - [Opencv](https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_tutorials.html)

# Setup
```bash
    # install dependencies
    pip3 install pillow pytesseract gtts wand

    # make appropriate changes to paths main.py

    # run script
    $ python3 src/main.py images/[filename]
```
