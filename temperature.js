/** Handles conversions between temperature units */
var TemperatureConverter = (function () {
    function TemperatureConverter() {
    }
    /** Converts celsius to fahrenheit */
    TemperatureConverter.toFahrenheit = function (celsius) {
        return celsius * (9 / 5) + 32;
    };
    /** Converts fahrenheit to celsius */
    TemperatureConverter.toCelsius = function (fahrenheit) {
        return (fahrenheit - 32) * (5 / 9);
    };
    return TemperatureConverter;
}());
var tempToday;
var tempInCelsius;
var message;
tempToday = 82;
tempInCelsius = Math.round(TemperatureConverter.toCelsius(tempToday));
message = "Today's temperature is " + tempToday + " \u00B0F, which is " + tempInCelsius + " \u00B0C.";
console.log(message);
