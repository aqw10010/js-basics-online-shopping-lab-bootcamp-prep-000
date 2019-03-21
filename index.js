var cart = [];
var i = 0

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var object = { itemName: itemName,itemPrice: Math.floor(100*(Math.random())),}
    cart.push(object)
    return `${itemName} has been added to your cart.`
   return cart
}

function viewCart() { 
 
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
if (cart.length === 1) { 
 return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
}

  if (cart.length === 2) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  
  if (cart.length === 3) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
  }
   for ( i = 0; i < cart.length; i++) ; {
   }
  }


function total() {
 var sum = 0
 
 for (i = 0; i < cart.length; i++) {
   cart[i]
   sum += cart[i].itemPrice
 }

  return sum 
 
}

function removeFromCart(itemName) {
  for ( let i = 0; i < cart.length; i++) {
  if (itemName === cart[i].itemName) {
   cart.splice(i, 1) 
  }
  }
  return cart

    
  if (itemName != cart.itemName) {
     cart.splice(i, 1) 
  }
    
  console.log('That item is not in your cart.')
  return cart
 }

function placeOrder(cardNumber) {
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (var i = cart.length; i>= 0; i--) {
      cart.pop();
    } 
    } else 
      console.log("Sorry, we don/'t have a credit card on file for you.")
return cart;
  }