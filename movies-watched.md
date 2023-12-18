MOVIES WATCHED CRUD APP PRACTICE 


This is a practice CRUD App. The app will keep a list of movies that you, the user, would like to watch that you haven't seen yet.

The app allows you to add movies you haven't seen to this list and allows you to reference the list 
at a later time.

Once the movie has been watched, it allows you to add the movies watched to another list and allows you to rate the movies between 0-5 stars. 

The CRUD app will be using MongoDB as the database, express, HTML, CSS and Javascript. 


Later on, the app may be recreated using MVC method along with Schema

11/18/2022



Steps to complete app: 

- add client side javascript file
- add server side javascript file
- add css file
- add ejs file 
- add mongoDB string and add to env file 
- install express, ejs, node, cors, dotenv

Whats going to happen in app:

Main page: 
1. get request to go to main page
2. add movie to list on main page
3. delete movie on main page

Rated Page:
1. click movie that you finally watched and it should go to the completed list.(get and update request)
2. update list by rating by stars or input box where you can put in number(update request)
3. delete movie if misspelled(delete)


Issues having:

- im trying to add a delete button next to the movies in the list. When you press the delete button, it should delete the movie from the database. However, when pressed, it says it cant find the route for deleteMovie