"use strict";
//Creiamo array di oggetti
let infoTeam =[
    {
        'name': 'Wayne Barnet',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett-founder-ceo.jpg',
    },
    {
        'name': 'Angela Carol',
        'role': 'Chief Editor',
        'image': 'angela-caroll-chief-editor.jpg',
    },
    {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon-office-manager.jpg',
    },
    {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez-social-media-manager.jpg',
    },
    {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada-developer.jpg',
    },
    {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos-graphic-designer.jpg',
    },
]
//recuperiamo la row dal html 
let row_card = document.querySelector('.row')
//Creiamo una for in per ciclare al interno i dati della nostra array di oggetti 
for(let dati in infoTeam){
    //Definiamo una variabile che cicla i nostri dati da usare poi in pagina
    let ourTeam = infoTeam[dati]
    //Creiamo una variabile per creare il nostro div che contiene tutte le informazioni da aggiungere in pagina
    let teamOnPage = `
    <div class=" col-9 col-sm-7 col-md-5 col-lg-4">
        <div class="card border border-0 shadow-lg my-3 " style="width: 18rem;">
        <img src="./img/${ourTeam.image}" class="card-img-top" alt="...">
            <div class="card-body ">
              <p class="card-text text-center text-body-tertiary h4">${ourTeam.name}</p>
              <p class="card-text text-center text-body-tertiary">${ourTeam.role}</p>
            </div>
        </div>
    </div>
    `
    //Nella row_card rendiamo tutto visibile in pagina 
    row_card.innerHTML+= teamOnPage
}