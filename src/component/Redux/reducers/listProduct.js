import * as typer from '../actions/types';

var initialSate = [
    { name: 'iphone x', storage: '32GB', price: '15.000.000 VND' },
    { name: 'SamSung Galaxy Note 9', storage: '64GB', price: '20.000.000 VND' },
    { name: 'Google pixel 3', storage: '128GB', price: '25.000.000 VND' },
    { name: 'SamSung Galaxy S10', storage: '128GB', price: '25.000.000 VND'}
];

var Reducer = (state = initialSate, action) => {
    switch (action.type) {
        case typer.LIST_PRODUCTS:
            return state;
        case typer.REMOVE_PRODUCTS:
            var arr = state.splice(1,action.index);
            state = arr
            return state;
        default: return state;
    }
}

export default Reducer;