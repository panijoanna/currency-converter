{
    const welcome = () => {
        console.log("Hello, developers!");
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const eurRate = document.querySelector(".js-eur");
        const currencyRate = document.querySelector(".js-currency");
        const eur = eurRate.value;

        const convert = eur * 4.71;
        currencyRate.value = convert.toFixed(2);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        
        welcome();
    };

    init();
}