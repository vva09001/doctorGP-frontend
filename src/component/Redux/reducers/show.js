import * as typer from '../actions/types';

var initialSate = true;

var Reducer = (state = initialSate, action) => {
    switch (action.type) {
        case typer.SHOW:
            return !state;
    
        default:
            return state;
    }
}
export default Reducer;