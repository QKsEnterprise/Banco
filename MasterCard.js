//Tarjeta MasterCard

let MasterCard = 'MasterCard:';

console.log(MasterCard);

MasterCard = 200000;

console.log('Plata $', MasterCard)

console.log(' ');

console.log('Marcos');

let Marcos = {
  'Dia': '16 de Octubre 2019, 16/10/2019',
  'Tarjeta': 'MasterCard',
  'Estado': false,
};

console.log('Dia que adquirio la tarjeta');

console.log(Marcos);

console.log(' ');

let Phone = {'Celular': 199989};
let Shopping = {'Mercado': 20000};
let Clothe = {'Ropa': 30000};
let Car = {'Auto': 2000000};

let phone = 199989;
let shopping = 20000;
let clothe = 30000;
let car = 2000000;

let ListCart = phone + shopping + clothe + car;

console.log('Gastos totales :', ListCart);

if (ListCart <= MasterCard) {
  console.log('No tenes nada pendiente');
} else {
  console.log('Tenes que pagar por este producto:');
}


if (phone >= MasterCard) {
  console.log(Phone);
}

if (shopping >= MasterCard) {
  console.log(Shopping);
}

if (clothe >= MasterCard) {
  console.log(Clothe);
}

if (car >= MasterCard) {
  console.log('Debes pagar este producto!!!', Car);

} else {
  console.log('no tienes nada pendiente');
}

console.log(' ');

delete MasterCard;



//Tarjeta de credito

let TYpeCArd = 'Tarjeta de credito';

console.log(TYpeCArd);

let CrediTCard = 2000000;

let phoNE = 199989;
let shoppiNG = 20000;
let clotHE = 30000;
let cAR = 2000000;

let lisTCart = phoNE + shoppiNG + clotHE + cAR;

let totaL = lisTCart - CrediTCard;

if (CrediTCard >= lisTCart) {
  console.log('transaction ok', totaL);
} else {
  console.log('No puedes pagar por este producto');
}
console.log(' ');


































