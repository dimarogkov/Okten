var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    return Human;
}());
var Deputat = /** @class */ (function (_super) {
    __extends(Deputat, _super);
    function Deputat(name, lastname, age, weight, height, habarnuk, moneyValueTake) {
        var _this = _super.call(this, weight, height) || this;
        _this.name = name;
        _this.lastname = lastname;
        _this.age = age;
        _this.habarnuk = habarnuk;
        _this.moneyValueTake = moneyValueTake;
        return _this;
    }
    Deputat.prototype.giveMoney = function (habarnuk, moneyValueTake) {
        if (habarnuk === false && moneyValueTake < 5000 || habarnuk === true && moneyValueTake < 5000) {
            console.log("Sorry, but I am honest Deputat !!");
            return;
        }
        if (habarnuk === true && moneyValueTake >= 5000 || habarnuk === false && moneyValueTake >= 5000) {
            console.log("Wow, I think I can help you!");
            return;
        }
    };
    return Deputat;
}(Human));
var Lyshko_Scotunaka = new Deputat("Lyshko", "Scotunaka", 36, 78, 182, true, 21000);
var Ulia_Tumoshenko = new Deputat("Ulia", "Tumoshenko", 50, 60, 171, false, 2000);
var Vity_Box = new Deputat("Vity", "Klichko", 42, 101, 191, false, 55000);
var Pety_Chokolad = new Deputat("Petro", "Poroshenko", 37, 84, 179, true, 90000);
var Hola_Mola = new Deputat("Hola", "Mola", 54, 90, 179, true, 2000);
var Gora_Mikatryn = new Deputat("Gora", "Mikatryn", 36, 95, 164, false, 100);
var Voktor_Father = new Deputat("Victor", "Fathe", 40, 90, 67, false, 18000);
var Dima_Rogkov = new Deputat("Dima", "Rogkob", 43, 98, 185, true, 250000);
var Viktor_Pavlok = new Deputat("Viktor", "Pavlok", 24, 87, 191, true, 130000);
var Father_Min = new Deputat("Father", "Min", 28, 78, 160, false, 5000);
var Jon_Kuchma = new Deputat("Jon", "Kuchma", 18, 91, 158, false, 90000);
var Lena_Davinchi = new Deputat("Lena", "Davinchi", 46, 71, 193, false, 500);
var Fruction = /** @class */ (function () {
    function Fruction(fructionName) {
        this.listFruction = [];
        this.fructionName = fructionName;
    }
    Fruction.prototype.addDeputat = function (deputat) {
        this.listFruction.push(deputat);
    };
    Fruction.prototype.removeDeputat = function (deputat) {
        this.listFruction = this.listFruction.filter(function (value) { return value !== deputat; });
    };
    Fruction.prototype.removeAllHabarnuk = function () {
        this.listFruction = this.listFruction.filter(function (value) { return value.habarnuk === true; });
    };
    Fruction.prototype.mainStarOfUkraine = function () {
        return this.listFruction.sort(function (a, b) { return b.moneyValueTake - a.moneyValueTake; })[0];
    };
    Fruction.prototype.showAllDeputat = function () {
        return this.listFruction;
    };
    Fruction.prototype.removeAllDeputat = function () {
        this.listFruction.splice(0, this.listFruction.length);
    };
    Fruction.prototype.showSumHubur = function () {
        var sum = 0;
        for (var _i = 0, _a = this.listFruction; _i < _a.length; _i++) {
            var number = _a[_i];
            sum += number.moneyValueTake;
        }
        console.log(sum);
        return sum;
    };
    return Fruction;
}());
// Fraction
var Ukraine = new Fruction('Ukraine');
var New_Land = new Fruction('New_Land');
var For_the_People = new Fruction('For_the_People');
var Love = new Fruction('Love');
// Add new Deputat
Ukraine.addDeputat(Lyshko_Scotunaka);
Ukraine.addDeputat(Ulia_Tumoshenko);
Ukraine.addDeputat(Vity_Box);
Ukraine.addDeputat(Pety_Chokolad);
// Delete Deputat
// Ukraine.removeDeputat(Pety_Chokolad);
// Remove All Huburnuk
// Ukraine.removeAllHabarnuk();
// Deputat who take more then other
// console.log(Ukraine.mainStarOfUkraine());
// Show All Deputats
// Ukraine.showAllDeputat();
// Remove All Deputats
// Ukraine.removeAllDeputat();
// Show all Sum Hubur
// Ukraine.showSumHubur();
// console.log(Ukraine);
var Rada = /** @class */ (function () {
    function Rada() {
        this.mapFraction = [];
    }
    Rada.prototype.addFraction = function (fraction) {
        this.mapFraction.push(fraction);
    };
    Rada.prototype.removeFaction = function (fraction) {
        this.mapFraction = this.mapFraction.filter(function (value) { return value.fructionName !== fraction.fructionName; });
    };
    Rada.prototype.showAllFraction = function () {
        return this.mapFraction;
    };
    Rada.prototype.showFraction = function (fraction) {
        this.mapFraction = this.mapFraction.filter(function (value) { return value.fructionName === fraction.fructionName; });
    };
    Rada.prototype.addDeputatOnFraction = function (fraction, deputat) {
        for (var _i = 0, _a = this.mapFraction; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.fructionName === fraction.fructionName) {
                fraction.listFruction.push(deputat);
            }
        }
    };
    Rada.prototype.removeDeputatFromFraction = function (fraction, deputat) {
        for (var _i = 0, _a = this.mapFraction; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.fructionName === fraction.fructionName) {
                fraction.listFruction = fraction.listFruction.filter(function (value) { return value !== deputat; });
            }
        }
    };
    Rada.prototype.showAllDeputatHuburnik = function (fraction) {
        for (var _i = 0, _a = this.mapFraction; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.fructionName === fraction.fructionName) {
                fraction.listFruction = fraction.listFruction.filter(function (value) { return value.habarnuk === true; });
            }
        }
    };
    Rada.prototype.showMainStarOfFraction = function (fraction) {
        for (var _i = 0, _a = this.mapFraction; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.fructionName === fraction.fructionName) {
                return fraction.listFruction.sort(function (a, b) { return b.moneyValueTake - a.moneyValueTake; })[0];
            }
        }
    };
    Rada.prototype.showAllDeputatOnFraction = function (fraction) {
        for (var _i = 0, _a = this.mapFraction; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.fructionName === fraction.fructionName) {
                return fraction.listFruction;
            }
        }
    };
    Rada.prototype.theMainStarOfTheCountry = function () {
        var arrForStar = [];
        for (var _i = 0, _a = this.mapFraction; _i < _a.length; _i++) {
            var item = _a[_i];
            item.listFruction.sort(function (a, b) { return b.moneyValueTake - a.moneyValueTake; });
            arrForStar.push(item.listFruction[0]);
        }
        return arrForStar.sort(function (a, b) { return b.moneyValueTake - a.moneyValueTake; })[0];
    };
    return Rada;
}());
var rada = new Rada();
// Add Fraction
rada.addFraction(Ukraine);
rada.addFraction(New_Land);
rada.addFraction(For_the_People);
rada.addFraction(Love);
// Remove Fraction
// rada.removeFaction(For_the_People);
// Show the Fraction
// rada.showFraction(New_Land);
// Show All Fraction
// rada.showAllFraction();
// Add Deputat on Fraction
rada.addDeputatOnFraction(New_Land, Gora_Mikatryn);
rada.addDeputatOnFraction(New_Land, Hola_Mola);
rada.addDeputatOnFraction(New_Land, Voktor_Father);
rada.addDeputatOnFraction(For_the_People, Dima_Rogkov);
rada.addDeputatOnFraction(For_the_People, Viktor_Pavlok);
rada.addDeputatOnFraction(Love, Father_Min);
rada.addDeputatOnFraction(Love, Jon_Kuchma);
rada.addDeputatOnFraction(Love, Lena_Davinchi);
// Remove Deputat on Fraction
// rada.removeDeputatFromFraction(Ukraine, Ulia_Tumoshenko);
// Show ALL Deputat Huburnik on Fraction
// rada.showAllDeputatHuburnik(Ukraine);
// rada.showAllDeputatHuburnik(New_Land);
// rada.showAllDeputatHuburnik(For_the_People);
// rada.showAllDeputatHuburnik(Love);
// show Main Star Of Fraction
// console.log(rada.showMainStarOfFraction(Ukraine));
// console.log(rada.showMainStarOfFraction(New_Land));
// console.log(rada.showMainStarOfFraction(For_the_People));
// console.log(rada.showMainStarOfFraction(Love));
// Show All Deputat on Fraction
// console.log(rada.showAllDeputatOnFraction(Love));
// The Main Star of The Country
console.log(rada.theMainStarOfTheCountry());
// console.log(rada.mapFraction);
// console.log(Ukraine);
// console.log(Love);
