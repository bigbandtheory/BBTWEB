FROM node:8

WORKDIR /usr/images/app

RUN npm install yarn -g
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]