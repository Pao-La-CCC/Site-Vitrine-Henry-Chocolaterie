
// Récupération des class de chaque colonnes du Tableau du Panier
const infoZoneProducts = document.querySelector('.info-zone-products');
const infoZonePrice = document.querySelector('.info-zone-price');
const infoZoneQuantity = document.querySelector('.info-zone-quantity');
const infoZoneTotal = document.querySelector('.info-zone-total');
const infoZoneRemove = document.querySelector('.info-zone-remove');
const infoGlobalPrice = document.querySelector('.global-price');

var arrayArticlesLocalStorage = JSON.parse(localStorage.getItem("arrayArticles"));
var arrayPricesArtLocalStorage = JSON.parse(localStorage.getItem("arrayPricesArt"));
var totalPriceLocalStorage = JSON.parse(localStorage.getItem("totalPrice"));

var globalPriceValue = [] ;
var totalP = 0 ;
var tab = null ;



function NodesPart2(productsName,price,count,total) {

    let  nameDiv = document.createElement('div');
    let  priceDiv= document.createElement('div');
    let  quantityDiv= document.createElement('div');
    let  totalDiv= document.createElement('div');
    let  deleteDiv = document.createElement('div');

    let  namePara = document.createElement("p");
    let  pricePara= document.createElement("p");
    let  quantityPara= document.createElement("p");
    let  totalPara= document.createElement("p");
    let  deletePara = document.createElement('p') ;

    let  textName = document.createTextNode(productsName);
    let  textPrice = document.createTextNode(price + ",00 €");
    let  textQuantity = document.createTextNode(count);
    let  textTotal = document.createTextNode(total + ",00 €");
    let  deleteText = document.createTextNode('Supprimer') 

    namePara.appendChild(textName);
    pricePara.appendChild(textPrice);
    quantityPara.appendChild(textQuantity);
    totalPara.appendChild(textTotal);
    deletePara.appendChild(deleteText)

    namePara.classList.add('name-products');
    pricePara.classList.add('price-para');
    quantityPara.classList.add('quantity-para')
    totalPara.classList.add('total-para');
    deletePara.classList.add('delete-btn') ;

    // J'ajoute le paragraphe en tant qu'enfant des div du même nom
    nameDiv.appendChild(namePara);
    priceDiv.appendChild(pricePara);
    quantityDiv.appendChild(quantityPara);
    totalDiv.appendChild(totalPara);
    deleteDiv.appendChild(deletePara)
    
    
    if(count > 0 && price != undefined && total != undefined){
        infoZoneProducts.appendChild(nameDiv);
        infoZonePrice.appendChild(priceDiv);
        infoZoneQuantity.appendChild(quantityDiv);
        infoZoneTotal.appendChild(totalDiv);
        infoZoneRemove.appendChild(deleteDiv);  
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

    tab = [totalDamier, totalDome,totalCoffretChocolat,totalMacaronChocolatBreton,totalChocolatAutomnal,totalCookies,totalDrageesFruites,totalNostalgies] ;

    tab.forEach(element => {
        if (element != undefined){
            globalPriceValue.push(element) 
        }
    });

}




function whiteGlobalPrice(priceG,infoGlobalPrice) {
    for(let i = 0 ; i < globalPriceValue.length; i++){
        totalP += globalPriceValue[i]
        if( totalP == priceG ){
            let  globalDiv= document.createElement('div'); 
            let  globalPara= document.createElement("p");
            let  textUltraGlobal = document.createTextNode(totalP + " ,00 €") ;
            globalPara.classList.add('price-total-global')

            globalPara.appendChild(textUltraGlobal);
            globalDiv.appendChild(globalPara);
            infoGlobalPrice.appendChild(globalDiv);
            document.querySelector('.pricenavbar').firstChild.data = totalP + ",00 €" ;
        }
    }
}


function changePriceAfterDeleteArticles (x) {  
    totalP  = totalP - x ;
    document.querySelector('.pricenavbar').firstChild.data = totalP + ",00 €" ;
    
    let changeTotalValueOfShoppindCard = document.querySelector('.price-total-global');
    changeTotalValueOfShoppindCard.firstChild.data = totalP + ",00 €" ; 
}

function deleteAndUpDate() { 
    var buttonDelete = document.querySelectorAll('.delete-btn');
    buttonDelete.forEach((element,i)=>{
        element.onclick = function(){
            // Trouver la valeur d'un noeud 
            var classNameProducts = document.querySelectorAll('.name-products')[i];
            var valClassNameProd = classNameProducts.childNodes[0].nodeValue ;
        
            var nameParaElementToRemove =  document.querySelectorAll('.name-products')[i].parentNode;
            var throwawayNodeNamePara = infoZoneProducts.removeChild(nameParaElementToRemove);

            var priceParaElementToRemove =  document.querySelectorAll('.price-para')[i].parentNode;
            var throwawayNodePricePara = infoZonePrice.removeChild(priceParaElementToRemove);

            var quantityParaElementToRemove =  document.querySelectorAll('.quantity-para')[i].parentNode;
            var throwawayNodeQuantityPara = infoZoneQuantity.removeChild(quantityParaElementToRemove);

            var totalParaElementToRemove =  document.querySelectorAll('.total-para')[i].parentNode;
            var throwawayNodeTotalPara = infoZoneTotal.removeChild(totalParaElementToRemove);

            var deleteParaElementToRemove = document.querySelectorAll('.delete-btn')[i].parentNode;
            var throwawayNodeDeletePara = infoZoneRemove.removeChild(deleteParaElementToRemove);

            tabToChangeValAfterDelete = ["Le damier délicieux","Le grand dôme","Coffret chocolat au lait","Macaron chocolat Breton","Grand coffret chocolat automnal","Cookies","Dragées fruités","Nostalgie"]

            tabToChangeValAfterDelete.forEach((value,index)=>{
                if (value == valClassNameProd ){
                    let valTotalPara = tab[index] ;
                    console.log(valTotalPara)
                    changePriceAfterDeleteArticles(valTotalPara)

                }
            })
        }
    })
}



function deleteAll() {


    var backToNothingInShoppingCard = document.querySelector('.remove-all');

    backToNothingInShoppingCard.addEventListener("click",()=>{

        var zoneToRemove = document.querySelectorAll(".info");
        console.log(zoneToRemove)

        for(let i = 0 ; i < zoneToRemove.length ; i++){
            let parent = zoneToRemove[i];
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
                changePriceAfterDeleteArticles (totalP);
                localStorage.clear()
            }
 
        }
        
    })
 
}



createNodesShoppingCart(arrayArticlesLocalStorage);
whiteGlobalPrice(totalPriceLocalStorage,infoGlobalPrice);
deleteAndUpDate()
deleteAll()










