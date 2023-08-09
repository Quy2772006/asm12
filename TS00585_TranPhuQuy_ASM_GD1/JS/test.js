let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'MÓN TRÁNG MIỆNG',
        image: '1.PNG',
        price: 32000
    },
    {
        id: 2,
        name: 'CAFE MUỐI',
        image: '2.PNG',
        price: 33000
    },
    {
        id: 3,
        name: 'CAFE SỮA',
        image: '3.PNG',
        price: 34000
    },
    {
        id: 4,
        name: 'CAFE ĐEN ĐÁ',
        image: '4.PNG',
        price: 30000
    },
    {
        id: 5,
        name: 'BÁNH MÌ THỊT',
        image: '5.PNG',
        price: 20000
    },
    {
        id: 6,
        name: 'BÁNH MOCHI HỘP',
        image: '6.PNG',
        price: 120000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Thêm vào giỏ hàng</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
    // Lưu dữ liệu giỏ hàng vào localStorage
localStorage.setItem('cartItems', JSON.stringify(listCards));

}
// sanpham
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

// Lưu dữ liệu giỏ hàng vào cookie
document.cookie = "listCards=" + JSON.stringify(listCards) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";

// Tải lại giao diện giỏ hàng từ cookie
function addCartToHTML() {
  // Lấy dữ liệu giỏ hàng từ cookie
  const cookies = document.cookie.split(';');
  let listCards = null;
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'listCards') {
      listCards = JSON.parse(decodeURIComponent(value));
      break;
    }
  }

  // Kiểm tra nếu có dữ liệu giỏ hàng trong cookie thì thực hiện cập nhật giao diện giỏ hàng
  if (listCards) {
    // Xử lý cập nhật giao diện giỏ hàng với dữ liệu từ cookie
    // ...

    // Ví dụ: Cập nhật giao diện giỏ hàng bằng cách gọi hàm reloadCard()
    reloadCard();
  }
}

// Gọi hàm addCartToHTML() để tải lại giao diện giỏ hàng từ cookie
addCartToHTML();
