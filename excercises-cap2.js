let ej1 = "Ejercicio1";

console.log(ej1);


let loop = "";

for(let count= 0; count<7 ; count++ ){
    loop = loop + "#" ;
    console.log(loop)
}
  

let ej2 = "Ejercicio2";

console.log(ej2);

let num = 0;

for(let count= 1; count<101 ; count++ ){

    if (count%3 == 0 && count%5 == 0){ num = "fizzbuzz"}

    else if (count%3 == 0){num = "fizz"}

    else if (count%5 == 0 ){ num = "buzz"}

    else {num = count}

    console.log(num)

}


let ej3 = "Ejercicio3";

console.log(ej3);


let gatos = " # # # # \n# # # #";

for(count=0;count<4;count++){
    console.log(gatos)
}

let gatos2 = " # # # #";

for(count=0;count<8;count++){
    if (count%2 == 0){ gatos2=" # # # #"}
    else {gatos2 = "# # # #"};
    console.log(gatos2);
}

