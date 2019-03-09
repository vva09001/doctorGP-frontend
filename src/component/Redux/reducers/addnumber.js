import * as typer from '../actions/types';

var initialSate = 0;

var Reducer = (state = initialSate, action) => {
    switch (action.type) {
        case typer.NUMBER:
            return state;
        case typer.ADD_NUMBER:
            if (state + action.value >= 0) {
              return  state = state + action.value;
            }
            else {
                return state = 0;
            }
           
        default:
            return state;
    }
}
export default Reducer;