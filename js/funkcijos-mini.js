//1. Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.
const suma = (a, b) => a + b;
const rez = suma(2, 3);
console.log(rez);
/*2. Parašyti funkciją, kuri priima du kintamuosius. Palygina tuos du skaičius ir grąžina 
rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.*/
console.log('------------------');
const a = 5; 
const b = 7;

if (a > b) {
    console.log (`skaičius "${a}" yra didesnis`);
} else if (a < b) {
    console.log (`skaičius "${b}" yra didesnis`);
} else if (a === b) {
    console.log (`skaičiai yra lygus`);
} 
/*3. Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai 
yra keliemieji.*/
console.log('------------------');
function metai(m) {
    if (m % 4 === 0 && m % 100 !== 0 || 400 === 0) {
        return `${m} metai keliemieji.`;
    } else {
        return `${m} metai nekeliemieji.`;
    }
}
const result = metai (2022);
console.log(result);
//4. Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.
console.log('------------------');
const kvadratas = (i) => i * i;
const re = kvadratas(3);
console.log(re);
/*5. Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. Funkcija 
turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.*/
console.log('------------------');
function vSkSum (c) {
    if (c > 1) {
        let sum = 0;
        for (let i = 1; i <= c; i++) {
            sum += i;
        } return sum;
    }
}
console.log(vSkSum(6));
/*6. Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos 
argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).*/
console.log('------------------');
function liekana(nuo, iki, daliklis) {
    let count = 0;
    for (let i = nuo; i < iki; i++) {
      if (i % daliklis === 0 && i !== 1 && i !== 0) {
        count++;
      }
    }
    return `Skaičių intervale tarp ${nuo} ir ${iki}, besidalijančių be liekanos iš ${daliklis} yra ${count} vienetai.`;
  }
  console.log(liekana(8, 31, 7));
/*7. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Funkcija turi išvesti tekstą į 
ekraną ir dar papildomai parodyti jo ilgį (simbolių kiekį)*/
/*console.log('------------------');
function tekstoIlgis (tekstas) {
    return `Sakinys "${tekstas}", turi ${tekstas.length} simboliu.`;
}
const tekstoIlgis = tekstoIlgis ('tekstas');
console.log('Vilnius gražus ir žalias miestas');*/
/*8. Parašyti funkciją telefonoNumeris, kuri priima vieną kintamąjį – masyvą su 10 skaičių 
jame. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX".*/
console.log('------------------');
const n = [3, 7, 0, 6, 1, 2, 3, 4, 5, 6];
function telefonoNumeris(n) {
    return `Telefono numeris (${n[0]}${n[1]}${n[2]})${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}.`;
} 
console.log(telefonoNumeris(n))
/*9. Parašyti funkciją, kuri priimtų du kintamuosius - tekstus. Palyginti kuris tekstas yra 
ilgesnis.*/
console.log('------------------');
function tekstas(a, b) {
    if (a.length > b.length) {
      return `Tekstas ${a} ilgesnis nei ${b}.`;  
    } else if (a.length < b.length) {
      return `Tekstas ${b} ilgesnis nei ${a}.`;
    } else  {
      return `Tekstas ${b} ir ${a} yra lygus.`;
    }
  }
  const ats = tekstas("raudona masina", "juodos penkios varnos");
  console.log(ats);

/*10. Parašyti funkciją, kuri priimtų vieną kintamąjį - tekstą. Suskaičiuoti, kiek tekste yra ‚a‘ 
raidžių*/
console.log('------------------');
function tekstas (vienas) {

}
console.log letters('vienas', 0);
