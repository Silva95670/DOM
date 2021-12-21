// 1) Créer les éléments html qui composent la card bootstrap : 
        // créer la div mère  : qui a comme classe : card
        //  crée tous les éléments qui composent
        // je regroupe les éléments html en suivant l'ordre indiqué par Bootstrap


// 1 : je crée une div qui a comme class :  "card"
// 2 : je crée une image qui a comme class : "card-img-top"
// 3 : je crée une div qui a comme class : "card-body"

// ... etc


// après : je mets les  div  qui ont comme classe : "card-img-top" et "card-body" dans la div qui a comme classe : "card"
// et je mets cette dernière dans mon document html

// indice : pour créer un élément : on utilise document.createElement("type_element");
            // pour regrouper des éléments : on utilisent la méthode appendChild("element");

            


 function myFunction (){

    let regroupe2 = document.getElementById("regroupe");
     
    let card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img");
    image.setAttribute('src', "./img/tour-eiffel-paris-europe_220507-5453.jpg" )
    image.className = "card-img-top";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let title = document.createElement("h5");
    title.textContent = "Card title";
    title.className = "card-title";

    let adress = document.createElement("p");
    adress.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";
    adress.className = "card-text";


     
     cardBody.appendChild(title);
     cardBody.appendChild(adress);
     card.appendChild(image);
     card.appendChild(cardBody);
     regroupe2.appendChild(card);
     
 }

 let button = document.getElementById('bouton');
button.addEventListener("click", function() {
    myFunction();
})

 myFunction();
 

 