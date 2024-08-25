## Base Image
FROM node:latest

##WDR
WORKDIR /usr/src/app

##Copy source code;
COPY . .

##Install package
RUN npm install

##Run port
EXPOSE 4000

##Run applications
CMD [ "npm" , "start"]