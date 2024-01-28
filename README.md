# Разработка проекта
### Установка зависимостей:
- В папке **_backend_** необходимо запустить команду
   `yarn install`
### Запуск в `dev` режиме 
- В папке **_backend_** необходимо запустить команду
  `yarn run dev` \
Эта камандв не собирает билд приложения, а компилирует файлы ts в js 
в реальном времени, с помошью библиотеки **_ts-node_**
- Дополнительно, есть команда `yarn run dev:test-command` \
Но в этом случае происходит билд приложения, при этом, затрачивается большее время на запуск приложения при внесении изменений.
Не рекомендуется к использованию.

# Билд проекта
- В папке **_backend_** необходимо запустить команду
  `yarn run dev` \
Происходит компиляция ts кода в js, с использованием **_webpack_**,
при этом используется этот следующий файл конфигураци - **_webpack.config.ts_**.
Будет создана папка **_dist_** с минифицированными js файлами.
