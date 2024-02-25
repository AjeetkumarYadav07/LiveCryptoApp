document.getElementById("currency").addEventListener("change", function() {
  var selectedCurrency = this.value;

  var coin = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=" + selectedCurrency,
    "method": "GET",
    "headers": {}
  };
  
  $.ajax(coin).done(function(response) {
    // Update the currency symbol based on the selected option
    var currencySymbol = selectedCurrency.toUpperCase();

    // Update the HTML elements with the fetched cryptocurrency prices
    document.getElementById("bitcoin").innerHTML = response.bitcoin[selectedCurrency];
    document.getElementById("dogecoin").innerHTML = response.dogecoin[selectedCurrency];
    document.getElementById("ethereum").innerHTML = response.ethereum[selectedCurrency];

    // Update the currency symbols in the HTML
    document.getElementById("bitcoin").innerHTML += " " + currencySymbol;
    document.getElementById("dogecoin").innerHTML += " " + currencySymbol;
    document.getElementById("ethereum").innerHTML += " " + currencySymbol;
  });
});


