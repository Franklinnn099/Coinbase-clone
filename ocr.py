import os
import pytesseract
from PIL import Image
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
for f in os.listdir('images'):
    if f.endswith(('.jpg', '.png')):
        try:
            text = pytesseract.image_to_string(Image.open(os.path.join('images', f)))
            print(f'--- {f} ---')
            print(text[:100].strip())
        except Exception as e:
            print(f'Error on {f}: {e}')
