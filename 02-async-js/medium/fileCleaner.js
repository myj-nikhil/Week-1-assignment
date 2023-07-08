var fs = require("fs");


fs.readFile("random.txt", "utf8",  (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  console.log("content is ", data);
  
  let array = Array.from(data);
  let length = console.log(array.length);
  
  console.log(array);

  let gaps = true;
  let count = 0
  
 const clean = (array) => {
  for (let index = 0; index < array.length; index++) {
     
    count++;
    
  
    if(array[index] == ' ' && array[index + 1] == ' ') {
      array.splice(index,1);
      clean(array);
  }
  }
 }
 
 clean(array);
 console.log(count);
  
  let cleanedString = "";
  for (let index in array) {
    const element = array[index];
    console.log(element)
    cleanedString += element;
  }
  console.log("cleaned string is", cleanedString);
  fs.writeFile("random.txt", cleanedString, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});

