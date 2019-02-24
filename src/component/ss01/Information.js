import React, { Component } from 'react';
import './Information.css';
import { connect } from 'react-redux';
// import { listPerson } from '../Redux/actions/inedx';

class Information extends Component {
    changeName = (event) => {
        if (event.key === "Enter") {
            this.props.changeName(event.target.value);
        }
    }
    render() {
        var data = this.props.listPerson;
        var all = data.map((data, index) => {
            return (
                <div className="person" key={index}>
                    <h1>{data.name}</h1>
                    <h2>Age: {data.age}</h2>
                    {/* <p>{this.props.children}</p>
                    <h2>{this.props.text}</h2> */}
                    <input onKeyPress={this.changeName} type="text" />
                </div>
            )
        });
        return (
            all
        )
    }
}

const getData = (state) => {
    return {
        listPerson: state.listPerson
    }
};
export default connect(getData, null)(Information);
