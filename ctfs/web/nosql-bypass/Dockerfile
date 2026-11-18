
FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json .
RUN npm install --omit=dev

COPY server.js ./
COPY public ./public

EXPOSE 80

CMD ["node", "server.js"]
