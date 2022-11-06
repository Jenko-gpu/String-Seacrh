let fs = require('fs');

let filename = process.argv[2];
let substr = process.argv[3];

for (let a = 4; a<process.argv.length; a++){
    substr +=' '+ process.argv[a];
}


function brute(file, str){
    let text = fs.readFileSync(file).toString();
    let starttime = new Date();
    let Ans = new Array();
    let i = 0;
    let j = 0;
    while (i + str.length < text.length){
        while (str.charAt(j)==text.charAt(i+j) && j<str.length){
            j++;
        }
        if (j==str.length){
            Ans.push(i);

        }
        j = 0;
        i++;
    }
    let end = new Date();
    console.log(`Brute search:${end - starttime} ms`);
    //console.log(Ans);
}

function hashsearch(file, str){
    let text = fs.readFileSync(file).toString();
    let starttime = new Date();
    let Ans = new Array();
    let strHash = 0;
    for (let a = 0; a<str.length; a++){
        strHash += str.charCodeAt(a);
    }
    let i = 0, j = 0;
    let curHash = 0;
    while (j<str.length){
        curHash += text.charCodeAt(j);
        j++;
    }
    
    j = 0;
    while (i + str.length < text.length){
        if (curHash == strHash){
            while (str.charAt(j)==text.charAt(i+j) && j<str.length){
                j++;
            }
            if (j==str.length){
                Ans.push(i);
            }
            j = 0;
        }
        curHash += text.charCodeAt(i+str.length) - text.charCodeAt(i);
        i++;
    }
    let end = new Date();
    console.log(`Hash search:${end - starttime} ms`);
    //console.log(Ans);
    
}
brute(filename,substr);

setTimeout(() => {  hashsearch(filename,substr); }, 1000);

