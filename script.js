let products=[

{
name:"Laptop",
price:"₹50000"
},

{
name:"Phone",
price:"₹30000"
},

{
name:"Tablet",
price:"₹20000"
},

{
name:"Headphones",
price:"₹4000"
}

];

function displayProducts(
list=products
)
{

let html="";

for(
let i=0;
i<list.length;
i++
)
{

html+=`

<div class="preview-card">

<h2>

${list[i].name}

</h2>

<p>

${list[i].price}

</p>

<button
onclick="buyNow('${list[i].name}','${list[i].price}')">

Buy Now

</button>

</div>

`;

}

let container=

document.getElementById(
"products"
);

if(container)
{

container.innerHTML=
html;

}

}

function buyNow(
name,
price
)
{

localStorage.setItem(

"cart",

JSON.stringify({

name:name,

price:price

})

);

window.location.href=

"cart.html";

}

function searchProducts()
{

let search=

document
.getElementById(
"search"
)
.value
.toLowerCase();

let filtered=

products.filter(

p=>

p.name
.toLowerCase()
.includes(
search
)

);

displayProducts(
filtered
);

}

displayProducts();
