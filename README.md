# TS example project

## Как это было достигнуто

1. `npm init` - инициализация проекта (создание `package.json`)
2. `npm install typescript --only=dev --save`
3. создать `tsconfig.json` с таким же содержимым, как в репозитории
4. добавить в `projects.json` команду для компиляции ts  в js:
```json
  "scripts": {
    "start": "tsc --project ./"
  },
```
5. подключить к `index.html` стороннюю библиотеку `requirejs` и наш собранный `bundle.js` (как в репозитории)
6. для сборки/пересборки запускаем: `npm start`

