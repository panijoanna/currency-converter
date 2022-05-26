{
    const welcome = () => {
        console.log("Hello, developers!");
    };

    const calculateResult = () => {
        const amountElement = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");
        const currencyElement = document.querySelector(".js-currency");

        const rateEUR = 4.61;
        const rateGBP = 5.45;
        const rateUSD = 4.33;

        const currency = currencyElement.value;
        const amount = amountElement.value;

        switch (currency) {
            case "EUR":
                result = amount / rateEUR;
                break;
            case "GBP":
                result = amount / rateGBP;
                break;
            case "USD":
                result = amount / rateUSD;
                break;
        }

        resultElement.value = result.toFixed(2);

    };

    const init = () => {
        welcome();
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            calculateResult();
        });
    }
    
    init();
}