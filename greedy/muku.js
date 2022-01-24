// We are given an array A. We have to find the number of pairs with following conditions

// i<j
// A[i]=A[j]
// i*j is divisible by X
// Have to do this in something better than O(N * N). I used an approach with hashmap to store all indices with condition 2 in one array, and that element as key, but that solution was not efficient enough. I think it has something to do with GCD. Any help is appreciated.

// Sample input:
let array = [ 2,3,4,3,3,2,3,3],k = 2,count = 0;

// Sample output:
// 10

let i = 0,j = array.length - 1;
while(i < j){
    if((i * j) % k === 0 && i < j){
    if(array[i] === array[j]){
        count++
    }
    }
    if((i *j ) < k)i++;
    else j--;
}
console.log(count);