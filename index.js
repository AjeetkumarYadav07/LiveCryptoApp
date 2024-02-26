// document.getElementById("currency").addEventListener("change", function() {
//   var selectedCurrency = this.value;

//   var coin = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=" + selectedCurrency,
//     "method": "GET",
//     "headers": {}
//   };
  
//   $.ajax(coin).done(function(response) {
//     // Update the currency symbol based on the selected option
//     var currencySymbol = selectedCurrency.toUpperCase();

//     // Update the HTML elements with the fetched cryptocurrency prices
//     document.getElementById("bitcoin").innerHTML = response.bitcoin[selectedCurrency];
//     document.getElementById("dogecoin").innerHTML = response.dogecoin[selectedCurrency];
//     document.getElementById("ethereum").innerHTML = response.ethereum[selectedCurrency];

//     // Update the currency symbols in the HTML
//     document.getElementById("bitcoin").innerHTML += " " + currencySymbol;
//     document.getElementById("dogecoin").innerHTML += " " + currencySymbol;
//     document.getElementById("ethereum").innerHTML += " " + currencySymbol;
//   });
//

document.getElementById("currency").addEventListener("change", function() {
  var selectedCurrency = this.value;

  if (selectedCurrency === "usd") {
    var coin = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=usd",
      "method": "GET",
      "headers": {}
    };
    
    $.ajax(coin).done(function(response) {
      document.getElementById("bitcoin").innerHTML = response.bitcoin.usd;
      document.getElementById("dogecoin").innerHTML = response.dogecoin.usd;
      document.getElementById("ethereum").innerHTML = response.ethereum.usd;
    });
  } else if (selectedCurrency === "inr") {
    let coin = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=inr",
      "method": "GET",
      "headers": {}
    };

    $.ajax(coin).done(function(response) {
      document.getElementById("bitcoin").innerHTML = response.bitcoin.inr;
      document.getElementById("dogecoin").innerHTML = response.dogecoin.inr;
      document.getElementById("ethereum").innerHTML = response.ethereum.inr;
    });
  }
});


  //  ==== Dark mode ===== 

  let modebtn = document.getElementById('#toggle')
   let currntmod = "dark";
   let body = document.querySelectorAll("body");
   modebtn.addEventListener("click" , ( )=>{
    if (currntmod === "dark"){
        currntmod = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    else {
      currntmod = "dark";
      body.classList.remove("light"); // Remove "dark" class
      body.classList.add("dark");
  }
   })

