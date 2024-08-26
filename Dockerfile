FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4500

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4500" ]