{
    const welcome = () => {
        console.log("Hello, developers!");
    };

    const calculateResult = (currency, amount) => {
        const rateEUR = 4.61;
        const rateGBP = 5.45;
        const rateUSD = 4.33;

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
    };

    const insertResult = () => {
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const currency = currencyElement.value;
        const amount = amountElement.value;

        const resultElement = document.querySelector(".js-result");
        let result = calculateResult(currency, amount);
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