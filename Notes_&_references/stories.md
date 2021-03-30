https://docs.google.com/document/d/1Z_QY8kLWnM70M_XBUL3py4IQxhf3I2b6UcRv2e3-gXQ/edit#


# User Stories


### New User:
"As a new user, I want to flag books, so that I can add books?".
<br/><br/>

### Current User:
"As a logged in user, I want to flag(read(review)/reading/want to read) existing books, so that I can track my reading progress
and share books with my community".* Ideal situation
<br/><br/>

### Demo / Logged Out User:
"As a logged out user, I want to see book reviews, so that I can get a better understanding of books I want to read?".
<br/><br/>


## Questions for Developing Acceptance Criteria

1. Will the user enter a username or an email address to login?
*     User will login via email and password


2. What routes should we use for login?
*     User will login via /login route


3. Where should the user be redirected after login?
*     User will be redirected to the / homepage Bookshelf

4. Will we allow OAuth authentication via a third party?
*     Not yet -- maybe in a future story
      ---SKIP FOR NOW

5. What happens if the user doesn't exist yet?
*     Display the message Invalid Login :( please try again.


6. What happens if the user enters the wrong password?
Display the message Invalid Login :( please try again.


7. Should this story include allowing a user to reset their password?


*     Not yet -- maybe in a future story
Forgot password option?


8. Should logging in use session-based or use token-based authentication?


*     We will use token-based auth for now (csrf and cookieParser)

&emsp;




# QUESTIONS - USER STORIES

### New User:
"As a new user, I want to flag books, so that I can add books?".
1.  What are the requirements (name, email, password, DOB) for creating a new account?
2.  Can users sign up for newsletter?
3.  Can users set reading goals?
4.  Can users follow their favourite genres(check boxes next to the genre) and save their favourites?
5.  Depending on what’s saved as favourite genres, suggested books will be showed to them accordingly.
6.  Each book will have three statuses: Read, Reading, Will Read
7.  Book shelves have a edit function to remove and add books


&emsp;

### How will the user create an account?
&emsp;
- User will login via email and password
- Fill out sign-up form and hit submit/signup after email, name & misc. Required Fields have been submitted
What if credentials invalid? (What kind of validation?)
- User will login via email and password



![Favorite Genres](/Pictures/Favorite-genre-checks.JPG)

![MyBooks](/Pictures/goodreads-mybooks_page.JPG)


## Ideas

    Post Apocalyptic
    Autobiographies
    Philosophy
    Spirituality
    History
    Classics
    Agriculture
    Religion
    Educational:




## Self-help categories :
    recovery book
    exercise-type book
    step-by-step type book
    progression type book
    dieting books
    Prepping books
    Addiction books
    Post-Traumatic Stress books



## Clone:
* https://github.com/Bhammy/Shel
* https://good-reads-full-stack.herokuapp.com/#/books/1
* https://github.com/mikeroess/goodbooks
* https://github.com/CJButton/mangaReads
* https://github.com/jcbalcita/GoodRecords
* https://github.com/ygu93/GoodAnimes
<br/>
<br/>

## WIKI Outline -Home
**Description =


### MVP List
1. Books
2. Bookshelves
3. Reviews
4. Read Status
5. BONUS Search across multiple models
6. BONUS Tags

### Wireframes
1. /home
2. /bookshelf
3. /profile - optional*

### Schema
1. Users
2. Friends
3. Books
4. Bookshelves
5. Reviews
6. Genres

-Routes (GET / POST / PATCH / PUT / DELETE)

- Seed Data
1. Books
2. Bookshelves
3. Users
4. Reviews







<br/><br/>
## Questions:
How is our group time structured over the planning week?
