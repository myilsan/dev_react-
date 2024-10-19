let varC = (value)=> {

    console.log(value);
    return value +1;
}

varC(10);

function main(value){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    value();
    
}

function sub()
{
    console.log("i am sub");
}

main(sub)


// 1.Spread 연산자
//--> Spread : 흩뿌리다, 펼치다 라는 뜻
//--<

let  arr =[1,2,3];
let  [a1, a2, a3] = arr;
console.log(a1, a2, a3);


let arr1 =[1,2,3];
let arr2 =[4, ...arr1,5,6];

console.log(arr2);

for(let i=0; i < arr.length; i++){
    console.log(arr[i]);
}

arr2.forEach(element => {
    console.log(element);
});

for (const element of arr2) {
    console.log(element);
}

//객체 for문 사용하기 
let person ={
    name : "최경호",
    age: 25,
    hobby : "등산" 
}

let keys = Object.keys(person);
for(let key of keys)
{
    const value = person[key];
    console.log(key,value);
}

for (let key in person) {
    const value = person[key]
    console.log(key, value);
}
