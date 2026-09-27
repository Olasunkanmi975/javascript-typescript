const EXCHANGE_RATE = 1500;

// Convert Naira to USD
function nairaToUsd(amount) {
  return amount / EXCHANGE_RATE;
}

// Convert USD to Naira
function usdToNaira(amount) {
  return amount * EXCHANGE_RATE;
}

// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Convert kilograms to pounds
function kgToPounds(kg) {
  return kg * 2.20462;
}

// Calls and output
console.log(`₦5000 to USD: $${nairaToUsd(5000).toFixed(2)}`);
console.log(`$10 to Naira: ₦${usdToNaira(10).toFixed(2)}`);
console.log(`0°C to Fahrenheit: ${celsiusToFahrenheit(0)}`);
console.log(`100°C to Fahrenheit: ${celsiusToFahrenheit(100)}`);
console.log(`10kg to pounds: ${kgToPounds(10).toFixed(2)}`);

// Sanity check
const converted = usdToNaira(nairaToUsd(5000));
console.log(`Back to Naira: ₦${converted}`);
console.log(`Exactly 5000? ${converted === 5000}`);