const CartAddItemAction = (item) => {
    return {
        type:'ADD_ITEM',
        payload:item
    }
}

export default CartAddItemAction;