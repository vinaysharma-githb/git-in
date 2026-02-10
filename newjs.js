
  
  
// console.log("Hello first")
// setTimeout(()=>{console.log("1")},2000)
// setTimeout(()=>{console.log(" 2 ")},2500)
// setTimeout(()=>{console.log(" 3 ")},3000)
// setTimeout(()=>{console.log("4 ")},4000)
// console.log("Hello second")

// setTimeout(() => {
//   alert("Line after 2sec")  
// }, 2*2000);

// const timerID= setInterval(() => {console.log("setInterval")}, 1000)

// const timeoutID =setTimeout(() => {clearInterval(timerID)}, 10000)
// clearTimeout(timeoutID)

  
// const timerID= setInterval(() => {console.log("setInterval")}, 1000)

// const timeoutID =setTimeout(() => {clearInterval(timerID)}, 10000)

// let num=1;

// const id=setInterval(() => {
//   if(num===10)clearInterval(id)
//   console.log(num)
// num+=1
// }, 1000);

// console.log("before timeout")
// setTimeout(() => {
//   console.log("settimeout")
// }, 0);
// console.log("After timeout")

// const name = document.querySelector("#name")
// const btn = document.querySelector(".btn")
// const list = document.querySelector(".list")
// btn.addEventListener('click',()=>{
//     const li= document.createElement('li')
//     const dlt = document.createElement('button')
//     dlt.innerText= "Delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     li.appendChild(dlt)
//     list.appendChild(li)
//     name.value=""
// }) 
//     function print(num){
//     setTimeout(() => {
//         console.log("Inside print")
//         num()
//     }, 2000);
// }

// // function sample(){
// //     console.log("Inside callback")
// // }

// // print(sample)

// console.log("Starting Homework")
// setTimeout(() => {
//     console.log("Finished Homework")
//     console.log("Hello World")

//     setTimeout(() => {
//        console.log("This is another timeout function inside first one") 
//        console.log("This is another timeout function ") 

//        setTimeout(() => {
//         console.log("This is function inside second function")
//         console.log("This is another function ")
//        }, 1500);
//     },2000 );
    
// }, 2500);

// =======


  
  
// console.log("Hello first")
// setTimeout(()=>{console.log("1")},2000)
// setTimeout(()=>{console.log(" 2 ")},2500)
// setTimeout(()=>{console.log(" 3 ")},3000)
// setTimeout(()=>{console.log("4 ")},4000)
// console.log("Hello second")

// setTimeout(() => {
//   alert("Line after 2sec")  
// }, 2*2000);

// const timerID= setInterval(() => {console.log("setInterval")}, 1000)

// const timeoutID =setTimeout(() => {clearInterval(timerID)}, 10000)
// clearTimeout(timeoutID)

  
// const timerID= setInterval(() => {console.log("setInterval")}, 1000)

// const timeoutID =setTimeout(() => {clearInterval(timerID)}, 10000)

// let num=1;

// const id=setInterval(() => {
//   if(num===10)clearInterval(id)
//   console.log(num)
// num+=1
// }, 1000);

// console.log("before timeout")
// setTimeout(() => {
//   console.log("settimeout")
// }, 0);
// console.log("After timeout")

// const name = document.querySelector("#name")
// const btn = document.querySelector(".btn")
// const list = document.querySelector(".list")
// btn.addEventListener('click',()=>{
//     const li= document.createElement('li')
//     const dlt = document.createElement('button')
//     dlt.innerText= "Delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     li.appendChild(dlt)
//     list.appendChild(li)
//     name.value=""
// }) 
//     function print(num){
//     setTimeout(() => {
//         console.log("Inside print")
//         num()
//     }, 2000);
// }

// function sample(){
//     console.log("Inside callback")
// }

// print(sample)

// console.log("Starting Homework")
// setTimeout(() => {
//     console.log("Finished Homework")
//     console.log("Hello World")

//     setTimeout(() => {
//        console.log("This is another timeout function inside first one") 
//        console.log("This is another timeout function ") 

//        setTimeout(() => {
//         console.log("This is function inside second function")
//         console.log("This is another function ")
//        }, 1500);
//     },2000 );
    
// }, 2500);

// const p=new Promise((res,rej)=>{
//     let done= true;
//     setTimeout(() => {
//         if(done){
//             res({name:"Anand",age:20})
//         }else{
//             rej("Word has not been completed")
//         }
//     }, 5000);
// })

// p.then((data)=>{
//     console.log(data.name)
// }).catcherror((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Finally block")
// })

function eatdinner(){
    const p = new Promise((res,rej)=>{
        let done = false;
        setTimeout(() => {
            if(done){
                console.log("Dinner completed")
                res("Dinner is done")
            }else{
                rej("Dinner is not done")
            }
        }, 2500);
    })
    return p
}


function gotoplayground(){
    const p = new Promise((res,rej)=>{
        let done = false;
        setTimeout(() => {
            if(done){
                console.log("Went to playground")
                res("Playground time")
            }else{
                rej("Not allowed to go")
            }
        }, 2600);
    })
    return p
}


dohomework().then((data)=>{
    console.log(data)
    return eatdinner
}).then((data)=>{
    console.log(data)
    return gotoplayground
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log()
})