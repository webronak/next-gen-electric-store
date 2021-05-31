export const addCartItems = (existingCartItems, newCartItem) => {
  const itemExisted = existingCartItems.find(
    (item) => item._id === newCartItem._id
  );
  console.log(itemExisted);
  if (itemExisted) {
    return existingCartItems.map((item) => {
      if (item._id === newCartItem._id) {
        let updatedItem = { ...item, quantity: item.quantity + 1};
        updatedItem.totalPrice = updatedItem.quantity * updatedItem.price; 
        return updatedItem;
      } else {
        return item;
      }
    });
  }

  return [...existingCartItems, { ...newCartItem, quantity: 1, totalPrice:newCartItem.price}];   
};
