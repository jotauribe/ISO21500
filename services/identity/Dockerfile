FROM node:10.15.1

WORKDIR /usr/src/identity

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]