import React, { Component } from 'react';
import Information from '../component/ss01/Information';
import Lists from '../component/ss02/Lists';
import Modal from '../component/UI/modal/modal';

class ReactBasic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preson: [
                { name: "Admin", age: 20 },
                { name: "ReactJS", age: 5 }
            ],
            number: 0,
            text: 'Enter inpput set value',
            show: true,
            showModal: false,
            textModal: 'Show modal',
            _name: 'hide',
            products: [
                { name: 'iphone x', storage: '32GB', price: '15.000.000 VND' },
                { name: 'SamSung Galaxy Note 9', storage: '64GB', price: '20.000.000 VND' },
                { name: 'Google pixel 3', storage: '128GB', price: '25.000.000 VND' },
            ]
        }
    }
    clickHandler(value) {
        this.setState({
            number: (this.state.number + value >= 0) ? this.state.number + value : this.state.number
        });
    }
    onChangeName = (value) => {
        this.setState({
            text: value,
        })
    }
    showPerson = () => {
        this.setState({
            show: !this.state.show,
            _name: (this.state.show) ? 'show' : 'hide'
        })
    }
    del = (index) => {
        let arr = this.state.products;
        arr.splice(index, 1);
        this.setState({
            products: arr
        })
    }
    showModal = () => {
        this.setState({
            showModal: !this.state.showModal,
            textModal: (this.state.showModal) ? 'Show modal' : 'Close modal'
        })
    }
    render() {
        // console.log(this.state._name);
        // var nameBtn = this.state.show ? 'hide' : 'show'
        return (
            <div className="App">
                {this.state.show === true ?
                    <div>
                        <Information name="Vũ Việt Anh" age="22" text={this.state.text} changeName={this.onChangeName} />
                        <Information name="Vũ Hải Đăng" age="10" text={this.state.text} changeName={this.onChangeName} />
                        <Information name={this.state.preson[0].name} age={this.state.preson[0].age} text={this.state.text} changeName={this.onChangeName} />
                        <Information name={this.state.preson[1].name} age={this.state.preson[1].age} text={this.state.text} changeName={this.onChangeName}>Reacjs props children</Information>
                    </div>
                    : null}
                <button onClick={this.showPerson}>  {this.state._name} </button>
                <div>
                    <div className="table">
                        Number:  {this.state.number}
                    </div>
                    <button onClick={() => this.clickHandler(1)}>Add number</button>
                    <button onClick={() => this.clickHandler(-1)}>Remove number</button>
                </div>
                <Modal showModal={this.state.showModal} modalCLose={this.showModal} show={this.showModal}></Modal>
                <button onClick={this.showModal}>{this.state.textModal}</button>
                <Lists list={this.state.products} delete={this.del} />
            </div>
        );
    }
}

export default ReactBasic;