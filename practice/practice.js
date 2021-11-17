function findit (array,k){
  let low = 0;
  let high = array.length-1;
  while(low <= high){
    let mid = Math.floor((low + high)/2);
    if(array[mid] == k)return mid;
    if(array[mid] < k){
      low = mid+1
    }
    if(array[mid] > k){
      high = mid-1
    }
  }
  return -1;
}

console.log(findit([1,2,3,4,5],3));