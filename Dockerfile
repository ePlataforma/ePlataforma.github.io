# Use a imagem Node.js como base
FROM node:14

# Cria e define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos de dependência para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia os arquivos do aplicativo para o diretório de trabalho
COPY . .

# Compila o aplicativo React
RUN npm run build

# Exponha a porta 5000 (ou qualquer porta que seu aplicativo esteja configurado para usar)
EXPOSE 5000

# Comando para iniciar o aplicativo quando o contêiner for executado
CMD ["npm", "start"]
