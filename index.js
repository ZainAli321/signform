/* Linked with onclick - Sign Up button*/
var myAccount = [];

function rememberAccount() {
    myAccount[0] = document.getElementById("email").value;
    myAccount[1] = document.getElementById("password").value;
    console.log(myAccount);
    storeAccount();
    
};

/* Storing Accounts */
function storeAccount(){
    localStorage.setItem("key" , JSON.stringify(myAccount));

}



/* Checking Account by Retrieving Data*/
var accountCheck = [];


function checkAccount(account) {
    var retrievedData = localStorage.getItem("key");
    var myAccount2 = JSON.parse(retrievedData);

    accountCheck[0] = document.getElementById("email-signin").value;
    accountCheck[1] = document.getElementById("password-signin").value;
    
    if (myAccount2[0] == accountCheck[0] & myAccount2[1] == accountCheck[1]){
        alert("You have signed up correctly");
    }
    else {
       document.getElementById("show-incorrect").innerHTML = "Your Email or Password is incorrect, please try again."
    }
    
};



