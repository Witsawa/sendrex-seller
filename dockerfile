FROM node:7.4

MAINTAINER Nattaphat Laoharawee <nattaphat@witsawa.com>

ADD https://www.npmjs.com/install.sh ./install.sh
RUN sh install.sh
RUN npm install -g cordova
RUN npm install -g ionic
RUN npm install -g gulp