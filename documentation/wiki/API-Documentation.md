# API-Routes

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.

## Reviews

- A logged in user may delete one of their own reviews, removing it from the list of visible reviews without causing a refresh/redirect.

  - `DELETE /api/review/:id`

