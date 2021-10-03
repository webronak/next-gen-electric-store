const CartAddItemAction = (item) => {
    return {
        type:'ADD_ITEM',
        payload:item
    }
}

export const CartRemoveReduceQuantity = (item_id) => {
    
    return{
        type:"REDUCE_REMOVE",
        payload:item_id
    }
}

export default CartAddItemAction;