FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Устанавливаем легкий HTTP-сервер для раздачи статических файлов
RUN npm install -g serve

# Указываем порт, который будет использоваться
EXPOSE 80

# Команда для запуска сервера
CMD ["serve", "-s", "dist", "-l", "80"]