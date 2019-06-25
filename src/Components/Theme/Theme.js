import React, { Component } from 'react';

export default class Theme extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=38a652477100830ccd41e808f3a27c05')
            .then(res => res.json())
            .then(data => this.setState({ data }));
        }
        
        render() {
            // let weather = this.state.data.map(e => e);
            console.log(this.state.data)
            return (
                <div>
                <h1>Theme</h1>
                {/* {this.state.data} */}
            </div>
        )
    }
}