# Use uma imagem base do Node.js
FROM node:18

# Defina o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta em que o backend vai rodar
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["npm", "serve"]