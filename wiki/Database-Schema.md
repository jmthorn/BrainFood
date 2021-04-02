# **Database Schema**

![](https://cdn.discordapp.com/attachments/827521225587949599/827653536112050236/unknown.png)

---

## `User`

| column name    | data type | details               |
| -------------- | --------- | --------------------- |
| id             | integer   | not null, primary key |
| username       | string    | not null,             |
| email          | string    | not null, unique      |
| hashedPassword | string    | not null, unique      |

## `Book`

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| cover       | string    | not null,             |
| title       | string    | not null, unique      |
| author      | string    | not null              |
| avg_rating  | integer   | not null              |
| published   | datetime  | not null              |

## `Bookshelf`

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| name        | string    | not null              |
| userId      | integer   | not null, foreign key |

- `userId` references `User` table

## `ReadStatus`

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| status      | string    | not null              |
| bookId      | integer   | not null, foreign key |
| userId      | integer   | not null, foreign key |

- `userId` references `User` table
- `bookId` references `Book` table

## `Tag`

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| category    | string    | not null              |

## `Review`

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| author      | string    | not null              |
| rating      | integer   | not null              |
| created_at  | datetime  | not null              |
| userId      | integer   | not null, foreign key |
| bookId      | integer   | not null, foreign key |

- `userId` references `User` table
- `bookId` references `Book` table
