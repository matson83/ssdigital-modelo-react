# Usando a imagem do Node.js para o ambiente de build
FROM node:18

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos do projeto
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Expor a porta usada pelo Vite (React)
EXPOSE 5173

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
