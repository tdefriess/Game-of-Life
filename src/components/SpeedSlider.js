import React, { Component } from 'react'
import Slider from '@appigram/react-rangeslider'

export default class SpeedSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delay: props.delay
        }
    }

    handleChange = (event) => {
        if (!this.props.isRunning) {
            this.props.setDelay(event.target.value)
        }
    }

    render() {
        let { delay } = this.state
        return (
            <input
                id='delay'
                name='delay'
                type='range'
                // defaultValue={delay}
                value={this.props.delay}
                min={50}
                max={2000}
                step={50}
                onChange={this.handleChange}

            />
        )
    }
}