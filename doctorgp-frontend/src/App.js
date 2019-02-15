import React, { Component } from 'react';
import Information from '../src/component/ss01/Information';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preson: [
        { name: "Admin", age: 20 },
        { name: "ReactJS", age: 5 }
      ],
      number: 0,
      text: '',
    }
  }
  clickHandler(value) {
    this.setState({
      number: (this.state.number + value >= 0) ? this.state.number + value : this.state.number
    });
  }
  onChangeName = (value) => {
    this.setState({
      text : value,
    })
  }
  render() {
    return (
      <div className="App">
        <Information name="Vũ Việt Anh" age="22" text={this.state.text} changeName={this.onChangeName} />
        <Information name="Vũ Hải Đăng" age="10" text={this.state.text} changeName={this.onChangeName} />
        <Information name={this.state.preson[0].name} age={this.state.preson[0].age} text={this.state.text} changeName={this.onChangeName} />
        <Information name={this.state.preson[1].name} age={this.state.preson[1].age} text={this.state.text} changeName={this.onChangeName}>Reacjs props children</Information>
        <div>
          <div className="table">
            Number:  {this.state.number}
          </div>
          <button onClick={() => this.clickHandler(1)}>Add number</button>
          <button onClick={() => this.clickHandler(-1)}>Remove number</button>
        </div>
      </div>
    );
  }
}

export default App;
