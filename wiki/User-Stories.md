# User Stories

## Users

### Sign Up

- As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  - When I'm on the `/signup` page:
    - I would like to be able to enter my email, username, preferred password, and confirmed password on a clearly laid out form.
    - I would like the website to log me in upon successful completion of the sign-up form.
      - So that I can seamlessly access the site's functionality
  - When I enter invalid data on the sign-up form:
    - I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    - So that I can try again without needing to refill forms I entered valid data into.

### Log in

- As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  - When I'm on the `/login` page:
    - I would like to be able to enter my email and password on a clearly laid out form.
    - I would like the website to log me in upon successful completion of the log-in form.
      - So that I can seamlessly access the site's functionality
  - When I enter invalid data on the log-in form:
    - I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      - So that I can try again without needing to refill forms I entered valid data into.

### Demo User

- As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a demo user without signing up or logging in.
  - When I'm on either the `/signup` or `/login` pages:
    - I can click on a Demo User button to log me in as a demp user.
      - So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

- As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  - While on any page of the site:
    - I can log out of my account and be redirected to a login page.
      - So that I can easily log out to keep my information secure.

## Books

### Viewing Books

- As a logged in _or_ logged out user, I want to be able to view a selection of the most recently added books.

- As a logged in _or_ logged out user, I want to be able to view a specific book and its associated comments.
  - When I'm on the `/books/:id` page:
    - I can view the content of the book, as well as the associated reviews:
      - So that I can understand what people think of the book and add my own review.

### Add a Status to Books

- As a logged in user, I want to be able to add a status to books to indicate whether they are "Read", "Currently Reading" or "Want to Read".
  - When I am on the individual book page, I will be able to change the status.
    - So they will be added to my Read, Currently Reading or Want to Read bookshelves

### Add Books to Bookshelf

- As a logged in user, I want to be able to add books to my bookshelf.
  - When I'm on the `/book/:id` page:
    - I can add the book to my bookshelf by changing the status of the book.
- As a logged in user, I want to be able to view my bookshelves.
  - When I'm on `/home` or any other page:
    - I can click on MyBooks in the navbar to view my bookshelves.

### Adding Reviews

- As a logged in user, I want to be able to add my review by clicking an Add button associated with the book
  - When I'm on the `/books/:id` or `/users/:id/books` pages:
    - I can click "Add Review"
      - So that I share my thought on the book.

### Editing Reviews

- As a logged in user, I want to be able to edit my review by clicking a Edit button associated with the book.
  - When I'm on the `/books/:id` or `/users/:id/books` pages:
    - I can click "Edit" to edit a review I have posted.
      - So if I want to follow-up over time and share more thoughts, I can edit my recollections.

### Deleting Reviews

- As a logged in user, I want to be able to delete my review by clicking a Delete button associated with the book.
  - When I'm on the `/books/:id` or `/users/:id/books` pages:
    - I can click "Delete" to permanently delete a review I have posted.
      - So that when I realize I shouldn't have publicly said something, I can easily remove it.

### Adding Books

- As a logged in user, I want to be add a book to the website to store on my bookshelf.
  - When I'm on the `/home` page:
    - I can click "Add Book"
      - To add a book to the database that will be visible and searchable to other logged in users.

### Deleting Books

- As a logged in user, I want to be delete a book to the website eliminate it from the website permanently.
  - When I'm on the `/books/:id` page:
    - I can click "Delete Book"
      - To delete a book from the database
