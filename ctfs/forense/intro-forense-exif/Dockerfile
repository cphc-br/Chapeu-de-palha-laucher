# intro-forense-exif - imagem web-only (python + exiftool)
FROM python:3.12-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    libimage-exiftool-perl \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir Pillow

WORKDIR /var/www/html

COPY generate.py /var/www/html/generate.py
COPY index.html /var/www/html/index.html

EXPOSE 80
CMD ["sh", "-c", "python3 generate.py && python3 -m http.server 80 --directory /var/www/html"]
