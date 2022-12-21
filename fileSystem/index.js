const fs = require('fs');
const { SHORT } = require('mysql/lib/protocol/constants/types');
const path = require('path');

const f1 = path.join(__dirname,'files','input1.txt');
const f2 = path.join(__dirname,'files','input2.txt');
const f3 = path.join(__dirname,'files','output2.txt');
const arr = [];
fs.readFile(f1,{
    encoding: 'utf-8',
    flag: 'r'
}, (err,data) => {
    const temp = data.split('\n');
    arr.push(...temp);
    fs.readFile(f2,{
        encoding: 'utf-8',
        flag:'r'
    },(err,data) => {
        const temp2 = data.split('\n');
        arr.push(...temp2);
        arr.sort();
        const res = arr.join('\n');
        fs.writeFile(f3,res,(err) => {
            if(err)
                throw err;
            console.log("output printed successfully");
        });

    });
});
