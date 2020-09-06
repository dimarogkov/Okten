class Human {
    weight:number
    height:number

    constructor(weight: number, height:number) {
        this.weight = weight
        this.height = height
    }
}

class Deputat extends Human {
    name: string
    lastname:string
    age: number
    habarnuk: boolean
    moneyValueTake: number

    constructor(name:string, lastname:string,age:number, weight: number, height:number, habarnuk:boolean, moneyValueTake:number) {
        super(weight,height)
        this.name = name
        this.lastname = lastname
        this.age = age
        this.habarnuk = habarnuk
        this.moneyValueTake = moneyValueTake
    }

    giveMoney(habarnuk:boolean,moneyValueTake:number) {
        if(habarnuk === false && moneyValueTake < 5000 || habarnuk === true && moneyValueTake < 5000) {
            console.log("Sorry, but I am honest Deputat !!");
            return
        }
        if(habarnuk === true && moneyValueTake >= 5000 || habarnuk === false && moneyValueTake >= 5000) {
            console.log("Wow, I think I can help you!");
            return
        }
    }
}
let Lyshko_Scotunaka = new Deputat("Lyshko", "Scotunaka", 36, 78, 182, true, 21000);
let Ulia_Tumoshenko = new Deputat("Ulia", "Tumoshenko", 50, 60, 171, false, 2000);
let Vity_Box = new Deputat("Vity", "Klichko", 42, 101, 191, false, 55000);
let Pety_Chokolad = new Deputat("Petro", "Poroshenko", 37, 84, 179, true, 90000);

let Hola_Mola = new Deputat("Hola", "Mola", 54, 90, 179, true, 2000);
let Gora_Mikatryn = new Deputat("Gora", "Mikatryn", 36, 95, 164, false, 100);
let Voktor_Father = new Deputat("Victor", "Fathe", 40, 90, 67, false, 18000);

let Dima_Rogkov = new Deputat("Dima", "Rogkob", 43, 98, 185, true, 250000);
let Viktor_Pavlok = new Deputat("Viktor", "Pavlok", 24, 87, 191, true, 130000);

let Father_Min = new Deputat("Father", "Min", 28, 78, 160, false, 5000);
let Jon_Kuchma = new Deputat("Jon", "Kuchma", 18, 91, 158, false, 90000);
let Lena_Davinchi = new Deputat("Lena", "Davinchi", 46, 71, 193, false, 500);

class Fruction {
    listFruction:Deputat[] = []
    fructionName:string

    constructor(fructionName:string) {
        this.fructionName = fructionName
    }

    addDeputat(deputat:Deputat):void {
        this.listFruction.push(deputat);
    }
    removeDeputat(deputat:Deputat):void {
        this.listFruction = this.listFruction.filter(value => value !== deputat)
    }
    removeAllHabarnuk() {
        this.listFruction = this.listFruction.filter(value => value.habarnuk === true)
    }
    mainStarOfUkraine() {
        return this.listFruction.sort((a, b) => b.moneyValueTake-a.moneyValueTake)[0];
    }
    showAllDeputat() {
        return this.listFruction
    }
    removeAllDeputat() {
        this.listFruction.splice(0, this.listFruction.length);
    }
    showSumHubur() {
        let sum = 0;
        for(let number of this.listFruction) {
            sum += number.moneyValueTake;
        }
        console.log(sum);
        return sum
    }
}
// Fraction
let Ukraine = new Fruction('Ukraine');
let New_Land = new Fruction('New_Land');
let For_the_People = new Fruction('For_the_People');
let Love = new Fruction('Love');

// Add new Deputat
Ukraine.addDeputat(Lyshko_Scotunaka);
Ukraine.addDeputat(Ulia_Tumoshenko);
Ukraine.addDeputat(Vity_Box);
Ukraine.addDeputat(Pety_Chokolad);

// Delete Deputat
Ukraine.removeDeputat(Pety_Chokolad);

// Remove All Huburnuk
Ukraine.removeAllHabarnuk();

// Deputat who take more then other
console.log(Ukraine.mainStarOfUkraine());

// Show All Deputats
Ukraine.showAllDeputat();

