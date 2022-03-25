function convertCurrency() {

    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let result;

// console.log(fromCurrency);
// console.log(toCurrency);


    if (fromCurrency == "vnd" && toCurrency == "usd") {
        result = amount / 24000;
    } else if (fromCurrency == "usd" && toCurrency == "vnd") {
        result = amount * 24000;
    } else {
        result = amount;
    }
    // console.log(result);
    document.getElementById("result").innerHTML = "Result: " + result;
}