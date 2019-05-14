// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. 
// Your program should take a number as input. That number should be the number of 
// sheep you have. 
// The function should display the number along with the message 
// "Another sheep jumps over the fence" until no more sheep are left.
// Input: 3
// Output:
// 3: Another sheep jump over the fence
// 2: Another sheep jump over the fence
// 1: Another sheep jump over the fence
// All sheep jumped over the fence

function countSheep(num){
    for(let i=num; i>0; i-- ){
        console.log(i , ': Another sheep jumps over the fence')

    }
    console.log('All sheep jumped over the fence')
}
countSheep(5)




function powerCalculator(base, exponent){
    if(exponent < 0){
        return 'Exponent should be >=0'
    }
    let product = 1;
    for(let i=1; i<= exponent; i++){
        product *= base
    }
    return product;
}
console.log(powerCalculator(10,2))



function reverseString(str){
    let outputStr = '';

    for(let i= str.length-1; i>=0; i--){
        outputStr+= str[i];
    }
    return outputStr
}

console.log(reverseString('Hello'))


function triangle(n){
    let sum=0
   for(let i=1; i<= n; i++){
       sum += i
   } 
   return sum;
}

console.log(triangle(5))


function split(str, sep){
    let outputStr = '';
    for (let i=0; i< str.length; i++){
        if(str[i] !== sep){
            outputStr += str[i]
        }
    }
    return outputStr;
}

console.log(split('hellohello', 'l'))