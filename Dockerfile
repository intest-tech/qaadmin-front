FROM node:lts-alpine

# install simple http server for serving static content
RUN npm config set registry https://registry.npm.taobao.org \
  && npm install -g serve

# make the '/kae/app' folder the current working directory
WORKDIR /kae/app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080

CMD [ "serve", "dist", "-s" ]