FROM node:10.15.1

WORKDIR /usr/src/integration

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "start"]