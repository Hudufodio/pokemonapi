FROM node:20-alpine

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /usr/projects/app

COPY package*.json ./

USER root

RUN chown -R app:app .

USER app


RUN npm install

RUN npm run build

RUN rm -r /app/node

COPY . .

EXPOSE 3000

CMD ["npm", "start"]