from PIL import Image
import pytesseract
#pytesseract.pytesseract.tesseract_cmd = 'C:/Program Files (x86)/Tesseract-OCR/tesseract'
pytesseract.pytesseract.tesseract_cmd = 'C:\Program Files (x86)\Tesseract-OCR\tesseract'
#tessdata_dir_config = '--tessdata-dir "C:\Program Files (x86)\Tesseract-OCR\tesseract"'

pytesseract.pytesseract.tesseract_cmd = 'C:/Program Files (x86)/Tesseract-OCR/tesseract'

im = Image.open("sample1.jpg")

data = pytesseract.image_to_string(im, lang = 'eng')

print(data)
