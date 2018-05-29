# MyReads Project

This is my first project using React, the goal was to be able arrange books on the shelfs.
Initially we have 7 books which are loaded from API, and 3 shelfs. We can then search for more
books inside the search component and place them on the shelfs.
Books that user arranges and keeps on adding are hard coded inside the state of App.
Server never gets updated, so all of your changes will be lost once the page is refreshed. You will end up with 7 books to begin with !


## Start

* install all project dependencies with `npm install`
* start the development server with `npm start`


## Backend Server

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is for Front-End Nanodegree program. Therefore, I most likely will not accept pull requests.
