let Temperature = {
  toFahrenheit (celsius) {
    return celsius * (9/5) + 32
  },
  toCelsius (fahrenheit) {
    return (fahrenheit - 32) * (5/9)
  }
}

let tempToday = 82 // In Fahrenheit

let tempInCelsius = Math.round(Temperature.toCelsius(tempToday))

let message = `Today's temperature is ${tempToday} °F, which is ${tempInCelsius} °C.`

console.log(message)
