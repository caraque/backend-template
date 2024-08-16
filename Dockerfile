# Comenzamos desde un nodo base
FROM node:20.9.0

LABEL authors="Christian Araque"

# Crea el directorio de la aplicación en el contenedor
WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

# Compila la aplicación
RUN yarn build

# Expone el puerto 3000 para que la aplicación sea accesible externamente
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD [ "node", "dist/main.js" ]
