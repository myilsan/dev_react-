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


//** promise  test **/
console.log(" promise          test");
function add10(num)
{
    const promise = new Promise((resulve,reject)=>{ //resulve : 성공일때 , reject:실패일때
        setTimeout(()=>{
            if(typeof num ==="number"){
                resulve(num +10);
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
    const data = new Promise((resulve,reject)=>{ //resulve : 성공일때 , reject:실패일때
        setTimeout(()=>{            
            resulve({
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