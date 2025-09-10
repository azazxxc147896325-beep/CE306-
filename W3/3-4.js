let products = [{price : 200 , discount: 10 },{price : 150 , discount: 5 },{price : 500 , discount: 20 },{price : 100 , discount: 0 },{price : 300 , discount: 15 }];
function calculateTotal(){
    let total = 0;
        products.forEach(function(product){
            let discountedPrice = product.price - (product.price * product.discount / 100);
            console.log("Original: " + product.price + 
                        ", Discount: " + product.discount + "%" +
                        ", Final: " + discountedPrice);
            total = total + discountedPrice;
     });
    console.log("Total price after discount: " + total);
}
calculateTotal();