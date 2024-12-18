let varC = (value) => {

    console.log(value);
    return value + 1;
}

varC(10);

function main(value) {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    value();
}

function sub() {
    console.log("i am sub");
}

main(sub)

// 1.Spread 연산자
//--> Spread : 흩뿌리다, 펼치다 라는 뜻
//--<

let arr = [1, 2, 3];
let [a1, a2, a3] = arr;
console.log(a1, a2, a3);


let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

console.log(arr2);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr2.forEach(element => {
    console.log(element);
});

for (const element of arr2) {
    console.log(element);
}

//객체 for문 사용하기 
let person = {
    name: "최경호",
    age: 25,
    hobby: "등산"
}

let keys = Object.keys(person);
for (let key of keys) {
    const value = person[key];
    console.log(key, value);
}

for (let key in person) {
    const value = person[key]
    console.log(key, value);
}

const mapResult = arr2.map((item,idx, arr)=>{    
    return item * 2 ;    
});

console.log(mapResult);

setTimeout(()=>{
    console.log("콜백 응답");
},1000);


//***비동기 콜백 ***/
function add(a ,b, callback){
    setTimeout(()=>{
        const sum = a+ b;
        callback(sum);
    },2000);
}

add(1, 45 , (result)=>{
    //console.log(result);
})

/*********************/

 /* promise  test */ 
console.log(" promise          test");
function add10(num)
{
    const promise = new Promise((rosolev,reject)=>{ //resulve : 성공일때 , reject:실패일때
        
        // throw new Error("에러 발생였습니다.");
        
        // 2초 뒤 실행되도록 
        setTimeout(()=>{
            if(typeof num ==="number"){
                rosolev(num +10);
            }else{
                reject("not number");
            }
        },2000)
    });
    return promise;
}

add10(0)
.then((result)=>{
    console.log(result);    
    const newP = add10(result);   
    return newP;
})
.then((result)=>{
    console.log(result);
    return add10(result)
})
.then((result)=>{
    console.log(result);
    return add10(10);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>  console.log("Proise end"));

//setTimeout(()=>{
//   console.log(promise);
//},3000)

//성공일때
//promise.then((value)=>{
//    console.log(value);    

//}).catch((error)=>{  //실패일때 
    //console.log(error);
//});

//실패
//promise.catch((error)=>{
//   console.log(error);
//});

async function getData(){
    const data = new Promise((rosolev,reject)=>{ //resulve : 성공일때 , reject:실패일때
        setTimeout(()=>{            
            rosolev({
                name:"최경호",
                id:"myilsan"
            });           
        },4000);
    });

    return data;
}

async function printData()
{
    //await getData().then((result)=>{console.log(result)});
    const data = await getData();
    console.log(data);
}

printData();


let promise = new Promise((resolve,resject)=>{
    setTimeout(()=>{resolve("성공")},100);
});

promise.then(
    (result) => alert(result),
    error => alert(error)
)

 
// 0,null,undefined,"" => 은 falsy 임 나머지 는 모두  truthy 임

 
/******************************
 * && (AND) 연산자
*******************************/
// // 첫 번째 피연산자가 truthy이면,
// // AND는 두 번째 피연산자를 반환합니다.
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5

// // 첫 번째 피연산자가 falsy이면,
// // AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
// alert( null && 5 ); // null
// alert( 0 && "아무거나 와도 상관없습니다." ); // 0

//alert( 1 && 2 && null && 3 ); // null
//alert( 1 && 2 && 3 ); // 마지막 값, 3


/******************************
 * || (OR) 연산자
*******************************/
//alert( 1 || 0 ); // 1 (1은 truthy임)
//alert( null || 1 ); // 1 (1은 truthy임)
//alert( null || 0 || 1 ); // 1 (1은 truthy임)
//alert( undefined || null || 0 ); // 0 (모두 falsy이므로, 마지막 값을 반환함)

//alert 는 undefined 으로 응답한다.

//alert( alert(1) && alert(2) && 3 )
//alert( "" && alert(2) && 5 );

