// 1.Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.
for (let i = 0; i < 5; i++); {
 console.log('Labas');         //kodel tik karta spauzdina?
}
/* 2. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje 
eilutėje).*/
console.log('-------kas cia negerai?-----------');
//for (let n = 0; n < 5; n++); {
//    console.log(n);
//}
/* 3. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius 
vienoje eilutėje)*/
console.log('------------------');
for(let i = 0; i <= 40; i+=10) {
    console.log(i);
}
/* 4. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius 
vienoje eilutėje).*/
console.log('------------------');
for(let i = 49; i <= 53; i+=1) {
    console.log(i);
}
/* 5. Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 
10 (vienas skaičius vienoje eilutėje).*/
console.log('------------------');
function rand(min, max){return Math.floor(Math.random()*(max-min+1)+min);}
for (let i = 0; i < 5; i++) {
     console.log(rand(0,10));
 }
/* 6. Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 
3.*/
console.log('---------neveikia dalyba is3---------');
for (let i = 1; i <= 20; i++) {
     if (i % 3 !== 0); {     
         console.log(i)
     }
}
//7. Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.
console.log('------------------');
let skaicius = 2; 
for (let i = 1; i <= 10; i++) {
    console.log(skaicius, "*", i, "=", skaicius * i);
}
/*8. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n 
colius centimetrais.*/
console.log('------------------');
let n = 10;
for (let i = 1; i <= n; i++) {
  console.log(i * 2.54);
}
/*9. Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite 
kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, 
indėlį. */
console.log('------------------');
const indelis = 100
const palukanos = 0.2
let metai = 10
let count = 0
    for(let i = 1; i <= metai; i++) {
            count++

    console.log(`Pasidėjus į banką ${indelis} EUR, su ${palukanos} % palūkanomis, po ${count} metų sukaupsite ${indelis * palukanos * count}`);
}
/*10. Keliamieji metai turi 366 dienas, paprastieji – 365. Visi metai, išskyrus šimtmečius, yra 
keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 
metai yra keliamieji, nes dalūs iš 400, o 1700 – paprastieji. Raskite visus mūsų eros 
keliamuosius metus.*/
console.log('------------------');
for (let m = 0; m <= 2022; m+=4) {
    if ( m % 4 === 0 && m % 100 !== 0 || m % 400 === 0 ) {
        console.log(m);
    } 
}
