if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');

for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', removeCartItem);
}
var quantityInputs = document.getElementsByClassName('cart-quantity-input');
for (var i = 0; i < quantityInputs.length; i++) {
var input = quantityInputs[i];
input.addEventListener('change', quantityChanged);
}
var addToCartButtons = document.getElementsByClassName('product-item-button');
for (var i = 0; i < addToCartButtons.length; i++) {
var button = addToCartButtons[i];
button.addEventListener('click', addToCartClicked);
}
document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

function removeCartItem(e){
var buttonClicked = e.target;
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
}

function quantityChanged(e) {
    var input = e.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    } 
    updateCartTotal();
}

function addToCartClicked(e) {
    var button = e.target;
    var shopItem = button.parentElement.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('product-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('product-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('product-item-image')[0].src;
    console.log(title , price, imageSrc);
    addItemToCart(title , price, imageSrc);
    updateCartTotal();
    
}

function addItemToCart(title , price, imageSrc) {
   var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
   var cartItems = document.getElementsByClassName('cart-items')[0]; 
   var cartItemNames = document.getElementsByClassName('cart-item-title');
   for (var i = 0; i < cartItemNames.length; i++) {
       if (cartItemNames[i].innerText == title) {
           alert('This item already added to the cart');
           return
       }
       
   }
  var cartRowContents = `<div class="cart-item cart-column">
  <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
  <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
  <input class="cart-quantity-input" type="number" value="1">

  <button class="btn btn-danger" type="button">X</button>
</div>`
cartRow.innerHTML = cartRowContents;
cartItems.append(cartRow);
cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows =cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
var cartRow= cartRows[i];
var priceElement = cartRow.getElementsByClassName('cart-price')[0];
var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
var price = parseFloat(priceElement.innerText.replace('$', ''))
var quantity = quantityElement.value;
total = total + (price * quantity);
    }
    total = Math.round(total * 100)/100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}

//search bar

var filter = document.getElementById('filter');

var listItem = document.getElementById('search');
filter.addEventListener('keyup', filterItem);
var hideTtle1 = document.getElementById('ttle1');
var hideTtle2 = document.getElementById('ttle2');
var hideTtle3 = document.getElementById('ttle3');
var hideTtle4 = document.getElementById('ttle4');
var hideTtle5 = document.getElementById('ttle5');
var hideTtle6 = document.getElementById('ttle6');
var hideTtle7 = document.getElementById('ttle7');
var hideTtle8 = document.getElementById('ttle8');

function filterItem(e) {
hideTtle1.style.display ="none";
hideTtle2.style.display ="none";
hideTtle3.style.display ="none";
hideTtle4.style.display ="none";
hideTtle5.style.display ="none";
hideTtle6.style.display ="none";
hideTtle7.style.display ="none";
hideTtle8.style.display ="none";
//
  var text = e.target.value.toLowerCase();
  var items = listItem.getElementsByClassName('product-items');
  Array.from(items).forEach(function (item) {
      var itemName = item.parentNode.textContent;
      if (itemName.toLowerCase().indexOf(text) != -1) {
          item.style.display = 'block';
          //item.style.background ="lightgrey";
      }else{
          item.style.display = 'none';
      }
  });
}

//new-product-size 
function itemClicked() {
    var checkBox1 = document.getElementById("customCheck1");
    var text1 = document.querySelector(".pro-sizes1");
     var checkBox2 = document.getElementById("customCheck2");
    var text2 = document.querySelector(".pro-sizes2");
    var checkBox3 = document.getElementById("customCheck3");
    var text3 = document.querySelector(".pro-sizes3");
    var checkBox4 = document.getElementById("customCheck4");
    var text4 = document.querySelector(".pro-sizes4");
    var checkBox5 = document.getElementById("customCheck5");
    var text5 = document.querySelector(".pro-sizes5");
    var checkBox6 = document.getElementById("customCheck8");
    var text6 = document.querySelector(".pro-sizes6");
    
    if (checkBox1.checked == true){
      text1.style.display = "block";
    } else {
       text1.style.display = "none";
    }
     if (checkBox2.checked == true){
      text2.style.display = "block";
    } else {
       text2.style.display = "none";
    }
    if (checkBox3.checked == true){
        text3.style.display = "block";
      } else {
         text3.style.display = "none";
      }
      if (checkBox4.checked == true){
        text4.style.display = "block";
      } else {
         text4.style.display = "none";
      }
       if (checkBox5.checked == true){
        text5.style.display = "block";
      } else {
         text5.style.display = "none";
      }
      if (checkBox6.checked == true){
          text6.style.display = "block";
        } else {
           text6.style.display = "none";
        }
  }

  