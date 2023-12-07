## Description:

Using the provided data and the basic react.js application that has been created for you, do the following.

## Project structure

- server: fake backend server (won't touch in this exercise)
- src: SPA react application with the following structure:
  - pages: pages of the application
  - App.tsx: main application component
  - index.tsx: entry point of the application

## User stories:

- As a supplier I want to be able to get a list of products from the backend
  - Fetch list of products from the following endpoint: http://localhost:4441/products using library of your choice
- As a supplier user I should be able to see my catalog in a table format
- As a supplier user I should be able to see the table rows with the category with the highest number of occurrences highlighted in yellow
  - Implement logic on a client-side
  - If there are multiple categories with the same number of occurrences, highlight all of them
- As a supplier user I should be able to search by product name using `?search` query parameter

## Bonus tasks:

- Pending requests:
  - Fetch list of categories from the following endpoint: http://localhost:4441/categories using library of your choice
    (we won't use categories in this exercise, but we assume we need them for other parts of the application, e.g. filtering)
  - Add navigation to the product details page by clicking on the product name
    (Navigation should lead to the following URL: http://localhost:3000/products/{product_id})
  - Make sure no pending requests are left behind when navigating to the product details page
- Add retry policy for the backend requests (in case of network failure)
  - Failed request should be retried 3 times with 1-second delay between retries
- Add debounce to the search requests

## Trouble shooting

System Preferences >> Network >> press Advanced >> TCP/IP tab >> on Configure IPv6 select Link-local only and apply
