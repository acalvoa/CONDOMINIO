Condominios A
==============================

development
-----------
To run the code in your development environment:

1. Clone this repo
2. Run `npm install`
3. Run `bower install`

Now with all dependencies installed

4. Start the development server for demo project with `npm run dev`
5. Point your browser to [http://localhost:8888](http://localhost:8888)

-----------------------------------------------

production
----------
To build minified version:

- Run `npm run prod`

***********************************************

##Buenas Practicas

* https://es.wikipedia.org/wiki/SOLID
* https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
* https://en.wikipedia.org/wiki/KISS_principle

***********************************************

##Entidades

Una entidad es toda unidad que tiene valor en la lógica de negocio.

###Administrador

No es una entidad expuesta, quizas no tenga REST.

* administrador/id/dashbaord/id

###Condominio

* condominios
* condominios/id

####Dashboard
* condominios/id/dashboard

###Rendicion

* condominios/id/rendiciones
* condominios/id/rendiciones/id

###Glosa

* rendiciones/id/glosas
* rendiciones/id/glosas/id

###Cobranza

* condominios/id/cobranzas
* condominios/id/cobranzas/id

###Departamento

* condominios/id/departamentos
* condominios/id/departamentos/id

###Servicio

* departamentos/id/servicios (esto trae todos los servicios de un departamento)
* departamentos/id/servicios/id ("una lectura" de un servicio particular en base al ID)
 
* departamentos/id/servicios?service_type=1 (Solo los servicios de agua -donde agua es service type de ID 1- de un departamento)
* departamentos/id/servicios?date_star=01012016&date_end=31012016 (Solo los servicios de un departamento entre una fecha especifica)


###Otros

edificio

******************************************************************

##API

###Material de referencia
* https://github.com/mikekelly/hal-browser
* http://martinfowler.com/articles/richardsonMaturityModel.html

Tiene como punto de partida "entrypoint"

* URL_BASE/entrypoint (GET)
* URL_BASE/login (POST)
* URL_BASE/logout (POST)

** Son URL, van a gatillar acciones, pero no son entidades como tal.

******************************************************************

## Git Commit Guidelines

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation