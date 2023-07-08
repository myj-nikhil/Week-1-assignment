/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let start = Date.now();
    console.log(start)
    let ans = 1;
    for(i=2; i<=n;i++){
        ans+=i;
    }
    let end = Date.now();
    console.log(end)
    let answer=((end-start)/1000);
    console.log(answer)
    return answer;
}

ans = calculateTime(4644444633);

console.log(ans);