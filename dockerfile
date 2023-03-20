FROM node:14
RUN git clone https://github.com/missnora07/Test-Ig-Bot /app
WORKDIR /app
RUN npm install 
EXPOSE 3000
CMD ["node", "index.js"]