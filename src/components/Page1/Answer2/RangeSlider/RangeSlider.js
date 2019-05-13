import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import styles from './RangeSlider.module.css'

class RangeSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 100
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  }

  render () {
    const { answer1, answer2} = this.props
    const { value } = this.state
    
    return (
      <div className='slider'>
        <Slider
          min={100}
          max={3000}
          step={100}
          value={value}
          onChange={this.handleChange}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}

export default RangeSlider