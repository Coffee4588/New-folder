const product = [
    {
        id: 0,
        image: 'image/aa-1.jpg',
        title: 'Black Coffee',
        price: 120,
    },
    {
        id: 1,
        image: 'image/aa-2.jpg',
        title: 'Hot Caramel',
        price: 60,
    },
    {
        id: 2,
        image: 'image/aa-3.jpg',
        title: 'Hot Chocolate',
        price: 230,
    },
    {
        id: 3,
        image: 'image/aa-4.jpg',
        title: 'Iced Americano',
        price: 100,
    },   
    {
        id: 4,
        image: 'image/aa-5.jpg',
        title: 'Dirty Macha',
        price: 100,
    },
    {
        id: 5,
        image: 'image/aa-6.jpg',
        title: 'White Chocolate',
        price: 110,
    },   
    {
        id: 6,
        image: 'image/aa-7.jpg',
        title: 'Chocolate',
        price: 90,
    },   
    {
        id: 7,
        image: 'image/aa-8.jpg',
        title: 'Mocha',
        price: 80,
    },   
    {
        id: 8,
        image: 'image/aa-9.jpg',
        title: 'Matcha Frappe',
        price: 130,
    },   
    {
        id: 9,
        image: 'image/aa-10.jpg',
        title: 'Coffee Jelly',
        price: 140,
    },   
    {
        id: 10,
        image: 'image/aa-11.jpg',
        title: 'Dark Caramel',
        price: 140,
    },   
    {
        id: 11,
        image: 'image/aa-12.jpg',
        title: 'Strawberry Coff',
        price: 145,
    },   
    {
        id: 12,
        image: 'image/aa-13.jpg',
        title: 'Grilled Cheese',
        price: 50,
    },   
    {
        id: 13,
        image: 'image/aa-14.jpg',
        title: 'Cheese Roll',
        price: 50,
    },   
    {
        id: 14,
        image: 'image/aa-15.jpg',
        title: 'Cinnamon Swirl',
        price: 50,
    },   
    {
        id: 15,
        image: 'image/aa-16.jpg',
        title: 'Ensaymada',
        price: 50,
    },   
    {
        id: 16,
        image: 'image/aa-17.jpg',
        title: 'Truffle Pasta',
        price: 120,
    },   
    {
        id: 17,
        image: 'image/aa-18.jpg',
        title: 'Pesto Rosso',
        price: 125,
    },   
    {
        id: 18,
        image: 'image/aa-19.jpg',
        title: 'Rolled Lasagna',
        price: 130,
    },   
    {
        id: 19,
        image: 'image/aa-20.jpg',
        title: 'Oreo Cupcakes',
        price: 75,
    },   
    {
        id: 20,
        image: 'image/aa-21.jpg',
        title: 'Red Velvet',
        price: 40,
    },   
    {
        id: 21,
        image: 'image/aa-22.jpg',
        title: 'Classic Pandesal',
        price: 20,
    },
    {
        id: 22,
        image: 'image/aa-23.jpg',
        title: 'Buttery Buns',
        price: 50,
    },   
    {
        id: 23,
        image: 'image/aa-24.jpg',
        title: 'Tuna Pandesal',
        price: 45,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}