
// Récupération des class de chaque colonnes du Tableau du Panier
const infoZoneProducts = document.querySelector('.info-zone-products');
const infoZonePrice = document.querySelector('.info-zone-price');
const infoZoneQuantity = document.querySelector('.info-zone-quantity');
const infoZoneTotal = document.querySelector('.info-zone-total');
const globalPrice = document.querySelector('.global-price');


const zoneList = document.querySelector('.zoneList')


// Variable pour les écoutes d'évenements.
const infoZoneRemove = document.querySelectorAll('.info-zone-remove');
const btnSubmit = document.querySelector('.btnsubmit');

var arrayArticlesLocalStorage = JSON.parse(localStorage.getItem("arrayArticles"));
var arrayPricesArtLocalStorage = JSON.parse(localStorage.getItem("arrayPricesArt"));
var totalPriceLocalStorage = JSON.parse(localStorage.getItem("totalPrice"));

// Permet d'afficher dans la navbar les valeurs déjà saisi
function createNodeNavBar(dataNav) {
    if(dataNav == null){
        document.querySelector('.pricenavbar').firstChild.data = "00,00 €" ;
    } else{
      document.querySelector('.pricenavbar').firstChild.data = dataNav + ",00 €" ;
    };
}
createNodeNavBar(totalPriceLocalStorage)




function createRemoveNode() {
    // On arrête l'évenement pas défaut de l'input sumbit
   
    let li = document.createElement('li');
    let btn2 = document.createElement('button') ;
    // Ajouter la class de chaque element

    li.classList.add('list') ;
    btn2.classList.add('delete') ;

    // Ajouter le texte
    btn2.textContent = 'Supprimer' ;
    // Ajouter au DOM comme dernier enfant

    li.appendChild(btn2) ;
    zoneList.appendChild(li)
   


}





function whiteGlobalPrice(priceG,globalPrice) {
    let  globalDiv= document.createElement('div'); 
    let  globalPara= document.createElement("p");
    let  textUltraGlobal= document.createTextNode(priceG + " ,00 €") ;
    globalPara.appendChild(textUltraGlobal);
    globalDiv.appendChild(globalPara);
    if(priceG > 0){
        globalPrice.appendChild(globalDiv);
    }
    
}


function NodesPart2(productsName,price,count,total) {

    let  nameDiv = document.createElement('div');
    let  priceDiv= document.createElement('div');
    let  quantityDiv= document.createElement('div');
    let  totalDiv= document.createElement('div');
  
    let  namePara = document.createElement("p");
    let  pricePara= document.createElement("p");
    let  quantityPara= document.createElement("p");
    let  totalPara= document.createElement("p");

    let  textName = document.createTextNode(productsName);
    let  textPrice = document.createTextNode(price + ",00 €");
    let  textQuantity = document.createTextNode(count);
    let  textTotal = document.createTextNode(total + ",00 €");
    namePara.appendChild(textName);
    pricePara.appendChild(textPrice);
    quantityPara.appendChild(textQuantity);
    totalPara.appendChild(textTotal);
    
    // J'ajoute le paragraphe en tant qu'enfant des div du même nom
    nameDiv.appendChild(namePara);
    priceDiv.appendChild(pricePara);
    quantityDiv.appendChild(quantityPara);
    totalDiv.appendChild(totalPara);
    

    if(count > 0 && price != undefined && total != undefined){
        infoZoneProducts.appendChild(nameDiv);
        infoZonePrice.appendChild(priceDiv);
        infoZoneQuantity.appendChild(quantityDiv);
        infoZoneTotal.appendChild(totalDiv);
        createRemoveNode()
    
    }
}

