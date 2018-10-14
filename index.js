var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {

  var itemName = name;
  var price = Math.floor(Math.random()*100);
  var items = {itemName: name, itemPrice: price};
  getCart().push(items);
  return `${itemName} has been added to your cart.`;
}


function viewCart() {

  if (getCart().length === 0){
    return `Your shopping cart is empty.`;
  }

  else if (getCart().length === 1){
    //var itemName = getCart()[0].itemName;
    //var itemPrice = getCart()[0].itemPrice;
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  }


  else if (getCart().length === 2){
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
    }

  else if (getCart().length > 1){
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`;
  }
}

function total() {
  var totalCost = 0;
  for (let i = 0; i < getCart().length; i++){
    totalCost = totalCost + getCart()[i].itemPrice;
  }
  return totalCost;
}


function removeFromCart(item) {

  const firstItemName = getCart()[0].itemName;
  const secondItemName = getCart()[1].itemName;

  //if(getCart().length > 0){
    if (firstItemName === item){
        getCart().splice(0, 1);
      }

    else if (secondItemName === item){
        getCart().splice(1, 1);
      }
      
      let i = getCart().length;
      while(getCart().length>0){
        if(getCart()[i].itemName===item){
          return 'That item is not in your cart.';
        }
        i--;
      }
      }
  //  else if(firstItemName!=item || secondItemName!=item){
    //    return `That item is not in your cart.`;
    //}
  //}


function placeOrder(cardNumber) {

  const cartTotal = total();
  //const cardNumber = Math.floor(Math.random() * 100000000);
  //var cardsOnFile = [cardNumber];
  if(cardNumber > 0){
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
  else{
      return `Sorry, we don't have a credit card on file for you.`;
  }
}
