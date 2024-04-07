var customerName = 'bob';
function upperCaseCustomerName(){
   if (customerName){
       customerName = customerName.toUpperCase();
   }
}
function setBestCustomer (){
   bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer){
   bestCustomer = newBestCustomer;
}
const leastFavoriteCustomer  = 'Simon';
function changeLeastFavoriteCustomer(){
   leastFavoriteCustomer = 'Bob';
}