import React, { Component } from 'react';

class Click extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Submitbtn :""
        }
    }
    Submitbtn = () => {
        return (
            this.setState({ count: this.state.count + 2 })
        )
    }
    render() {
        const { Submitbtn } = this.state;
        return (
            <div>
                <button onClick={this.Submitbtn}>Submit</button>
            </div>
        );
    }
}

export default Click;