import {combineReducers} from 'redux';
import listPerson from './listPerson';
import listProducts from './listProduct';
import addnumber from './addnumber';
import show from './show';
const Reducer = combineReducers({
    listPerson : listPerson,
    listProducts : listProducts,
    addnumber : addnumber,
    show : show    
});

export default Reducer;