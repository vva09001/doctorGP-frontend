import React, { Component } from 'react';
import './Lists.css';
import LogoDelete from '../../img/delete.png';
import { connect } from 'react-redux';
import * as action from '../Redux/actions/inedx'

class Col extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.storage}</td>
                <td>{this.props.amount}</td>
                <td><img src={LogoDelete} alt='logo' onClick={this.props.delete} /></td>
            </tr>
        )
    }
}
class Lists extends Component {
    render() {
        var allProducts = this.props.listProduct.map((data, index) => {
            return (
                <Col key={index} name={data.name} storage={data.storage} amount={data.price} delete={() => this.props.onRemove(index)} />
            )
        })
        return (
            <div >
                <h1>List ReactJS</h1>
                <table className="products">
                    <tbody>
                        <tr>
                            <th>Tên sản phẩm</th>
                            <th>Dung lượng</th>
                            <th>Giá</th>
                            <th>Xóa</th>
                        </tr>
                        {allProducts}
                    </tbody>
                </table>
            </div>
        )
    }
}
const getData = (state) => {
    return {
        listProduct: state.listProducts
    }
} 
const remove = (dispatch) => {
    return {
        onRemove : (index) => {
            dispatch(action.Remove(index))
        }
    }
}
export default connect(getData,remove, null)(Lists);