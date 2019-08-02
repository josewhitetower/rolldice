import React, { Component } from 'react'
import Die from './Die'

export default class RollDice extends Component {

    static defaultProps = {
        numbers : ['one', 'two', 'three', 'four', 'five', 'six']
    }

    state = {
        die_one : 'one',
        die_two : 'one',
        isRolling: false,
    }

    roll = () => {
        this.setState({isRolling: true});
        const die_one = this.props.numbers[Math.floor(Math.random() * this.props.numbers.length)];
        const die_two = this.props.numbers[Math.floor(Math.random() * this.props.numbers.length)];

        setTimeout(() => {
            this.setState({die_one, die_two, isRolling: false});
        }, 1000);


    }

    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-dice'>
                    <Die number={this.state.die_one} isRolling={this.state.isRolling}/>
                    <Die number={this.state.die_two} isRolling={this.state.isRolling}/>
                </div>
                <button
                    disabled={this.state.isRolling}
                    className={`RollDice-button ${this.state.isRolling ? 'black' : ''}`}
                    onClick={this.roll}>
                        {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}
