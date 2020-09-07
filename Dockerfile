FROM node:lts-alpine

WORKDIR /learning-pug/
COPY package.json package-lock.json /learning-pug/
RUN npm ci --only=production
COPY . /learning-pug/

EXPOSE 3000

CMD npm start