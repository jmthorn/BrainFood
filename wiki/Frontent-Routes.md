# User-facing routes

## `/login`

### Log in page

This page displays a log in form

- `GET /login`
- `POST /login`

## `/signup`

This page displays a signup form.

### Sign up page

- `GET /signup`
- `POST /signup`

## `/`

This page displays ...

- `GET /`
  `

## `/books`

This page displays all books.

- `GET /`

## `/books/:id`

This page displays individual book with associated comments, as well as a navigation bar with login/signup or logout buttons. Logged in users can comment on this page and can update or delete their comments.

- `GET /books/:id`
- `POST /books/:id/comments`
- `DELETE /books/:id/comments`
