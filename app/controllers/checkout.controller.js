
function checkout(request, response) {
    var totalPrice = 0;
    var count = 0;
    //Initialize cart
    if (!request.session.cart) {
        request.session.cart = [];
    }
    //Gather total price of trees for checkout
    for(tree of request.session.cart){
        count++;
        totalPrice += Number(tree.price);
    }
    //Render view with cart information and relevant total price and tree count
    response.render("checkout.view.ejs", 
    {
        htmlTitle: "Checkout",
        cart: request.session.cart,
        totalTreePrice: totalPrice.toLocaleString(),
        count: count
    });
}

function confirmation(request, response) {
    response.render("confirm.view.ejs");
}

module.exports = { checkout, confirmation };


