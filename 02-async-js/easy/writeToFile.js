var fs =  require('fs');

const content  = 'Random  3'

fs.writeFile('random.txt', content, (err) => {
    if (err) throw err;
    console.log('The file has been saved!')
})

fs.readFile('random.txt', 'utf8' ,function (err,data) {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);    
})

