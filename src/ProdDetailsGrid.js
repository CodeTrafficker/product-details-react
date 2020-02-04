import React from 'react';
import './prodDetailsGrid.css';
// import products from './api/products.json';

const ProdDetailsGrid =()=> {

  const root = document.getElementById('root');
 
  const fetchWestElm = () => {
     // Had to move json file to /public/api/
    const productUrl = '/api/products.json';

    // NOPE - CORS on westelm not set to allow.
    //const productUrl = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';  
    // window.fetch(productUrl, {
    //   method: "GET",
    //   mode: 'cors',
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //       'Content-Type': 'application/json'
    //     // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" // otherwise $_POST is empty
    //   }
    // })

    window.fetch(productUrl)
    .then(async function(response) {
        let jsonResponse = await response.json();
        prodGrid(jsonResponse);
    })
    .catch(function(err) {
        console.log('err! ', err);
        const errMsg = '<h2>Sorry - We are having technical difficulties!</h2>';
        root.insertAdjacentHTML('beforeend',errMsg);
    });
  }

  // single product hero with title
  const singleProduct = (jsonResponse, index) => {
    let thisImg = jsonResponse.groups[index].hero;
    let prodName = jsonResponse.groups[index].name;
    let imgAltTitle = thisImg.alt ? thisImg.alt : prodName;
    // TODO: be able to select pricing: 
    let prodPrice = jsonResponse.groups[index].priceRange.regular.high;
    const itemImg = `
      <img class="detailImg" 
        src=${thisImg.href}
        alt="${imgAltTitle}"
        rel=${thisImg.rel}
        width=${thisImg.width}
        height=${thisImg.height}
        title="${imgAltTitle}" />`;

    const itemContainer = `
      <div class="prodCon">
        <div class="prodName">
          ${prodName}
        </div>
        <div class="prodPrice">$
          ${prodPrice}
        </div>
        ${itemImg}
      </div>`;

    root.insertAdjacentHTML('beforeend',itemContainer);
  }

  // Now deliver all products
  const prodGrid = (jsonResponse) => {
    const itemCount = jsonResponse.groups.length;
    for(let i=0; i<itemCount; i++) {
      singleProduct(jsonResponse, i);
    }
  }

  fetchWestElm()
  return true;
}

export default ProdDetailsGrid;


