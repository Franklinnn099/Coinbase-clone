import os
from PIL import Image

for f in os.listdir('images'):
    if f.endswith(('.jpg', '.png')):
        print(f"{f}: {Image.open(os.path.join('images', f)).size}")
