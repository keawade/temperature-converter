/** Handles conversions between temperature units */
class TemperatureConverter {
  /** Converts celsius to fahrenheit */
  public static toFahrenheit(celsius: number): number {
    return celsius * (9 / 5) + 32;
  }

  /** Converts fahrenheit to celsius */
  public static toCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * (5 / 9);
  }
}

let tempToday: number;
let tempInCelsius: number;
let message: string;

tempToday = 82;
tempInCelsius = Math.round(TemperatureConverter.toCelsius(tempToday));
message = `Today's temperature is ${tempToday} °F, which is ${tempInCelsius} °C.`;

console.log(message);
