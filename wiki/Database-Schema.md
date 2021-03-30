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
