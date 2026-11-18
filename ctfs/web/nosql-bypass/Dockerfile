# intro-nosqli - imagem web-only (node puro, sem dependencias externas)
FROM node:20-alpine

WORKDIR /var/www/html

COPY server.js users.json ./

EXPOSE 80
CMD ["node", "server.js"]
