let api =
  "https://v6.exchangerate-api.com/v6/b1b26d6de4e0d035d4adea6b/latest/USD";
const fromDropDown = document.getElementById("from");
const toDropDown = document.getElementById("to");
let result = document.getElementById("bit");
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});
fromDropDown.value = "USD";
toDropDown.value = "INR";

let ConvertCurrency = () => {
  let value = document.getElementById("gold").value;
//   console.log(value);
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;

  if (value.length != 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        let fromexchange = data.conversion_rates[fromCurrency];
        let toexchange = data.conversion_rates[toCurrency];
        const conversionAmount = (value/fromexchange)*toexchange
        result.innerHTML=`${value} ${fromCurrency}= ${conversionAmount.toFixed(2)} ${toCurrency} `
        console.log(conversionAmount);
      });
  } else {
    alert("Please enter a valid amount!");
  }
};

document.querySelector("#convert").addEventListener("click", ConvertCurrency);
