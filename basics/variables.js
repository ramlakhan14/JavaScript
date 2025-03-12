const accoundId=121;
let accountEmail="ramlakhan149511@gmail.com";
var accountPassword="1234";
accountCity="Jaipur";
//accountId =2 -> not allowed

accountEmail="ramlakhan9511@gmail.com";
accountPassword="12";
accountCity="Bangaluru";
/*
prefer not to use var because of issue in block scope and functional scope
*/
console.log(accoundId);
console.table([accoundId, accountEmail, accountPassword,accountCity]);