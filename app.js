
// TEXT MODE CHANGE START
let bnt1 =document.querySelector('.btn1')
let info =document.querySelector('.info')

bnt1.addEventListener('click',function(){
    info.classList.toggle('active')
})
// TEXT MODE CHANGE END


// COUNTER START
let dec =document.querySelector('.dec')
let inc =document.querySelector('.inc')
let result= document.querySelector('.result')

inc. addEventListener('click', function(){
    result.value = Number(result.value) + 1;
    // if(result.value > 3){
    //      result .value = Number(result .value) + 1;
    //       inc.style.cursor='not-allowed';
    // }

})
dec. addEventListener('click', function(){
    if( result .value > 1 ) {
        result .value = Number(result .value) - 1;
        dec.style.cursor='not-allowed';
    }
})
// COUNTER END



// DROP-DOWN MENU START
let btn =document.querySelector('.btn')
let bar =document.querySelector('.bar')
btn.addEventListener ('click', function(){
   bar.classList.toggle('active');
})
// DROP-DOWN MENU END


// RANGE START
let range =document.querySelector('.range');
let output =document.querySelector('.output');
// emon
range.addEventListener('input', function(){
//    console.log(range.value);
   output.innerHTML = "$"+ range.value ;
})
// RANGE END(emon)



// MODE CHANGE START
let btn2 = document.querySelector('.btn2');
let textInfo = document.querySelector('.textInfo');

btn2.addEventListener('click',function(){
    textInfo.classList.toggle('active');
})
// MODE CHANGE END


