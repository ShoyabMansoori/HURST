// adding header and footer

// $(function () {
//     $("#main-header").load("header.html");
//     $("#main-footer").load("footer.html");
// });

// header and footer section
$(document).ready(function () {
    fetch('/header.html')
        .then(response => response.text())
        .then(function (headerHtml) {
            $('#main-header').html(headerHtml);
        });

    fetch('/footer.html')
        .then(response => response.text())
        .then(function (footerHtml) {
            $('#main-footer').html(footerHtml);
        });
});

let productsListUrl = '/indexproducts.json';

async function loadProducts(productsListUrl) {

    fetch(productsListUrl)
        .then(response => response.json())
        .then(data => {
            const products = data.Products;

            let cards = '';
            products.forEach(product => {
                let isNewDiv = '';
                if (product.isNew === 'TRUE') {
                    isNewDiv = `<div class="new-product">
                                    <span>New</span>
                                </div>`;
                }

                let stars = '';
                const ratings = Math.floor(+product.ratings);
                for (let i = 1; i <= 5; i++) {
                    if (i <= ratings) {
                        stars = stars + '<i class="fa fa-star checked"></i>';
                    } else {
                        stars = stars + '<i class="fa fa-star-o"></i>';
                    }
                }
                cards = cards +
                    '<div class="productCard col-xl-4 col-lg-4 col-md-6">'+
                        '<div class="row" id="featuredProducts">'+
                        '    <div class="card single-productList-view" id="produclist' + product.id + '">'+
                          '      <div class="product-list-img">'+
                          '          <img src="images/' + product.imageName + '.jpg" class="card-img-top" alt="Product Image"height="260px" width="150px">'+
                          '              <div class="new-product">'+
                          '                  <span>' + isNewDiv + '</span>'+
                          '              </div>'+
                          '      </div>'+
                          '      <div class="card-body listProduct-caption text-center">'+
                          '          <h4><a href="#">' + product.name + '</a></h4>'+
                          '          <div class="listProduct-price">'+
                          '              <div class="d-flex justify-content-center">'+
                          '                  <a href="#" class="product-prise">$' + product.priceAfterDiscount + '</a>'+
                          '                  <a href="#" class="product-discount">$' + product.price + '</a>'+
                          '                  <a href="#"class="product-off">' + product.off + '</a>'+
                          '              </div>'+
                          '          </div>'+
                          '          <div class="listProduct-stars d-flex justify-content-center">'+
                          '          ' + stars + '' +
                          '          </div>'+
                          '          <div class="wishlist row text-center">'+
                          '              <div class="col-3">'+
                          '                  <a href="wishlist.html">'+
                          '                    <i class="fa fa-heart-o"></i>'+
                          '                  </a>'+
                          '              </div>'+
                          '              <div class="col-1">|</div>'+
                          '              <div class="col-4">'+
                          '                  <a href="#">'+
                          '                    <i class="fa fa-refresh"></i>'+
                          '                  </a>'+
                          '              </div>'+
                          '              <div class="col-1">|</div>'+
                          '              <div class="col-3">'+
                          '                  <a href="cart.html">'+
                          '                    <i class="fa fa-shopping-cart"></i>'+
                          '                  </a>'+
                           '             </div>'+
                          '          </div>'+
                         '      </div>'+
                        '    </div>'+
                       ' </div>'+
                    '</div>';
            });
            document.querySelector('#homeProduct').innerHTML = cards;
            document.querySelector('#homeProduct2').innerHTML = cards;
            document.querySelector('#homeProduct3').innerHTML = cards;
            document.querySelector('#homeProduct4').innerHTML = cards;
        });
}

loadProducts(productsListUrl);
