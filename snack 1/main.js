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
        lunghezza : getRndInteger(1,5),
    };

    zucchine.push(zucchina);

    hgZucchine += zucchina.peso;

};

console.log(zucchine);
console.log(` le zucchine pesano ${hgZucchine} hg`);