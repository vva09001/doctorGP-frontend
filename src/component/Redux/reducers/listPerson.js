import * as typer from '../actions/types';

var initialSate = [
    {name: "Admin", age: 20 },
    { name: "ReactJS", age: 5 }
];

var Reducer = (state = initialSate, action) => {
    switch (action.type) {
        case typer.LIST_PERSON:
            return state
        default: return state;
    }
}

export default Reducer;