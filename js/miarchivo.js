let productName = document.getElementById('productName');
let productDesc = document.getElementById('productDesc');
let productModel = document.getElementById('productModel');
let productPrice = document.getElementById('productPrice');
let productBtn = document.getElementById('productBtn');
let productImg = document.getElementById('productImg');
let formControl = document.getElementsByClassName('form-control');
let myClose = document.getElementsByClassName('myClose');
let mySearchInp = document.getElementById('mySearchInp');
let productHeadline = document.getElementById('productHeadline');
let successProductAlert = document.getElementById('successProductAlert');
let dataRow = document.getElementById('dataRow');
let productContainer;
let currentIndex = 0;

if (localStorage.getItem('productsStorage') == null) {
    productContainer = [];
    productHeadline.style.display = 'none';
    searchItem.style.display = 'none';
} else {
    productContainer = JSON.parse(localStorage.getItem('productsStorage'));
    showProducts();
}

disableBtn();

productBtn.addEventListener('click', function () {
    if (productBtn.innerHTML == 'agregar producto') {
        addProducts();
        showAlert();
        showProducts();
        emptyFields();
    } else {
        saveUpdate();
        emptyFields();
    }

});

function showAlert() {
    $(successProductAlert).fadeIn(500, function () {
        $(successProductAlert).fadeOut(2000);
    });
}

function disableBtn() {
    for (let i = 0; i < formControl.length - 1; i++) {
        if (formControl[i].value == '') {
            productBtn.disabled = true;
        } else {
            productBtn.removeAttribute('disabled');
        }
    }
}

function addProducts() {

    let products = {
        productName: productName.value,
        productDesc: productDesc.value,
        productModel: productModel.value,
        productPrice: productPrice.value
    };
    productContainer.push(products);

    localStorage.setItem('productsStorage', JSON.stringify(productContainer));
    console.log('products added');
}

function showProducts() {

    let rows = '';
    for (let i = 0; i < productContainer.length; i++) {
        rows += '<div class="col-lg-4 col-md-6 col-sm-12 my-2 products"><div class="product"><div class="card p-1 text-center m-auto" style="width: 18rem;"><div class="d-flex justify-content-between"><i class="fas fa-edit fa-2x" onclick="updateProduct(' + i + ')"></i><i class="fa fa-times-circle fa-2x " onclick="deleteItem(' + i + ')"></i></div><img class="img-fluid" src="images/3191.png" class="card-img-top" alt="test"><div class="card-body"><h5 class="card-title">' + productContainer[i].productName + '</h5><p class="card-text">' + productContainer[i].productDesc + '</p><a href="#" class="btn btn-primary">' + productContainer[i].productPrice + ' pesos</a></div></div></div></div>';
    }
    document.getElementById('dataRow').innerHTML = rows;
    productContainer = JSON.parse(localStorage.getItem('productsStorage'));
    productHeadline.style.display = 'block';
    searchItem.style.display = 'block';
}

function updateProduct(index) {
    productName.value = productContainer[index].productName;
    productDesc.value = productContainer[index].productDesc;
    productPrice.value = productContainer[index].productPrice;
    productModel.value = 'sn123';
    productBtn.innerHTML = 'update product';
    currentIndex = index;
}

function saveUpdate() {
    let products = {
        productName: productName.value,
        productDesc: productDesc.value,
        productModel: productModel.value,
        productPrice: productPrice.value
    };
    productContainer[currentIndex] = products;
    localStorage.setItem('productsStorage', JSON.stringify(productContainer));
    showProducts();
    productBtn.innerHTML = 'agregar producto';
}

function emptyFields() {
    for (let i = 0; i < formControl.length; i++) {
        formControl[i].value = '';
    }
    disableBtn();
}

function deleteItem(item) {
    productContainer.splice(item, 1);
    localStorage.setItem('productsStorage', JSON.stringify(productContainer));
    showProducts();
}
mySearchInp.addEventListener('keyup', function (e) {
    let rows = '';
    for (let i = 0; i < productContainer.length; i++) {
        if (productContainer[i].productName.toLowerCase().includes(e.target.value.toLowerCase())) {
            rows += '<div class="col-lg-4 col-md-6 col-sm-12 my-2 products"><div class="product"><div class="card p-1 text-center m-auto" style="width: 18rem;"><div class="d-flex justify-content-between"><i class="fas fa-edit fa-2x" onclick="updateProduct(' + i + ')"></i><i class="fa fa-times-circle fa-2x" onclick="deleteItem(' + i + ')"></i></div><img class="img-fluid" src="images/3191.png" class="card-img-top" alt="test"><div class="card-body"><h5 class="card-title">' + productContainer[i].productName + '</h5><p class="card-text">' + productContainer[i].productDesc + '</p><a href="#" class="btn btn-primary">' + productContainer[i].productPrice + '</a></div></div></div></div>';
        }
    }
    document.getElementById('dataRow').innerHTML = rows;
});

let navHeight = $('nav').outerHeight();
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > navHeight) {
        document.querySelector('nav').style.position = 'fixed';
        document.querySelector('nav').style.zIndex = '1000';
        document.querySelector('.my-Container').style.width = '85%';
        document.querySelector('nav').style.width = '85%';
        document.querySelector('.marginTop').style.marginTop = '0rem';
    } else {
        document.querySelector('nav').style.position = 'relative';
        document.querySelector('.my-Container').style.width = '85%';
        document.querySelector('nav').style.width = '100%';
        document.querySelector('.marginTop').style.marginTop = '3rem';
    }
});



