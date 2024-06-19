# Usar a imagem base do Node.js
FROM node:14

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Construir a aplicação para produção
RUN npm run build

# Instalar o servidor estático para servir a aplicação
RUN npm install -g serve

# Expor a porta usada pelo servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["serve", "-s", "build"]
