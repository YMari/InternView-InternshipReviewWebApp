# INSO4116 - Team B (InternView)
### Team Members: [Isabel A. Muñiz](https://github.com/isaandrea12), [Kathiana Díaz](https://github.com/kathianadiaz), [Kenneth Rosario](https://github.com/kenneth-rosario), [Jose Maldonado](https://github.com/jose-maldonado), [Jose Rivera](https://github.com/jvserivera), [Jose Vera](https://github.com/josevera7), [Yavier Mari](https://github.com/YMari)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

* Dev environment setup:
* Install Docker and docker compose
* Initial Build:
```
npm install
npm install -g db-migrate db-migrate-pg
docker-compose build
```

* Everytime you want to start nextjs only run
```
docker-compose up nextjs 
```

* If you want to exit just press cntl C twice to kill container

* To cleanup system and remove all docker containers and volumes run:
```
docker-compose down
```
* VS Code docker extension is very good for managing, attaching to, and stoping docker containers

* Simple docker overview : https://www.youtube.com/watch?v=_dfLOzuIg2o

* To change env variables go to docker-compose.yml file
