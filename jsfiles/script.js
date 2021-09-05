// variable pour récupérer les valeurs du local storage
var arrayArticlesLocalStorage = JSON.parse(localStorage.getItem("arrayArticles"));
var arrayPricesArtLocalStorage = JSON.parse(localStorage.getItem("arrayPricesArt"));
var arraytotalPriceLocalStorage = JSON.parse(localStorage.getItem("totalPrice"));

// Page home text - prix et Nom du produits
const txtHome1 = document.querySelector('.home-text-cards1');
const txtHome2 = document.querySelector('.home-text-cards2');
const txtHome3 = document.querySelector('.home-text-cards3');



function createNodeNavBar(dataNav) {
  
  if(dataNav == null){
    document.querySelector('.pricenavbar').firstChild.data = "00,00 €" ;
  } else{
    document.querySelector('.pricenavbar').firstChild.data = dataNav + ",00 €" ;
  };
}

function getData(base,para){

  fetch('articles.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

      //Page home image 
      const imgHome1 = document.querySelector('.img-home1').src = data[0]['image'];
      const imgHome2 = document.querySelector('.img-home2').src = data[1]['image'];
      const imgHome3 = document.querySelector('.img-home3').src = data[2]['image'];
      
      const nameNewNode = document.createElement("p");
      const descriptionNewNode = document.createElement("p");
      const priceNewNode = document.createElement("p");
      

      const nameText = document.createTextNode(data[base]['name']);
      const descriptionText = document.createTextNode(data[base]['description']);
      const priceText = document.createTextNode(data[base]['prix']+",00 €");
      

      nameNewNode.appendChild(nameText) ;
      descriptionNewNode.appendChild(descriptionText) ;
      priceNewNode.appendChild(priceText) ;

      para.appendChild(nameNewNode) ;
      para.appendChild(priceNewNode) ;


  });

}


getData(0,txtHome1)
getData(1,txtHome2)
getData(2,txtHome3)

// appel de la fonction qui va remplir la navbar du prix 
createNodeNavBar(arraytotalPriceLocalStorage)

