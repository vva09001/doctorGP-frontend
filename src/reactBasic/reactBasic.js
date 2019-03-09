import React, { Component } from 'react';
import Information from '../component/ss01/Information';
import Lists from '../component/ss02/Lists';
import { connect } from 'react-redux';
import * as action from '../component/Redux/actions/inedx';

class ReactBasic extends Component {
 
  render() {
    var show_name = this.props.show;
    show_name = (show_name) ? 'Hide' : 'Show'
    return (
        <div className="App">
          {this.props.show === true ?
            <div>
              <Information>Reacjs props children</Information>
            </div>
            : null}
          <button onClick={()=>this.props.showPerson(this.props.show)}>  {show_name} </button>
          <div>
            <div className="table">
              Number:  {this.props.data}
            </div>
            <button onClick={() => this.props.clickHandler(1)}>Add number</button>
            <button onClick={() => this.props.clickHandler(-1)}>Remove number</button>
          </div>
          <Lists/>
        </div>
    );
  }
}
const getData = (state) => {
  return {
    data: state.addnumber,
    show : state.show
  }
} 
const add = (dispatch) => {
  return {
      clickHandler : (value) => {
          dispatch(action.Add(value))
      },
      showPerson : (value) => {
        dispatch(action.Show(value));
      }
  }
}


export default  connect(getData,add, null)(ReactBasic);