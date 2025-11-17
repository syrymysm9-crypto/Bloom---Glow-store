
let cart=[];
function toggleCart(){document.getElementById('cartPanel').classList.toggle('open');}
function addToCart(n,p){cart.push({n,p});update();}
function update(){
let list=document.getElementById('items');list.innerHTML='';
let total=0;
cart.forEach(i=>{list.innerHTML+=`<li>${i.n} - SAR ${i.p}</li>`;total+=i.p;});
document.getElementById('total').innerText=total;
document.getElementById('count').innerText=cart.length;
}
function checkout(){alert('Thank you for your purchase!');cart=[];update();}