// Remove All Deputats
Ukraine.removeAllDeputat();

// Show all Sum Hubur
Ukraine.showSumHubur();

// console.log(Ukraine);

class Rada {
    mapFraction:Fruction[] = []

    addFraction(fraction: Fruction){
        this.mapFraction.push(fraction);
    }
    removeFaction(fraction:Fruction) {
        this.mapFraction = this.mapFraction.filter(value => value.fructionName !== fraction.fructionName);
    }
    showAllFraction() {
        return this.mapFraction
    }
    showFraction(fraction:Fruction) {
        this.mapFraction = this.mapFraction.filter(value => value.fructionName === fraction.fructionName);
    }
    addDeputatOnFraction(fraction:Fruction, deputat:Deputat) {
        for(let item of this.mapFraction){
            if(item.fructionName === fraction.fructionName) {
                fraction.listFruction.push(deputat);
            }
        }
    }
    removeDeputatFromFraction(fraction:Fruction, deputat:Deputat) {
        for(let item of this.mapFraction){
            if(item.fructionName === fraction.fructionName) {
                fraction.listFruction = fraction.listFruction.filter(value => value !== deputat)
            }
        }
    }
    showAllDeputatHuburnik(fraction:Fruction) {
        for(let item of this.mapFraction) {
            if(item.fructionName === fraction.fructionName) {
                fraction.listFruction = fraction.listFruction.filter(value => value.habarnuk === true);
            }
        }
    }
    showMainStarOfFraction(fraction:Fruction) {
        for(let item of this.mapFraction) {
            if(item.fructionName === fraction.fructionName) {
                return fraction.listFruction.sort((a,b) => b.moneyValueTake - a.moneyValueTake)[0];
            }
        }
    }
    showAllDeputatOnFraction(fraction:Fruction) {
        for(let item of this.mapFraction) {
            if(item.fructionName === fraction.fructionName) {
                return fraction.listFruction;
            }
        }
    }
    theMainStarOfTheCountry() {
        let arrForStar = []
        for(let item of this.mapFraction) {
            item.listFruction.sort((a,b) => b.moneyValueTake - a.moneyValueTake);
            arrForStar.push(item.listFruction[0]);
        }
        return arrForStar.sort((a,b) => b.moneyValueTake - a.moneyValueTake)[0];
    }
}

let rada = new Rada();

// Add Fraction
rada.addFraction(Ukraine);
rada.addFraction(New_Land);
rada.addFraction(For_the_People);
rada.addFraction(Love);

// Remove Fraction
rada.removeFaction(For_the_People);

// Show the Fraction
rada.showFraction(New_Land);

// Show All Fraction
rada.showAllFraction();

// Add Deputat on Fraction
rada.addDeputatOnFraction(New_Land, Gora_Mikatryn);
rada.addDeputatOnFraction(New_Land,Hola_Mola);
rada.addDeputatOnFraction(New_Land,Voktor_Father);

rada.addDeputatOnFraction(For_the_People,Dima_Rogkov);
rada.addDeputatOnFraction(For_the_People,Viktor_Pavlok);

rada.addDeputatOnFraction(Love,Father_Min);
rada.addDeputatOnFraction(Love,Jon_Kuchma);
rada.addDeputatOnFraction(Love,Lena_Davinchi);

// Remove Deputat on Fraction
rada.removeDeputatFromFraction(Ukraine, Ulia_Tumoshenko);

// Show ALL Deputat Huburnik on Fraction
rada.showAllDeputatHuburnik(Ukraine);
rada.showAllDeputatHuburnik(New_Land);
rada.showAllDeputatHuburnik(For_the_People);
rada.showAllDeputatHuburnik(Love);

// show Main Star Of Fraction
console.log(rada.showMainStarOfFraction(Ukraine));
console.log(rada.showMainStarOfFraction(New_Land));
console.log(rada.showMainStarOfFraction(For_the_People));
console.log(rada.showMainStarOfFraction(Love));

// Show All Deputat on Fraction
console.log(rada.showAllDeputatOnFraction(Love));

// The Main Star of The Country
console.log(rada.theMainStarOfTheCountry());

// console.log(rada.mapFraction);