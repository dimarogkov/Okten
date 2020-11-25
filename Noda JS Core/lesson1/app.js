
const fs = require('fs');
const path = require("path");

let dir = process.cwd();
let dir18 = path.join(dir, "1800");
let dir20 = path.join(dir, "2000");

const FilePath = (dirOne,dirTwo) => {
    fs.readdir(dirOne, (err, files) => {
        if(err) {
            console.log(err);
        } else {
            files.forEach(file => {
                fs.rename(path.join(dirOne,file), path.join(dirTwo,file), err => {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("done");
                    }
                })
            })
        };
    });
    fs.readdir(dirTwo, (err, files) => {
        if(err) {
            console.log(err);
        } else {
            files.forEach(file => {
                fs.rename(path.join(dirTwo,file), path.join(dirOne,file), err => {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("done");
                    }
                })
            })
        };
    })
};

FilePath(dir18, dir20);