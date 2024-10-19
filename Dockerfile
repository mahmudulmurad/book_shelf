FROM node:18.17.0-alpine

WORKDIR /app
COPY package*.json ./

RUN npm install -g npm@latest
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

ENV REACT_APP_DATA_URL https://gutendex.com/books/

CMD ["npm", "start"]
