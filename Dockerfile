FROM node:alpine

EXPOSE 80
EXPOSE 443

WORKDIR /src

COPY package*.json ./
RUN npm i

COPY . .

CMD ["node","server"]
