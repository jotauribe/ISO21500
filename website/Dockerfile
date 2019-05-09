FROM node:10.15.1

WORKDIR /usr/src/website

RUN npm install -g @angular/cli

COPY package.json .

RUN npm install

COPY . .

RUN npm rebuild node-sass --force

EXPOSE 4200

CMD ["npm", "run", "start"]