function counter() {
    console.log(Date.now());
    let count = 0;
    let nextSec = Date.now() + 1000;
    if(Date.now()== nextSec) {
        count += 1;
        console.log(count);
        nextSec += 1000;
    }
}

counter();