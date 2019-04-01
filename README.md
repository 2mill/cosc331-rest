#WELCOME
Welcome to my RESTful application that running on Node.JS which is utilizing Express, and Mongoose to connect with MongoDB. (Still some small work in progress needs to be completed).

## SETUP
So this project is pretty straight forward, but here are some explenations

###INSTALLATION
1. Get on the CLI and run `git clone https://2mill/cosc331-react/`
2. then run `mkdir cosc331-react && npm i` and wait for it to finish
###ROUTES
* Currently, the project has various weird routes
*`GET`
	*GET can be accessed through `/student`
*`POST`
	*POST can be called through `/post`
*`PATCH`
	*PATCH can be called through `/patch`
*`DELETE`
	*DELETE can be called through `/delete`	

This is a project for my Computer Networking Class
Most of the code here was picked and pulled from various guides and stackoverflow threads.
It's not perfect, but it should not run into terrible errors.(Hopefully it won't crash during testing). There's also no data validation, it will just insert what it has to insert.

PATCHING w/o making sure to throw in the old values will result in the old value being deleted

