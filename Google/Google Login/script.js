let previousbody = document.querySelector('.sideone');
let nextbody = document.querySelector('.sidetwo');
let emailaddress = document.querySelector('.emailaddress');
let nextbutton = document.querySelector('.nextbutton button');
let emailreplace = document.querySelector('#emailreplace #replacewith');
let hiddenpassword = document.querySelector('.passwordhide');
let showpassword = document.querySelector('.passwordshow');
let checkbox = document.querySelector('#check');
let continuebutton = document.querySelector('.continuebutton button');
emailaddress.addEventListener('keypress',()=>{
    nextbutton.style.display = 'none'
    if ( emailaddress.value != '' ){
        nextbutton.style.display = 'block'
    }
    else if ( emailaddress.value == '' ){
        nextbutton.style.display = 'none'
    }
    else{
        nextbutton.style.display = 'none'
    }
})
emailaddress.addEventListener('blur',()=>{
    if ( emailaddress.value != '' ){
        nextbutton.style.display = 'block'
    }
    else{
        nextbutton.style.display = 'none'
    }
})
nextbutton.addEventListener('click',()=>{
    previousbody.style.display = 'none'
    nextbody.style.display = 'flex'
    emailreplace.innerHTML = emailaddress.value
})
hiddenpassword.addEventListener('keypress',()=>{
    if ( hiddenpassword.value != '' ){
        continuebutton.style.display = 'block'
    }
    else if ( hiddenpassword.length <= '5' ){
        continuebutton.style.display = 'none'
    }
    else{
        continuebutton.style.display = 'none'
    }
})

var form = document.getElementById("my-form");
