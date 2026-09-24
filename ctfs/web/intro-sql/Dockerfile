# intro-sqli - imagem web-only (apache + php + sqlite)
FROM php:8.2-apache

RUN apt-get update && apt-get install -y --no-install-recommends \
    sqlite3 \
    libsqlite3-dev \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install pdo_sqlite

RUN rm -f /var/www/html/index.html

COPY index.php /var/www/html/index.php
COPY login.php /var/www/html/login.php
COPY database.sql /var/www/html/database.sql

RUN sqlite3 /var/www/html/database.db < /var/www/html/database.sql

EXPOSE 80
CMD ["apache2-foreground"]
