const billingToggle = document.querySelector("#billing-toggle");

const annualPrices = document.querySelectorAll(".annual-price");
const monthlyPrices = document.querySelectorAll(".monthly-price");


billingToggle.addEventListener("change", () => {
    if(billingToggle.checked){
        annualPrices.forEach((price) => {
            price.style.display = "none";
        });

        monthlyPrices.forEach((price) => {
            price.style.display = "block";
        });
    } else {
        annualPrices.forEach((price) => {
            price.style.display = "block";
        });

        monthlyPrices.forEach((price) => {
            price.style.display = "none";
        });
    }
})