/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    let ms = seconds*1000
    let start = Date.now();
    while (Date.now() < (start+ms)) {    }
    let stop = Date.now();
    console.log((stop-start)/1000)
}

sleep(4);
