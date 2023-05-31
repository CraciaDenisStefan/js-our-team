"use strict";

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

for(let dati in infoTeam){
    console.log(infoTeam[dati].name)
    console.log(infoTeam[dati].role)
    console.log(infoTeam[dati].image)
}