function createNodesShoppingCart(typeOfInfoInLocalStorage) { 
    
    var countDamierDelicieux = 0;
    var countDome = 0;
    var countCoffretChocolat = 0;
    var countMacaronChocolatBreton = 0;
    var countChocolatAutomnal = 0;
    var countCookies = 0;
    var countDrageesFruites = 0;
    var countNostalgie = 0;
    

    for(let i = 0 ; i < typeOfInfoInLocalStorage.length ; i++ ){

        if (typeOfInfoInLocalStorage[i] === "Le damier délicieux"){
            var name1 = typeOfInfoInLocalStorage[i];
            var priceDamierDelicieux = arrayPricesArtLocalStorage[i];
            countDamierDelicieux +=1 ;
            var totalDamier  = countDamierDelicieux * priceDamierDelicieux ;

        }
        else if (typeOfInfoInLocalStorage[i] === "Le grand dôme"){
            var name2 = typeOfInfoInLocalStorage[i];
            countDome += 1 ;
            var priceDome = arrayPricesArtLocalStorage[i];
            var totalDome = priceDome * countDome ;
    
        }
        else if (typeOfInfoInLocalStorage[i] === "Coffret chocolat au lait"){
            var name3 = typeOfInfoInLocalStorage[i];
            countCoffretChocolat += 1 
            var priceCoffretChocolat = arrayPricesArtLocalStorage[i];
            var totalCoffretChocolat = priceCoffretChocolat * countCoffretChocolat ;
            
        }
        else if (typeOfInfoInLocalStorage[i] === "Macaron chocolat Breton"){
            var name4 = typeOfInfoInLocalStorage[i];
            countMacaronChocolatBreton += 1 ;
            var priceMacaronChocolatBreton = arrayPricesArtLocalStorage[i];
            var totalMacaronChocolatBreton = priceMacaronChocolatBreton * countMacaronChocolatBreton ;
           
        }
        else if (typeOfInfoInLocalStorage[i] === "Grand coffret chocolat automnal"){
            var name5 = typeOfInfoInLocalStorage[i];
            countChocolatAutomnal += 1 ;
            var priceChocolatAutomnal = arrayPricesArtLocalStorage[i];
            var totalChocolatAutomnal = priceChocolatAutomnal * countChocolatAutomnal ;
            
        }
        else if (typeOfInfoInLocalStorage[i] === "Cookies"){
            var name6 = typeOfInfoInLocalStorage[i];
            countCookies +=1 ;
            var priceCookies = arrayPricesArtLocalStorage[i];
            var totalCookies = priceCookies * countCookies ;  
            
        }
        else if (typeOfInfoInLocalStorage[i] === "Dragées fruités"){
            var name7 = typeOfInfoInLocalStorage[i];
            countDrageesFruites += 1;
            var priceDrageesFruites = arrayPricesArtLocalStorage[i];
            var totalDrageesFruites = priceDrageesFruites * countDrageesFruites ;
           
        }
        else if (typeOfInfoInLocalStorage[i] === "Nostalgie"){
            var name8 = typeOfInfoInLocalStorage[i];
            var priceNostalgie = arrayPricesArtLocalStorage[i];
            countNostalgie += 1 ;
            var totalNostalgies = priceNostalgie * countNostalgie ;
    
        };
    }
    NodesPart2(name1,priceDamierDelicieux,countDamierDelicieux,totalDamier)
    NodesPart2(name2,priceDome,countDome,totalDome)
    NodesPart2(name3,priceCoffretChocolat,countCoffretChocolat,totalCoffretChocolat)
    NodesPart2(name4,priceMacaronChocolatBreton,countMacaronChocolatBreton,totalMacaronChocolatBreton);   
    NodesPart2(name5,priceChocolatAutomnal,countChocolatAutomnal,totalChocolatAutomnal)
    NodesPart2(name6,priceCookies,countCookies,totalCookies);
    NodesPart2(name7,priceDrageesFruites,countDrageesFruites,totalDrageesFruites);
    NodesPart2(name8,priceNostalgie,countNostalgie,totalNostalgies);
    
    
}

createNodesShoppingCart(arrayArticlesLocalStorage);
whiteGlobalPrice(totalPriceLocalStorage,globalPrice);







var buttonDelete = document.querySelectorAll('.delete');
console.log(buttonDelete)


for( let i = 0 ; i < buttonDelete.length ; i++){   
    var button = buttonDelete[i]
    button.addEventListener('click',function (event) {
        var buttonClicked = event.target  
        
        buttonClicked.classList.remove('delete')
        
        if (button.length > 1){
            console.log("Longeur Supp à Un")
            console.log(button.length)
        }
        console.log(button)


        
        zoneList.removeChild(buttonClicked.parentNode)
        // infoZoneProducts.removeChild(infoZoneProducts.childNodes[i])
        infoZonePrice.removeChild(infoZonePrice.childNodes[i]);
        infoZoneQuantity.removeChild(infoZoneQuantity.childNodes[i])
        infoZoneTotal.removeChild(infoZoneTotal.childNodes[i])

        infoZoneProducts.childNodes[i].parentNode.removeChild(infoZoneProducts.childNodes[i])
    


    })


    // infoZoneProducts.removeChild(infoZoneProducts.childNodes[i])
    // infoZonePrice.removeChild(infoZonePrice.childNodes[i]);
    // infoZoneQuantity.removeChild(infoZoneQuantity.childNodes[i])
    // infoZoneTotal.removeChild(infoZoneTotal.childNodes[i])
    // globalPrice.removeChild(globalPrice.childNodes[i]) 
    
}



