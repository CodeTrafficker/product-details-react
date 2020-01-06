import React from 'react';    // , { Component }
import ReactDOM from 'react-dom';
import './prodDetailsGrid.css';
// import products from './api/products.json';
import RRCarousel from './RRCarousel';

const ProdDetailsGrid =()=> {
  const root = document.getElementById('root');
 
  const fetchWestElm = () => {
    // NOPE:
    // const productUrl = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';  
    // Had to move json file to /public/api/
    const productUrl = '/api/products.json';
 

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
    // TODO: be able to select pricing: 
    let prodPrice = jsonResponse.groups[index].priceRange.regular.high;

    let itemImg = '<img class="detailImg" src='
      +thisImg.href
      +' alt="'+thisImg.alt
      +'" rel="'+thisImg.rel
      +'" width='+thisImg.width
      +' height='+thisImg.height
      +' title="'+thisImg.alt
      +'" />';


//  key={jsonResponse.groups[index].thumbnail.href} 
    // let thisCarousel = 
    ReactDOM.render(<RRCarousel externalData={jsonResponse} />, document.querySelector('#root'));

    let itemContainer = '<div class="prodCon">'
      +'<div class="prodName">'
      +prodName
      +'</div>'
      +'<div class="prodPrice">$'
      +prodPrice
      +'</div>'
      +itemImg

      // +thisCarousel

      +'</div>';

    root.insertAdjacentHTML('beforeend',itemContainer);

    // if clicked, launch slide show
    // initSlides(jsonResponse, index);
  }

  // Now deliver all products
  const prodGrid = (jsonResponse) => {
    const itemCount = jsonResponse.groups.length;
    for(let i=0; i<itemCount; i++) {
      singleProduct(jsonResponse, i);

      let slideImg = jsonResponse.groups[i].hero;
      
      // <RRCarousel>
      //   <div>
      //     <img src={ slideImg.href } />
      //     <p className="legend">{ slideImg.alt }</p>
      //   </div>
      // </RRCarousel>
    
    }
  }

   // const initSlides =(jsonResponse, index)=>  {
      // Build it:
  //   let thisCarousel = new RRCarousel(jsonResponse, index);
   
  //   console.log('indx: '+index+', TN: '
  //     +jsonResponse.groups[index].thumbnail.href
  //     +', ind: '+index )

  //   // attach over clicked pic
  //   // root.insertAdjacentHTML('beforeend',thisCarousel.index);
  // }

  fetchWestElm()
  return true;
}

export default ProdDetailsGrid;


