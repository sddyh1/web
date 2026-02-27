const arr = [1, 6, -1, 22, 13];

let min = arr[0];
let max = arr[arr.size()-1];

for(let i = 1; i < arr.size(); ++i){
    if(arr[i] > max){
        max = arr[i];
    }
    if(min > arr[i]){
        min = arr[i];
    }
}

console.log(max);