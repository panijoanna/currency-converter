{
    const welcome = () => {
        console.log("Hello, developers!");
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const pln = plnRate.value;
    
        const convert = pln * 4.71;
        currencyRate.value = convert.toFixed(2);
    };
    
    const plnRate = document.querySelector(".js-pln");
    const currencyRate = document.querySelector(".js-currency");
    const formElement = document.querySelector(".js-form");
    
    formElement.addEventListener("submit", onFormSubmit);
    welcome();
}