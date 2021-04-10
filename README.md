# Express Project Skeleton

Use this project skeleton as a starting point for structuring your app. Things to note

- Sequelize configuration has not yet been added -- you will need to set that up yourself
- You may find yourself wanting to use javascript -- js files can be added in `public/javascripts` and should be appended to the Pug templates as needed
- CSS files can go in `public/stylesheets` and also will need to be added to Pug templates

## Welcome to BrainFood

Our website will allow you to browse through books aimed at personal development. You will be able to add books to your custom bookshelves, and add ratings and reviews to each book.

A live Link to our website can be found here: https://brainfood-app.herokuapp.com/users/signup

## Technologies Used to build our awesome website

- HTML (using PUG), Vanilla CSS, Javascript (Front-end)
- Heroku (hosting services) (Front-end)
- csurf, dotenv, bcrypt, cookie-parser (Back-end)
- express, express-session, express-validator (Back-end)
- nodemon (Back-end)
- postgreSQL, sequelize (Back-end)

## Project on Github

- [BrainFood](https://github.com/jmthorn/BrainFood)

## Functionalities

- User authentication is completed by hashing passwords using bcrypt js library (csurf protected as well)
- Only user/readers who are logged in can access the home page, the bookshelf page and the individual books page
- Once logged in a user can only edit/delete books, reviews and bookshelves that they have created
- Used Modals to render editing features
- Implemented AJAX when creating a comment on a specific book page
- A user can filter their books by choosing a pre-defined or custom bookshelf
- Can access the specific books

## Our routes code snippet:
```

```

## The BrainFood Contributors

🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠

- ===[@jmthorn](https://github.com/jmthorn)
- ===[@keithmellea](https://github.com/keithmellea)
- ===[@Jc-008](https://github.com/Jc-008)
- ===[@Skulllady](https://github.com/Skulllady)
