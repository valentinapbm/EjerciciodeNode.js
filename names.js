const { faker } = require('@faker-js/faker');
const { fs } = require('file-system');

const randomName = faker.name.findName();

let arrayNames=[];
for(let i=1; i<=1000;i++){
    
    const randomName = faker.name.findName();
    arrayNames.push(randomName);
    
    
}

const names=arrayNames.join(",");

fs.writeFile("names.txt",names,(err) =>{
    if (err)
console.log(err);
else {
console.log("File written successfully\n");
console.log("The written has the following contents:");
console.log(fs.readFileSync("names.txt", "utf8"));
}
})