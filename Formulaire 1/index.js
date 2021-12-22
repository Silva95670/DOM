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

            //Creer un bouton supprimer et apres le clic supprimer la card (Sur 3 points)
            //Creer un oeil "bouton" qui au clic fait disparaitre la card mais ne la supprime pas et 
            //reorganisation des cards restantes
            // Creer un bouton(Voir toutes les activités) qui apparait lorsque d'une card est masqué

            
 let regroupe2 = document.getElementById("regroupe");
 regroupe2.style.width = ("12rem");
 regroupe2.style.margin = ("auto");


 function myFunction (){

 
    
    let card = document.createElement("div");
    card.className = "card";
    card.style.display = "flex"
    card.style.alignItems = "center"

    let image = document.createElement("img");
    image.setAttribute('src', "./img/tour-eiffel-paris-europe_220507-5453.jpg" )
    image.style.width = ('10rem');
    image.style.height = ('10rem');
    image.className = "card-img-top";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let title = document.createElement("h5");
    title.innerText = document.getElementById('event-name').value;
    title.className = "card-title";

    let adress = document.createElement("p");
    adress.innerText = document.getElementById('event-adress').value;
    adress.className = "card-text";

    let number = document.createElement("div");
    number.innerText = document.getElementById('eventnbr').value;

    let delete_button = document.createElement("button");
     delete_button.id = ("delete");
     delete_button.innerText = "Supprimer";

     let mask_Card = document.createElement("button");
     mask_Card.className = "btn btn-primary";
     mask_Card.innerText = "Masquer";

    

    let cadre = document.getElementById('cadre');
     
     cardBody.appendChild(title);
     cardBody.appendChild(adress);
     cardBody.appendChild(number);
     card.appendChild(image);
     card.appendChild(cardBody);
    regroupe2.appendChild(card);
    cardBody.appendChild(delete_button);
    cardBody.appendChild(mask_Card);
    
    
    
     

     
    delete_button.addEventListener("click", function () {
        regroupe2.removeChild(card);
    })

    mask_Card.addEventListener('click', function () {
        card.style.visibility = ("hidden");
        let createActivity = document.createElement("button");
    createActivity.innerText = "Voir activité";
    cadre.appendChild(createActivity);
    createActivity.addEventListener('click', function () {
        card.style.visibility = ('visible')
    } )
    })

    

 }

 let button = document.getElementById('bouton');
button.addEventListener("click", function() {
    myFunction();
})
 

 
 
 
 
    
    
 