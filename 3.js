function getNum(num){
    return function sum(num2){
        return num + num2;
    }
}


const total = getNum(8);
console.log(total(8))