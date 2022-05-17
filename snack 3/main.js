const cars = [
    {
        marca : "Audi",
        modello : "A3",
        alimentazione : "diesel",
    },
    {
        marca : "Bmw",
        modello : "M2",
        alimentazione : "benzina",
    },
    {
        marca : "Fiat",
        modello : "500",
        alimentazione : "elettrica",
    },
    {
        marca : "Dacia",
        modello : "Duster",
        alimentazione : "diesel",
    },
    {
        marca : "Mercedes",
        modello : "Classe A",
        alimentazione : "benzina",
    },
    {
        marca : "Opel",
        modello : "Corsa",
        alimentazione : "gpl",
    },
    {
        marca : "Audi",
        modello : "Q3",
        alimentazione : "diesel",
    },
    {
        marca : "Fiat",
        modello : "Panda",
        alimentazione : "metano",
    },
    {
        marca : "Ferrari",
        modello : "Monza",
        alimentazione : "benzina",
    },
    {
        marca : "Lamborghini",
        modello : "Hurus",
        alimentazione : "benzina",
    },
];

const autoDiesel = cars.filter(elm => elm.alimentazione === "diesel");
const autoBenzina = cars.filter(elm => elm.alimentazione === "benzina");
const autoEGM = cars.filter(elm => elm.alimentazione !== "diesel" && elm.alimentazione !== "benzina");

console.log(autoDiesel);
console.log(autoBenzina);
console.log(autoEGM);