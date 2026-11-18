import os
import random
import subprocess
from PIL import Image, ImageDraw, ImageFont

OUT_PATH = "/var/www/html/evidence.jpg"
FLAG = os.environ.get('CHAPEU_FLAG') or os.environ.get('FLAG') or 'sem-chave'

W, H = 800, 600
img = Image.new("RGB", (W, H), (20, 20, 22))
draw = ImageDraw.Draw(img)

random.seed()  # seed aleatoria a cada build/run, imagem muda levemente
for _ in range(4000):
    x, y = random.randint(0, W - 1), random.randint(0, H - 1)
    g = random.randint(15, 40)
    draw.point((x, y), fill=(g, g, g + 2))

draw.rectangle([40, 40, W - 40, H - 40], outline=(80, 70, 30), width=2)
font = ImageFont.load_default()

draw.text((60, 60), "EVIDENCE #CPH-0417", fill=(180, 150, 60), font=font)
draw.text((60, 85), "Camera recovered at scene - unit 02", fill=(140, 140, 140), font=font)
draw.text((60, H - 70), "chapeu de palha hacker club - forensics", fill=(90, 90, 90), font=font)

img.save(OUT_PATH, quality=85)

# Embute a flag nos metadados EXIF/IPTC usando exiftool real,
# assim o arquivo final e identico ao que um jogador acharia num caso de verdade.
subprocess.run([
    "exiftool",
    f"-Comment={FLAG}",
    f"-UserComment={FLAG}",
    "-Artist=chapeu de palha hacker club",
    f"-ImageDescription=Camera recovered at scene. Flag: {FLAG}",
    "-Software=forensics-challenge-generator",
    "-overwrite_original",
    OUT_PATH,
], check=True)

print(f"Imagem gerada em {OUT_PATH} com flag embutida.")
