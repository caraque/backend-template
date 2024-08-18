## Description

Backend Template is a CRUD dedicated to manage backend application managed in [Nest](https://github.com/nestjs/nest).

## Configuration

**Environment**
Create a `.env` file, copy the content from `.env.example` to your new file and add the values.

## Run with Docker

Build and run the `docker-compose.yml` file located in the path /architecture and run `docker-compose up` to build and
run the database and backend app

## Installation

All the manual is created using Yarn. You are free to use <b>npm</b>.

**Yarn**

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

##Swagger

You can get all the Api's in 'http://localhost:3000/api' when the service is running

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
