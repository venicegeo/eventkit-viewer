FROM node:7.1.0-slim

# Create app directory
WORKDIR /var/lib/eventkit
COPY ./package.json /var/lib/eventkit/
RUN apt-get update && apt-get install -y ruby git libcairo2-dev libjpeg62-turbo-dev libpango1.0-dev libgif-dev build-essential g++
RUN npm install npm@4.0.2 --quiet
RUN npm install --quiet
RUN gem install coveralls-lcov

COPY ./webpack.config.js /var/lib/eventkit/

CMD ["npm", "start"]
