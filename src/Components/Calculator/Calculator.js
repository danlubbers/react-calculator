import React, { Component } from 'react';

export default class Calculator extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            // This shows what we see on screen in the Display
            onDisplay: '0',
            // This sets the first number before hitting an operator
            firstNum: '0',
            // This sets the operator 
            operator: '',
        }

        // Binding commented out due to ES6 arrow functions
        // this.clickAC = this.clickAC.bind(this);
        // this.numbers = this.numbers.bind(this);
        // this.decimal = this.decimal.bind(this);
        // this.operator = this.operator.bind(this);
        // this.equals = this.equals.bind(this);

    }

    // Clear state
    // Also using ES6 arrow functions so we don't have to manually bind above
    clickAC = (e) => {
        // console.log(e.target.textContent)
        this.setState({
            onDisplay: '0',
            firstNum: '0',
            operator: ''
        });
        // console.log(this.state.onDisplay);
    }

    // Number Keys
    numbers = (e) => {
        let key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent;
        
        if(action === 'number') {
            // console.log(keyContent)
            // console.log('before setState; ', this.state.onDisplay)
            if(this.state.onDisplay === '0') {
                // If 0 is showing in the display, this will change state to the current keyContent that was clicked
                this.setState({onDisplay: keyContent})
                // console.log('after setState: ', this.state.onDisplay)
                } else {
                    // If 0 is not showing in the display, the keyContent will be appended to the number that is onDisplay
                    this.setState({onDisplay: this.state.onDisplay + keyContent});
                }
            }
    }

    // Decimal Key

    decimal = (e) => {
        let key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent;

        // this checks if the action is equal to decimal and only adds a decimal to the display if there is not one already found. This prevents more than one decimal point being added. 
        if(action === 'decimal' && !/\./g.test(this.state.onDisplay)) {
            this.setState({onDisplay: this.state.onDisplay + keyContent});
        }
    }

    // Operand Keys

    operator = (e) => {
        let key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent;
            
        if(action === 'operator') {
            this.setState({
                // Once an operator is clicked, it will set what is onDisplay to the firstNum variable in state.
                firstNum: this.state.onDisplay,
                // This clears the display between the first number and second number being chosen
                onDisplay: '',
                // This will set the operator variable to the correct operator based on which button was clicked.
                operator: keyContent
            });
            // console.log('onDisplay: ', this.state.onDisplay);
            // console.log('Operator: ', this.state.operator);

        }
    }

    // Calculations
    equals = (e) => {
        if(this.state.operator === '+') {
            let addition = +this.state.firstNum + +this.state.onDisplay;
            this.setState({
                onDisplay: addition,
                firstNum: '',
                operator: ''
            });
            // console.log('first; ', this.state.firstNum)
            // console.log('second; ', this.state.secondNum)
        }

        if(this.state.operator === '-') {
            let subtraction = +this.state.firstNum - +this.state.onDisplay;
            this.setState({
                onDisplay: subtraction,
                firstNum: '',
                operator: ''
            });
        }

        if(this.state.operator === 'x') {
            let multiplication = +this.state.firstNum * +this.state.onDisplay;
            this.setState({
                onDisplay: multiplication,
                firstNum: '',
                operator: ''
            }); 
        }

        if(this.state.operator === '÷') {
            let division = +this.state.firstNum / +this.state.onDisplay;
            this.setState({
                onDisplay: division,
                firstNum: '',
                operator: ''
            });
        }
    }

     // Extras 
     plusMinus = () => {
        // This tests to makes sure there won't be more than one - symbol on the display
        if(/\-/g.test(this.state.onDisplay)) {
            // Math.abs turns the negative integer back into a positive one
            this.setState({onDisplay: Math.abs(this.state.onDisplay)});
        } else {
            this.setState({onDisplay: '-' + this.state.onDisplay});
        }
    }

    render() {


        return (
            <div>
              <div>
                <h1>Calculator</h1>
              </div>
                <table>
                    <tbody className="output-container">
                        <tr className="row-one">
                            <td className="data-output">{this.state.onDisplay}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="row-two">
                            <td onClick={this.clickAC} className="data-one" data-action="clear" id="ac">AC</td>
                            <td onClick={this.plusMinus} className="data-one" id="plus-minus">+/-</td>
                            <td className="data-one" id="percent">%</td>
                            <td onClick={this.operator} className="data-one operator" data-action="operator" id="divide">÷</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="row-three">
                            <td onClick={this.numbers} className="data-two" data-action="number" id="seven">7</td>
                            <td onClick={this.numbers} className="data-two" data-action="number" id="eight">8</td>
                            <td onClick={this.numbers} className="data-two" data-action="number" id="nine">9</td>
                            <td onClick={this.operator} className="data-two operator" data-action="operator" id="multiply">x</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="row-four">
                            <td onClick={this.numbers} className="data-three" data-action="number" id="four">4</td>
                            <td onClick={this.numbers} className="data-three" data-action="number" id="five">5</td>
                            <td onClick={this.numbers} className="data-three" data-action="number" id="six">6</td>
                            <td onClick={this.operator} className="data-three operator" data-action="operator" id="minus">-</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="row-five">
                            <td onClick={this.numbers} className="data-four" data-action="number" id="one">1</td>
                            <td onClick={this.numbers} className="data-four" data-action="number" id="two">2</td>
                            <td onClick={this.numbers} className="data-four" data-action="number" id="three">3</td>
                            <td onClick={this.operator} className="data-four operator" data-action="operator" id="plus">+</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="row-six">
                            <td onClick={this.numbers} className="data-five" data-action="number" id="zero">0</td>
                            <td onClick={this.decimal} className="data-five" data-action="decimal" id="decimal">.</td>
                            <td onClick={this.equals} className="data-five" data-action="equals" id="equals">=</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}