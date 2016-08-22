import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      givenTemp: 82,
      converted: Math.round(this.toCelsius(82)),
      convertToCelsius: true
    }

    this.toggleConversion = this.toggleConversion.bind(this)
    this.updateGivenTemp = this.updateGivenTemp.bind(this)
    this.convert = this.convert.bind(this)
    // this.toFahrenheit = this.toFahrenheit.bind(this)
    // this.toCelsius = this.toCelsius.bind(this)
  }

  toggleConversion() {
    this.setState({
      convertToCelsius: !this.state.convertToCelsius
    })
  }

  updateGivenTemp(event) {
    this.setState({
      givenTemp: event.target.value,
      converted: this.convert(event.target.value)
    })
  }

  convert(value) {
    let output;
    if(this.state.convertToCelsius) {
      output = this.toCelsius(value)
    } else {
      output = this.toFahrenheit(value)
    }
    return Math.round(output)
  }

  toFahrenheit(celsius) {
    return celsius * (9 / 5) + 32
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9)
  }

  render() {
    return (
      <div>
        <input value={this.state.givenTemp} onChange={this.updateGivenTemp} />
        <button onClick={this.toggleConversion}>{this.state.toCelsius ? 'To °C' : 'To °F'}</button>
        <p>The given temperature is {this.state.givenTemp} {this.state.toCelsius ? '°F' : '°C'}, which is {this.state.converted} {this.state.toCelsius ? '°C' : '°F'}.</p>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
