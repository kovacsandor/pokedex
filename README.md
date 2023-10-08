# Pokedex

## Requirements

Write a Pokedex webapp:
- use this api: https://pokeapi.co/
- search pokemons by name
- save pokemons as favourites (saving in the browser is sufficient)
- show pokemon details when you click on the search result

Optional:
- authentication
- saving favourites in database
- filter by type, ability, attack
- visuals: https://www.figma.com/file/doC8JTVy6ScL1cimLbeniN/Minimal-Pokedex?node-id=0%3A1

## Prerequisites
- docker
- npm 
- node version 20

## Getting started

- don't forget to sign in to dockerhub
    - otherwise pulling node image will fail
    - `docker login`
- navigate to the project root
- run `sh shell-scripts/init.sh`
- stop all docker-compose processes
- make sure that `localhost:80` and `localhost:27017` is not in use
- still in the project root run `docker-compose up`
- anytime you make a change outside of any service's src folder stop and run `docker-compose up --build`
- visit http://localhost/ in the browser

## Running tests
- navigate to the project root
- run `sh shell-scripts/test.sh`

## User experience
- favourites are loaded automatically
- user can search pokemons by name
- user can see a list of previously searched pokemons (stored in memory) and favourites
- user can see pokemon details
- user can add favourite in details

## Features
- init.sh script
  - installs packages
  - copies or creates the necessary .env files
- full-stack web application
  - storing favourites in a database
  - not having to query anything to see favourites
  - showing favourites is browser (local storage) independent
- shared library
  - shared types and logic
  - using local package (not production ready)
- openapi
  - generated api calls for the client
  - generated code is shared between the services
  - api calls are kept in sync
  - api tests are also in sync
- development mode
  - docker compose
    - code is shared with volumes for live reloading and restarting
    - database included
    - if there is a change in the shared library compose needs to be restarted
  - live reload in the browser
  - restarting server if code change is detected
- getting database url from envs
  - easy to add more databases in development mode, no need to use more databases which is easier to work with
  - easy to add separate databases in production
- vscode is supported out of the box
  - formats code
  - organises imports
- prettier is used, related extension is recommended to install
- tailwindcss for the least css possible
- data is mapped out of compose via volumes, so you don't lose your data between development sessions
- testing with in-memory database for independent tests
- error handling middleware
- loading state handling on the client
- client-side caching
- testing main functionalities
- validating requests
- search pokemons
- add favourites
- list favourites
- site build
- search pokemons when user hits enter

## Out of scope
- authentication
- production mode
- better way of sharing code than volumes and local file paths
- running the app independently from used ports
- husky pre-commit hook
- deployment / separate databases
