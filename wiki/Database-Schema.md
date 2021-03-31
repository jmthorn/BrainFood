# **Database Schema**

## `user`

| column name | data type | details                   |
| ----------- | --------- | ------------------------- |
| id          | integer   | not null, primary key     |
| username    | string    | not null,                 |
| email       | string    | not null, indexed, unique |
| created_at  | datetime  | not null                  |
| updated-at  | datetime  | not null                  |

- index on `email, unique: true`
- `userId` references `users` table

## `book`

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| cover       | string    | not null,             |
| title       | string    | not null, unique      |
| author      | string    | not null              |
| avg rating  | integer   | not null              |
| rating      | integer   | not null              |
| shelves     | string    | not null              |
| review      | text      | not null              |

- index on `email, unique: true`
- `userId` references `users` table
