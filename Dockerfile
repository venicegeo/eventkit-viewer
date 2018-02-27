FROM node:9.2.0-slim

# Create app directory
WORKDIR /var/lib/eventkit
RUN apt-get update && apt-get install -y ruby git libcairo2-dev libjpeg62-turbo-dev libpango1.0-dev libgif-dev build-essential g++
COPY ./package.json /var/lib/eventkit/
COPY ./npm-shrinkwrap.json /var/lib/eventkit/
RUN npm install --quiet
RUN gem install coveralls-lcov

COPY ./webpack.config.js /var/lib/eventkit/

CMD ["npm", "start"]
