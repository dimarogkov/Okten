// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

// Треба реалізувати свій розпорядок дня Колбеками. 

function dayFolse() {console.log('Error');}

function wakeUp(wakeUp, cb) {
    setTimeout ( () => {
        if(wakeUp) {
            cb(null, 'I am Wake Up');
        } else {
            cb('Oppps');
        }
    }, 1000);
}
function swimFace(swimFace, cb) {
    setTimeout ( () => {
        if(swimFace) {
            cb(null, 'I am Swim My Face');
        } else {
            cb('Oppps');
        }
    }, 1000);
}
function drinkCoffe(drinkCoffe, cb) {
    setTimeout ( () => {
        if(drinkCoffe) {
            cb(null, 'I am drink my coffe');
        } else {
            cb('Oppps');
        }
    }, 1000);
}
function writeCode(writeCode, cb) {
    setTimeout ( () => {
        if(writeCode) {
            cb(null, 'I am write my clean code');
        } else {
            cb('Oppps');
        }
    }, 1000);
}
function cleanHouse(cleanHouse, cb) {
    setTimeout ( () => {
        if(cleanHouse) {
            cb(null, 'I am Clean My House');
        } else {
            cb('Oppps');
        }
    }, 1000);
}
function haveDinner(haveDinner, cb) {
    setTimeout ( () => {
        if(haveDinner) {
            cb(null, 'I am eat my Dinner');
        } else {
            cb('Oppps');
        }
    }, 1000);
}

wakeUp(true, (error, data) => {
    if(error){
        dayFolse();
    } else {
        console.log(data);
        swimFace (true, (error, data) => {
            if(error){
                dayFolse();
            } else {
                console.log(data);
                drinkCoffe (true, (error, data) => {
                    if(error) {
                        dayFolse();
                    } else {
                        console.log(data);
                        writeCode (true, (error, data) => {
                            if(error) {
                                dayFolse();
                            } else {
                                console.log(data);
                                cleanHouse (true, (error, data) => {
                                    if(error) {
                                        dayFolse();
                                    } else {
                                        console.log(data);
                                        haveDinner (true, (error, data) => {
                                            if(error) {
                                                dayFolse();
                                            } else {
                                                console.log(data);
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})

// Треба реалізувати свій розпорядок дня промісами. 

function dayFolse() {console.log('Error');}

function wakeUp(wakeUp) {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            if (wakeUp) {
                resolve('I am Wake Up')
            } else {
                reject('Error');
            }
        }, 1000)
    })
}
function swimFace(swimFace) {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            if (swimFace) {
                resolve('I am Swim My Face')
            } else {
                reject('Error');
            }
        }, 1000)
    })
}
function drinkCoffe(drinkCoffe) {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            if (drinkCoffe) {
                resolve('I am drink my coffe')
            } else {
                reject('Error');
            }
        }, 1000)
    })
}
function writeCode(writeCode) {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            if (writeCode) {
                resolve('I am write my clean code')
            } else {
                reject('Error');
            }
        }, 1000)
    })
}
function cleanHouse(cleanHouse) {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            if (cleanHouse) {
                resolve('I am Clean My House')
            } else {
                reject('Error');
            }
        }, 1000)
    })
}
function haveDinner(haveDinner) {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            if (haveDinner) {
                resolve('I am eat my Dinner')
            } else {
                reject('Error');
            }
        }, 1000)
    })
}

wakeUp(true)
    .then ( value => {
        console.log(value);
        return swimFace(true)
    })
    .then ( value => {
        console.log(value);
        return drinkCoffe(true)
    })
    .then ( value => {
        console.log(value);
        return writeCode(true)
    })
    .then ( value => {
        console.log(value);
        return cleanHouse(true)
    })
    .then ( value => {
        console.log(value);
        return haveDinner(true)
    })
    .then ( value => {
        console.log(value);
    })
    .catch( () => {
        dayFolse();
    })

// Треба реалізувати свій розпорядок дня асинк авейт.
async function MyEveryDay() {
    try {
        let wakeUpNew = await wakeUp(true);
        let swimFaceNew = await swimFace(true);
        let drinkCoffeNew = await drinkCoffe(true);
        let writeCodeNew = await writeCode(true);
        let cleanHouseNew = await cleanHouse(true);
        let haveDinnerNew = await haveDinner(true);

        console.log(wakeUpNew);
        console.log(swimFaceNew);
        console.log(drinkCoffeNew);
        console.log(writeCodeNew);
        console.log(cleanHouseNew);
        console.log(haveDinnerNew);
    }
    catch (e) {
        console.error(e);
        dayFolse();
    }
}
MyEveryDay();