
function checkout(request, response) {
    response.render("checkout.view.ejs");
}

function confirmation(request, response) {
    response.render("confirm.view.ejs");
}

module.exports = { checkout, confirmation };