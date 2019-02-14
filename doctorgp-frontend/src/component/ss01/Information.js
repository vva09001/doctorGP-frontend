import React, { Component } from 'react';
import './Information.css';

class Information extends Component {

    render() {
        return(
            <div className="person">
                <h1>{this.props.name}</h1>
                <h2>Age: {this.props.age}</h2>
            </div>
        )
    }
}

export default Information;
