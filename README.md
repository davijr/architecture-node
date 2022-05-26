# Node.js Architecture
Initial Node.js Architecture

## Functional Requirements 🌟
[ ] Clean Architecture
- [ ] Layers
  - [ ] Models
  - [ ] Services
  - [ ] Controllers
  - [ ] Routes
  - [ ] Config
[ ] Authentication System
[ ] Production Ready Application (with Build)
[ ] Shell scripts for creation with custom params/options

## Non-Funtional Requirements 🌟
[x] Postgres Integration (Sequelize && pg)
- [x] (DEV) Docker Image for local tests
[ ] AD Integration
[x] Express
[x] dotenv
[x] (DEV) Typescript
[x] (DEV) eslint
- [x] (DEV) eslint extension on VS Code
[x] (DEV) Sucrase
[x] (DEV) Nodemon - Live reload
[x] (DEV) Pino - Logger
[x] (TEST) Jest
- [ ] 100% Coverage
- [ ] All Tests OK

## Business Rules 🌟
[ ] Ready for the first custom Business Rule

### Environment Variables (.dev)
PGUSER=<user>
PGHOST=<host>
PGPASSWORD=<password>
PGDATABASE=<database>
PGPORT=<port>


### Command to generate models

  npm i -D sequelize-auto
  sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName]

* The one used in local environment:

  npx sequelize-auto -h localhost -d postgres -u postgres -x 12345 -p 5432 -s bzdf --dialect postgres -o ./src/models/generated --caseModel p --caseProp c --caseFile p --lang ts

### Local Environment Common Erros

* Error mkdir /host_mnt/c: file exists when restarting docker container with mount #1560

  // TODO
  https://linuxtut.com/en/579ab597e4015b9f19fe/






