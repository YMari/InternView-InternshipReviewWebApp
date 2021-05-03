# InternView Application - Internship Review Web Application
### Team Members: [Isabel A. Muñiz](https://github.com/isaandrea12), [Kathiana Díaz](https://github.com/kathianadiaz), [Kenneth Rosario](https://github.com/kenneth-rosario), [Jose Maldonado](https://github.com/jose-maldonado), [Jose Rivera](https://github.com/jvserivera), [Jose Vera](https://github.com/josevera7), [Yavier Mari](https://github.com/YMari)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## [Click Here for the Application Documentation](https://drive.google.com/file/d/1MSre7504lu_Xm-fdM41fR13kfM-gr5Sm/view?usp=sharing)

## [Click Here for the Application Video Demo](https://youtu.be/iJP8dUgEm0E)

## [Click Here for the Current Application Deployment](https://intern-view-internship-review-web-app.vercel.app/)

### Worked while taking INSO4116 (Software Design) course at UPRM, Fall 2020.

InternView's goal was to make a site that provided an opportunity for student from Puerto Rico to share their experiences with internships/interviews so that other students could learn from them. The users would be able to create reviews on companies that they had worked/interviewed with and let other's know of their experiences.

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

* If you want to exit just press ctrl + C twice to kill container

* To cleanup system and remove all docker containers and volumes run:
```
docker-compose down
```
* VS Code docker extension is very good for managing, attaching to, and stoping docker containers

* Simple docker overview : https://www.youtube.com/watch?v=_dfLOzuIg2o

* To change env variables go to docker-compose.yml file
