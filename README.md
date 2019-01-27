# :hamburger: Eat-Da-Burger-App

### Overview
---
It is a restaurant app that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

The app will store every burger in a database, whether devoured or not.

### Getting Started
---
* Clone down repo ``` git clone git@github.com:liaswapna/Eat-Da-Burger.git```.
* Navigate to the repo ```cd Eat-Da-Burger```.
* Run command ```npm install``` in Terminal or GitBash
* Run command ```node server``` to start ther server.

### Technologies Used
---
* HTML5
* CSS3
* Bootstrap
* Node.js
* Express
* Express-handlebars
* mysql

### Dependencies
---
```js
{
    "express": "^4.16.4",
    "express-handlebars": "^3.0.0",
    "mysql": "^2.16.0"
}
```

#### Code Explanation
---
* **server.js** : File that sets up the Express server, specifying the port number, the npm packages that need to be loaded, and also the routes, which we have externalized.

* **HTML files:** Servers the front-end of the app.
    * home.html:  This file serves the home page with navigation links to survey page and github.
    * survey.html: This page helps the user to finish the survey and submit it, there by getting the Best match.
* **Routing files:** serves the back-end-routing logic.
    * htmlRoutes.js : This route file display the survey and the homepage based on the URL that is accessed.
    * apiRoutes.js: API routes send back existing content in our server-side data or add new friends.
* **Logic:** Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object.
    * A modal is then toggled, displaying the the best match to the person who just took the survey.
    * Friends are stored as such:
        ```
        {
            name: "lia",
            photo: "http://via.placeholder.com/640x360",
            scores: [5, 4, 2, 3, 1, 2, 5, 2, 1, 3]
        }
        ```

### Demos
---
* Eat-Da-Burger-App
    * [Heroku Link]()
