// Page store text 
const storeTextCards1 = document.querySelector('.store-text-cards1');
const storeTextCards2 = document.querySelector('.store-text-cards2');
const storeTextCards3 = document.querySelector('.store-text-cards3');
const storeTextCards4 = document.querySelector('.store-text-cards4');
const storeTextCards5 = document.querySelector('.store-text-cards5');
const storeTextCards6 = document.querySelector('.store-text-cards6');
const storeTextCards7 = document.querySelector('.store-text-cards7');
const storeTextCards8 = document.querySelector('.store-text-cards8');

// variable pour récupérer les valeurs du local storage
var arrayArticlesLocalStorage = JSON.parse(localStorage.getItem("arrayArticles"));
var arrayPricesArtLocalStorage = JSON.parse(localStorage.getItem("arrayPricesArt"));
var totalPriceLocalStorage = JSON.parse(localStorage.getItem("totalPrice"));

var bucketNameArticles = [] ;
var bucketPricesArt = [] ;
var result = 0 ;




function createNodeNavBarForLocalstorageInformation(dataNav) {

  if(dataNav == null){
    document.querySelector('.pricenavbar').firstChild.data = "00,00 €" ;
  } else{
    document.querySelector('.pricenavbar').firstChild.data = dataNav + ",00 €"
  }

}


function createNodes(result) {

  document.querySelector('.pricenavbar').firstChild.data = result + ",00 €";
  
}


// Réalisation du calcul
function addition(a,b,c,createNodeCallBack){
  result = a + b + c ;
  console.log("Valeur du Résultat final: " + result);
  localStorage.setItem("totalPrice", result);
  createNodeCallBack(result);
} 


function getData(base,para){
  fetch('articles.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

      //Page store image 
      const imgStore1 = document.querySelector('.img-store1').src = data[0]['image'];
      const imgStore2 = document.querySelector('.img-store2').src = data[1]['image'];
      const imgStore3 = document.querySelector('.img-store3').src = data[2]['image'];
      const imgStore4 = document.querySelector('.img-store4').src = data[3]['image'];
      const imgStore5 = document.querySelector('.img-store5').src = data[4]['image'];
      const imgStore6 = document.querySelector('.img-store6').src = data[5]['image'];
      const imgStore7 = document.querySelector('.img-store7').src = data[6]['image'];
      const imgStore8 = document.querySelector('.img-store8').src = data[7]['image'];
      //Création des éléments 
      const divPara = document.createElement("div");
      const nameNewNode = document.createElement("p");
      const descriptionNewNode = document.createElement("p");
      const priceNewNode = document.createElement("p");
      const buyButton = document.createElement("p");
      //création du texte à partir des données du json
      const nameText = document.createTextNode(data[base]['name']);
      const descriptionText = document.createTextNode(data[base]['description']);
      const priceText = document.createTextNode(data[base]['prix']+",00 €");
      const buyText = document.createTextNode('Acheter');

      nameNewNode.classList.add('nameText')
      descriptionNewNode.classList.add('descriptionText')
      buyButton.classList.add('buttonBuy')
      priceNewNode.classList.add('priceText')
      divPara.classList.add('divPara')
      // On met le texte avec son parent qui est l'élément créé
      nameNewNode.appendChild(nameText) ;
      descriptionNewNode.appendChild(descriptionText) ;
      priceNewNode.appendChild(priceText) ;
      divPara.appendChild(buyButton)
      buyButton.appendChild(buyText)
      // On ajoute les éléments créé au DOM , le para représente la div parent existant déjà auquel l'élement créé va s'ajouter
      para.appendChild(nameNewNode) ;
      para.appendChild(descriptionNewNode) ;
      para.appendChild(priceNewNode) ;
      para.appendChild(divPara) ;


     /* Si l'utilisateur click sur le bouton acheter le prix de l'article est ajouté au panier. Les informations liées à l'article : Nom et prix sont enregistrées.Le prix est calculé en additionnant le prix des articles sélectionnés. */
      const btnBuy = document.querySelectorAll('.buttonBuy');
      for( let y = 0 ; y < btnBuy.length ; y++){   
        btnBuy[y].onclick = ()=> {
          bucketNameArticles.push(data[y]['name']);
          bucketPricesArt.push(data[y]['prix']);
          console.log(bucketNameArticles)
          console.log(bucketPricesArt)
          // Mettre les tableaux dans le local storage pour les récupérer
          // localStorage.setItem("arrayArticles",  JSON.stringify(bucketNameArticles));
          // localStorage.setItem("arrayPricesArt", JSON.stringify(bucketPricesArt));

          

          if ( result === 0 && totalPriceLocalStorage == null){
            let a = data[y]['prix'];
            let b = 0 ;
            let c = 0 ;
            localStorage.setItem("arrayArticles",  JSON.stringify(bucketNameArticles));
            localStorage.setItem("arrayPricesArt", JSON.stringify(bucketPricesArt));
            addition(a,b,c,createNodes)
          } else if(result != 0 && totalPriceLocalStorage == null){
            let a = result ;
            let b = data[y]['prix'];
            let c = 0 ;
            localStorage.setItem("arrayArticles",  JSON.stringify(bucketNameArticles));
            localStorage.setItem("arrayPricesArt", JSON.stringify(bucketPricesArt));
            addition(a,b,c,createNodes)
          } else if (result == 0 && totalPriceLocalStorage != null) {
            let a = result ;
            let b = data[y]['prix'];
            let c = totalPriceLocalStorage ;
            console.log('CAS 3 : valeur de a - result: '+ a ) ;
            console.log('CAS 3 : valeur de b - prix sélectonné: '+ b ) ;
            console.log('CAS 3 : valeur de c - localstorage: '+ c)
            localStorage.setItem("arrayArticles",  JSON.stringify(bucketNameArticles));
            localStorage.setItem("arrayPricesArt", JSON.stringify(bucketPricesArt));
            addition(a,b,c,createNodes)
          } else if (result != 0 && totalPriceLocalStorage != null) {
            let a = result ;
            let b = data[y]['prix'];
            let c = 0;
            console.log('CAS 4 : valeur de a - result: '+ a ) ;
            console.log('CAS 4 : valeur de b - prix sélectonné: '+ b ) ;
            console.log('CAS 4 : valeur de c - localstorage: '+ c)
            localStorage.setItem("arrayArticles",  JSON.stringify(bucketNameArticles));
            localStorage.setItem("arrayPricesArt", JSON.stringify(bucketPricesArt));
            addition(a,b,c,createNodes)
          }
            
        }
      };
  });
}

getData(0,storeTextCards1)
getData(1,storeTextCards2)
getData(2,storeTextCards3)
getData(3,storeTextCards4)
getData(4,storeTextCards5)
getData(5,storeTextCards6)
getData(6,storeTextCards7)
getData(7,storeTextCards8)



createNodeNavBarForLocalstorageInformation(totalPriceLocalStorage)
