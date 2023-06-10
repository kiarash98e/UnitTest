FROM node:16

# add work dir
WORKDIR /app

# copy dependncy
COPY package.json . 
RUN npm install -f

# copy app files 

COPY . .

# host 
EXPOSE 8000

# start app

CMD [ "node", "server.js" ]