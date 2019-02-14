import React, { Component } from 'react';
import Information from '../src/component/ss01/Information';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Information
            name = "Vũ Việt Anh"
            age = "22"
          
          />
           <Information
            name = "Vũ Hải Đăng"
            age = "10"
          />
          
      </div>
    );
  }
}

export default App;
