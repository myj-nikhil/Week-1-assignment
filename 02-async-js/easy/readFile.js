var fs = require('fs');

fs.readFile('random.txt', 'utf8' ,function (error,data) {
    if(error) {
        console.error(error);
        return;
    }
    console.log(data);    
})


let array =[0];
array.length = 1000000;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}