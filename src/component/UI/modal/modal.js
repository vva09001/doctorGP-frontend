import React, { Component } from 'react';
import './modal.css';
class Modal extends Component {
    render() {
        return (
            <div className="Modal"
                style={{
                    display: this.props.showModal ? 'block' : 'none',
                }}>
                <h1>Modal</h1>
                {this.props.children}
                <button className="Danger" onClick={this.props.show}>CANCEL</button>
                <button className="Success"  onClick={this.props.show}>CONTINUE</button>
            </div>
        )
    }
}
export default Modal;