// Submit button redirecting to the main page 

document.getElementById('submit-btn').addEventListener('click',function(){
    // get the username 
    const nameField = document.getElementById('user-email')
    const userName = nameField.value
    
    // get the password
    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value
    
    // checking login information

    if (userName == 'sakib@gmail.com' && userPassword == 'sakib'){
        // window.location.href = "main.html"
        console.log(userName,userPassword)
        
    }
    else{
        alert("error")
    }
})