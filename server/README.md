1. Создается корневой файл index.js, в котором идут подключения к базе и т.д.
2. Нужно создать модели сущностей, которые будут созданы в БД.
3. Необходимо создать роуты, это пути запросов к серверу, обьединить их в 1 файл и передать его в корневой index.js
4. Чтобы не перегружать файлы роутеров, нужно логику запроса вынести в отдельные файлы - контроллеры. В контроллере создается одноименный клас, в котором есть одноименные функции, к которым потом можно обратиться в роуте: класс.метод.
5. ApiError- универсальный обработчик ошибок для всех контроллеров