# Imagen base para construir la imagen Docker
FROM node:18-alpine



# Directorio de trabajo en la imagen Docker
WORKDIR /app

# Copiar los archivos necesarios para construir la imagen Docker
COPY package*.json ./


RUN apk --no-cache add --virtual .builds-deps build-base python3

RUN yarn

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto 4200
EXPOSE 4200

# Ejecutar el comando de inicio de la aplicación
CMD ["yarn", "start", "--host", "0.0.0.0"]

