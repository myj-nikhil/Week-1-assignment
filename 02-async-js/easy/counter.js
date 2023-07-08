let counter =0;
function counterFunction(params) {
    setTimeout(() => {
        counterFunction();
        counter += 1;
        console.log(counter);
    }, 1000);
}

counterFunction();