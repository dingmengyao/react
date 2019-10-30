import actionType from './actionType'

const increment = (id)=> {
    return {
        type: actionType.CART_AMOUNT_INCREMENT,
        payload:{
            id
        }
    }
}
const decrement = (id)=>{
    return {
        type: actionType.CART_AMOUNT_DECREMENT,
        payload:{
            id
        }
    }
}
