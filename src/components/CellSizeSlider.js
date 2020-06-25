import React, { Component } from 'react'

export default class CellSizeSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cellSize: props.cellSize
        }
    }

    handleChange = (event) => {
        if (!this.props.isRunning) {
            this.props.setCellSize(event.target.value)
        }
    }

    render() {
        // let { cellSize } = this.state
        return (
            <label style={{flexBasis: "20%", opacity: this.props.isRunning ? '0.6' : ''}}>Cell Size:
                <input
                    className='range'
                    id='delay'
                    name='delay'
                    type='range'
                    // defaultValue={delay}
                    value={this.props.cellSize}
                    min={5}
                    max={25}
                    step={1}
                    onChange={this.handleChange}

                />
            </label>
        )
    }
}