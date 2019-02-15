import React, { Component } from 'react';
import './Information.css';

class Information extends Component {
    changeName = (event) => {
        if (event.key === "Enter") {
            this.props.changeName(event.target.value);
        }
    }
    render() {
        const style = {
            height : '10px',
            color : 'red'
        }
        return (
            <div className="person">
                <h1>{this.props.name}</h1>
                <h2>Age: {this.props.age}</h2>
                <p>{this.props.children}</p>
                <h2>{this.props.text}</h2>
                <input style={style} onKeyPress={this.changeName} type="text"  />
            </div>
        )
    }
}

export default Information;
