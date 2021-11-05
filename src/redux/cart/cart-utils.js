export const addCartItems = (existingCartItems = [], newCartItem) => {
  console.log("test",existingCartItems, newCartItem);
  const itemExisted = existingCartItems.find(
    (item) => item._id === newCartItem._id
  );
  if (itemExisted) {
    return existingCartItems.map((item) => {
      if (item._id === newCartItem._id) {
        let updatedItem = { ...item, quantity: item.quantity + 1 };
        updatedItem.totalPrice = updatedItem.quantity * updatedItem.price;
        return updatedItem;
      } else {
        return item;
      }
    });
  } else
    return [
      ...existingCartItems,
      { ...newCartItem, quantity: 1, totalPrice: newCartItem.price },
    ];
};

export const removeReduceQuantity = (existingCartItems, itemIdToRemove) => {
  
  return existingCartItems.map(item => {
    if(item._id === itemIdToRemove){
      let updatedQuantity = Number(item.quantity) - 1;
      
      return{
        ...item,
        quantity:updatedQuantity,
        totalPrice:updatedQuantity*item.price
      }
    }else return item;
  }).filter(item => item.quantity !== 0);

}