// function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

const zucchine =[];
let hgZucchine = 0;

while (zucchine.length < 10) {
    const zucchina = {
        varietà : getRndInteger(1,10),
        peso : getRndInteger(1,5),
        lunghezza : getRndInteger(1,30),
    };

    zucchine.push(zucchina);

};

const zucchineLunghe = [];
const zucchineCorte = [];

for (let i = 0; i < zucchine.length; i++) {
    if(zucchine[i].lunghezza < 15) {
        zucchineCorte.push(zucchine[i])
    } else {
        zucchineLunghe.push(zucchine[i])
    };
    
};

let hgZucchineCorte = 0;
for (let i = 0; i < zucchineCorte.length; i++) {
    hgZucchineCorte += zucchineCorte[i].peso;   
};

let hgZucchineLunghe = 0;
for (let i = 0; i < zucchineLunghe.length; i++) {
    hgZucchineLunghe += zucchineLunghe[i].peso;
};

console.log(zucchineCorte);
console.log(zucchineLunghe);
console.log(zucchine);
console.log(`le zucchine corte pesano ${hgZucchineCorte} hg`);
console.log(`le zucchine lunghe pesano ${hgZucchineLunghe} hg`)