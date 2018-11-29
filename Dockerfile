FROM node:10-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
ENV NODE_ENV production
RUN npm run build
EXPOSE 3000
CMD ["node", "server.js"]
USER node
