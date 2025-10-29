FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
CMD ["node", "-e", "console.log('sum(2,3)=', require('./src/sum').sum(2,3))"]
