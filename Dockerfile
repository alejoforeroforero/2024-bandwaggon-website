FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4500

CMD [ "npm", "run", "dev", "--", "--host", "68.183.136.243", "--port", "4500" ]