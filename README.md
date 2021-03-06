# [product-details-react](https://github.com/CodeTrafficker/product-details-react)

## React demo of a product details page 

Challenge: Display a responsive/"mobile first" design of products, accessing the products' details from the json string provided.

Because of a lack of CORS permissions, this demo uses a json file saved out from 

 https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json

 ... to populate a display grid showing product images, their titles, and prices. The grid's css uses flexbox to lay out mobile to desktop views (1 column, 2 columns, 3 columns), instead of importing a library such as Bootstrap or Foundation.

### On the web
A recent build is currently hosted on [Surge](https://surge.sh/) at:
http://prod-details-demo.surge.sh/

## Installation

This guide assumes you already have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

Clone or download master branch from Github to your local work directory.

Maneuver to local version of /product-details-react/

Run 

```npm install```

then

```npm start```

This single page should then open in your browser.

## To-dos cards on this project's "Github projects" board:
- thumbnail slideshow per product.
- SEO meta tags via React instead of static in head tag
- testing
