const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}]

const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  quantity: 0
}]


// Waffle Cone or Bowl Function
function buyCone(coneName) {
  console.log('picking cone', coneName)

  let foundCone = containers.find(cone => cone.name == coneName)
  foundCone.quantity++
  console.log(foundCone);
  drawTotal()
  drawCart()
}

// Ice Cream Function
function buyCream(creamName) {
  console.log('picking cream', creamName)

  let foundCream = iceCream.find(cream => cream.name == creamName)
  foundCream.quantity++
  console.log(foundCream);
  drawTotal()
  drawCart()
}

// Topping Function
function buyTop(topName) {
  console.log('picking topping', topName)

  let foundTop = toppings.find(top => top.name == topName)
  foundTop.quantity++
  console.log(foundTop);
  drawTotal()
  drawCart()
}

// Look and add price of quantity of cones. Add to total.
function drawTotal() {
  let total = 0

  containers.forEach(cone => cone.quantity > 0 ? total += cone.quantity * cone.price : total += 0)
    ;

  iceCream.forEach(cream => cream.quantity > 0 ? total += cream.quantity * cream.price : total += 0)
    ;

  toppings.forEach(top => top.quantity > 0 ? total += top.quantity * top.price : total += 0)
  console.log(total, 'total');

  document.getElementById('total').innerText = total.toString()

}

// look for each item purchased draw to cart with quantity
function drawCart() {
  let template = ''
  containers.forEach(cone => {
    if (cone.quantity > 0) {

      template += `
          <div class="d-flex justify-content-around align-items-center">
             <p>${cone.name}</p>
             <p>x${cone.quantity}</p>
             <p>$${cone.price}</p>
             <button onclick="removeCone('${cone.name}')" class="btn text-danger"><i class="mdi mdi-delete"></i></button>
          </div>`
    }
        })
       
          toppings.forEach(top => {
            if (top.quantity > 0) {
        
              template += `
                  <div class="d-flex justify-content-around align-items-center">
                     <p>${top.name}</p>
                     <p>x${top.quantity}</p>
                     <p>$${top.price}</p>
                     <button onclick="removeTop('${top.name}')" class="btn text-danger"><i class="mdi mdi-delete"></i></button>
                  </div>`
        }
    })

    iceCream.forEach(cream => {
      if (cream.quantity > 0) {
  
        template += `
            <div class="d-flex justify-content-around align-items-center">
               <p>${cream.name}</p>
               <p>x${cream.quantity}</p>
               <p>$${cream.price}</p>
               <button onclick="removeCream('${cream.name}')" class="btn text-danger"><i class="mdi mdi-delete"></i></button>
            </div>`
  }
})
  document.getElementById('cart').innerHTML = template
  drawTotal()
}

function removeCone(coneName) {
  console.log('removing item', coneName)
  
  let deleteCone = containers.find(cone => cone.name == coneName)
  deleteCone.quantity--
  console.log(deleteCone);

  drawCart()
}

function removeTop(topName) {
  console.log('removing item', topName)

let deleteTop = toppings.find(top => top.name == topName)
  deleteTop.quantity--
  console.log(deleteTop);
  drawCart()
}

function removeCream(creamName) {
  console.log('removing item', creamName)

let deleteCream = iceCream.find(cream => cream.name == creamName)
  deleteCream.quantity--
  console.log(deleteCream);
  drawCart()
}

function checkout() {
  
  if (window.confirm("Are you ready to checkout?")) {
      containers.forEach(cone => {
          cone.quantity = 0
      })
      toppings.forEach(top => {
          top.quantity = 0
      })
      iceCream.forEach(cream => {
          cream.quantity = 0
      })

      drawCart()
  }
}
