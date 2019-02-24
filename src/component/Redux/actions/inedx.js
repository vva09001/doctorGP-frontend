import  * as typer from './types';
export const listPerson = () => {
    return {
        type : typer.LIST_PERSON,
        
    }
} 

export const listProducts = () => {
    return {
        type : typer.LIST_PRODUCTS
    }
}

export const Remove = (index) => {
    return {
        type: typer.REMOVE_PRODUCTS,
        index : index
    }
}
export const Number = () => {
    return {
        type : typer.NUMBER
    }
}
export const Add = (value) => {
    return {
        type : typer.ADD_NUMBER,
        value : value
    }
}
export const Show = (value) => {
    return {
        type : typer.SHOW,
        value : value
    }
}
