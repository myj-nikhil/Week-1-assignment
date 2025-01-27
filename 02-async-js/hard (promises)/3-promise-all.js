/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Waited for a second')
        },1000)
})
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Waited for 2s')
        },2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Waited for 3s')
        },3000)
    })
}

function calculateTime() {
    let a  = Date.now(); 
    Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then((results)=>{
        console.log("Time taken: "+ (Date.now()-a)/1000)
        console.log("all resolved",results)
    }).catch((error)=>{
        console.error(error);
    })
}

calculateTime();