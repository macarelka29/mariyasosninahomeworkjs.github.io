//первое задание
var F ; 
var C ;
C = 12 ;
F = C * 1.8 + 32 ;
console.log(F);

//второе задание а
var signedIn; 
console.log(signedIn);
//выводит в консоль signedIn
//второе задание в
console.log("Hello" % 10); 
//выдает в консоле NaN т.к. не может делить по остатку от  стринговой строки

//третье задание
var number = 10; 
if (number % 2 == 0){
console.log("number even");
}else{
    console.log("number odd");
}
//четвертое задание
var balance = 1; //задаем переменные, балансу значение больше 0, т.е. 1
var isActive;
var checkBalance;
var isBalance;
var notActive;
checkBalance = confirm ("Check your balance"); 
if (checkBalance == true){
    isActive = confirm ("Is account active and balance > 0 ?")
    if (isActive == true && balance > 0 ){
        alert('Your balance is '+ balance + '$');
    }if (isActive == false){
        notActive = confirm ("Is account not active?");
    }
    if (notActive == true){
        alert('Your account is no longer active.');
    }if (notActive == false){
        isBalance = confirm ("Is balance = 0?");
    }
    if (isBalance == true){
        alert('Your account is empty');
        
    }if (isBalance == false){
        alert('Your balance is negative. Please contact bank');
    };
}else {
alert("Thank you. Have a nice day!");
}
