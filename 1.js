let arrNew = [1,2,"a"];

function getEvenOdd (arr){
    let even = 0;
    let odd = 0;
    let others = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            others++;
        } else {
           if (arr[i] % 2 === 0){        
               even++;
           } else {
               odd++;
        }
    }
    }
    return[even, odd, others];
}

let result = getEvenOdd (arrNew);
console.log("Четных : " + result[0]);
console.log("Не четных : " + result[1]);
console.log("Остальные : " + result[2]);
