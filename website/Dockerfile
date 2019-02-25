FROM node:10.15.1

WORKDIR /usr/src/website

COPY package.json .

RUN npm install

COPY . .

RUN npm install -g @angular/cli

RUN npm rebuild node-sass --force

EXPOSE 4200

CMD ["npm", "run", "start"]