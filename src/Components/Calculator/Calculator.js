import React, { Component } from 'react';

export default class Calculator extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            onDisplay: '0',
            firstNum: '0',
            operator: '',
        }

        this.clickAC = this.clickAC.bind(this);
        this.numbers = this.numbers.bind(this);
        this.decimal = this.decimal.bind(this);
        this.operator = this.operator.bind(this);
        this.equals = this.equals.bind(this);

    }

    clickAC(e) {
        // console.log(e.target.textContent)
        this.setState({
            onDisplay: '0',
            firstNum: '0',
            operator: ''
        });
        // console.log(this.state.onDisplay);
    }

    // Number Keys
    numbers(e) {
        let key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent;
        
        if(action === 'number') {
            // console.log(keyContent)
            // console.log('before setState; ', this.state.onDisplay)
            if(this.state.onDisplay === '0') {
                this.setState({onDisplay: keyContent})
                // console.log('after setState: ', this.state.onDisplay)
                } else {
                    this.setState({onDisplay: this.state.onDisplay + keyContent});
                }
            }
    }

    // Decimal Key

    decimal(e) {
        let key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent;

        // this checks if the action is equal to decimal and only adds a decimal to the display if there is not one already found. This prevents more than one decimal point being added. 
        if(action === 'decimal' && !/\./g.test(this.state.onDisplay)) {
            this.setState({onDisplay: this.state.onDisplay + keyContent});
        }
    }

    // Operand Keys

    operator(e) {
        let key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent;
            
        if(action === 'operator') {
            this.setState({
                firstNum: this.state.onDisplay,
                onDisplay: '',
                operator: keyContent
            });
            // console.log('onDisplay: ', this.state.onDisplay);
            // console.log('Operator: ', this.state.operator);

        }
    }

    // Calculations
    equals(e) {
        if(this.state.operator === '+') {
            this.setState({
                onDisplay: +this.state.firstNum + +this.state.onDisplay,
                firstNum: '',
                operator: ''
            });
            // console.log('first; ', this.state.firstNum)
            // console.log('second; ', this.state.secondNum)
        }

        if(this.state.operator === '-') {
            this.setState({
                onDisplay: +this.state.firstNum - +this.state.onDisplay,
                firstNum: '',
                operator: ''
            });
        }

        if(this.state.operator === 'x') {
            this.setState({
                onDisplay: +this.state.firstNum * +this.state.onDisplay,
                firstNum: '',
                operator: ''
            }); 
        }

        if(this.state.operator === '÷') {
            this.setState({
                onDisplay: +this.state.firstNum / +this.state.onDisplay,
                firstNum: '',
                operator: ''
            });
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
                            <td className="data-one" id="plus-minus">+/-</td>
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