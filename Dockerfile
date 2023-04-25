FROM node:alpine

EXPOSE 80
EXPOSE 443
EXPOSE 3000

WORKDIR /src
RUN npm i

COPY ./ .

CMD ["node","server"]
