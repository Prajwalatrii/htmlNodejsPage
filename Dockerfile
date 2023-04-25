FROM node:alpine

EXPOSE 80
EXPOSE 443
PORT 3000:3000

WORKDIR /src
RUN npm i

COPY ./ .

CMD ["node","server"]
