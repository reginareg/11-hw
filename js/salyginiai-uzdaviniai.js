/*
1.Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? 
Neigiamas – „Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turėtume gauti: 
Skaičius geras
*/
let n = 20;

if (n >= 0) {
    console.log ('Geras');
} else {
    console.log ('Blogas');
}

/*
2.Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą, 
kuri nustatytu, kaip turi pasielgti mokinys? Žinome šviesoforo spalvos kodą n, 1-žalia, 2-
geltona, 3-raudona. Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.
*/
let spalva = 2;

if ( spalva === 1 ) {
    console.log ('Eikite');
} else if ( spalva === 2 ) {
    console.log ('Palaukite');
}  else if ( spalva === 3 ) {
    console.log ('Sustokite');
} 

/*
3.Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas 
į dėžes. Gintautas turi d dėžių ir k knygų. Parašykite programą, kuri apskaičiuotų, ar 
Gintauto turimos knygos tilps į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite: 
Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos telpa į dėžes; kai 
d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos netelpa į dėžes.
*/
let deze = 2;
let knygos = 8;
let telpa = 5;

if (knygos <= deze * telpa) {
    console.log('Knygos telpa į dėžes');
} else if (knygos >= deze * telpa) {
    console.log ('Knygos netelpa į dėžes');
}

let d = 3;
let k = 18;
let t = 5;

if (k <= d * t) {
    console.log('Knygos telpa į dėžes');
} else if (k >= d * t) {
    console.log ('Knygos netelpa į dėžes');
}
/*
4.Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu 
vienetu, o mažesnį padidintu vienetu
*/
let a = 11;
let b = 22;

if (a > b) {
    a--;
    b++;
    console.log(`${a} ${b}`);
} else if (a < b) {
    a++;
    b--;
    console.log(`${a} ${b}`);
}
/*
5.Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų 
kainuoja p centų. Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius 
ir kiek centų m dar liks. Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 
porcijas, liks centų 10. Gali prireikti panaudoti Math.floor() funkciją.
*/
let centai = 50
let ledai = 20

console.log('Saulius nusipirks' + Math.floor (centai / ledai) + 'porciju ledu ir jam liks'  + (centai % ledai) + 'centu');

// kažką praleidau apie tarpelius, reik atkast info

/*
6.Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti 
lygiakraštį trikampį. Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti 
negalima. Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti: 
Trikampį sudėlioti negalima.
*/
let degtukai = 6
if (degtukai % 3 === 0  && degtukai > 0) {
   console.log('Trikampį sudėlioti galima');
} else {
    console.log('Trikampį sudėlioti negalima');
}
//kazkaip ne taip

/*
7.Parašykite programą, kuri žinant mėnesio numerį n atspausdintų to mėnesio dienų kiekį 
d. (tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)
*/
const men = 5;
if (men === 1 || men === 3 || men === 5 || men === 7 || men === 8 || men === 10 || men === 12) {
    console.log('31 d');
} else if (men === 2) {
    console.log('28 d');
} else {
    console.log('30 d');
}
/*
8.Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką. Jei iškrenta skaičius 1, 3 
arba 5 – kambarį tvarko jaunėlis, jei 2, 4 arba 6 – vyresnėlis. Parašykite programą, kuri 
įvedus iškritusį skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, arba 
„Kambarį tvarkys vyresnėlis“. Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys 
jaunėlis. Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis.
*/
let kauliukas = 1;

if (kauliukas % 2 === 1) {
    console.log('Kambarį tvarkys jaunėlis');
} else {
    console.log('Kambarį tvarkys vyresnėlis');
}
/*
9.Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri 
metai. Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms 
skiriamas eilės numeris. Parašykite programą, kuri surastų m-ųjų metų olimpinių 
žaidynių numerį n. Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“. 
Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti 
spausdinama: Metai neolimpiniai.
*/
const metai = 1904;

if (metai % 4 === 0) {
    const zaidynes = 1 + ((metai - 1896) / 4);
    console.log(`${metai} metais ivyko ${zaidynes}os rungtynes.`);
} else {
    console.log('Metai neolimpiniai');
}

/*
10.Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro 
kelionė trunka m2 minučių. Parašykite programą, kuri ekrane parodytų pranešimą apie 
tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų ir m minučių. Pasitikrinkite: 
jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; jei v1 = 8, 
m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos.
*/
const kelioneTrunka = 43;
const isejimoVal = 8;
const isejimoMin = 29;
const pamokosVal = 9;
const pamokosMin = 5;

const kelionesPradziaMinutem = isejimoVal * 60 + isejimoMin;
const pamokosPradziaMinutem = pamokosVal * 60 + pamokosMin;

if (pamokosPradziaMinutem - kelionesPradziaMinutem >= kelioneTrunka) {
    console.log('Petras į pamoką nepavėluos');
} else {
    console.log('Petras į pamoką pavėluos');
}