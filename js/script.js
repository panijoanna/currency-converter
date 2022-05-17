let plnRate = document.querySelector(".js-pln");
let currencyRate = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let pln = plnRate.value;

    let convert = pln * 4.71;
    currencyRate.value = convert.toFixed(2);
});