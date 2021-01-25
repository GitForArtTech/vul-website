FROM node:12

COPY . /workspace
WORKDIR /workspace
RUN npm install

EXPOSE 3000

CMD [ "node", "./bin/www" ]